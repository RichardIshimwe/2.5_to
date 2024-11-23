import { AllFields, Form25, Section } from "@/app/types";
import { transformField } from "./transformFields";
import { GetSectionName } from "./getTranslation";

export const Transform25To30 = (
  json25: Form25,
  setSections: (
    updater: (
      prevSections: {
        name: string;
        transformedCompones: { type: string; count: number }[];
        skippedCompones: { type: string; count: number }[];
      }[]
    ) => {
      name: string;
      transformedCompones: { type: string; count: number }[];
      skippedCompones: { type: string; count: number }[];
    }[]
  ) => void
) => {
  try {
    return {
      fields: [
        {
          id: "formly_193_sections__0",
          type: "sections",
          props: {},
          expressions: {},
          validation: {
            messages: {},
          },
          validators: null,
          fieldGroup: json25.fields.map((section: Section) => {
            const currentSectionName =
              section.templateOptions?.label !== null
                ? section.templateOptions?.label || ""
                : GetSectionName(section.key);

            setSections((prevSections) => {
              const sectionExists = prevSections.some(
                (existingSection) => existingSection.name === currentSectionName
              );

              if (!sectionExists) {
                return [
                  ...prevSections,
                  {
                    name: currentSectionName,
                    transformedCompones: [],
                    skippedCompones: [],
                  },
                ];
              }

              return prevSections;
            });

            return {
              key: section.key,
              id: `formly_${section.key}`,
              type: "formly-group",
              props: {
                label: currentSectionName,
                disabled: false,
                placeholder: "",
              },
              expressions: null,
              validation: null,
              fieldGroup: section.fieldGroup.map((field) =>
                transformField(field as AllFields)
              ),
            };
          }),
        },
      ],
    };
  } catch (error) {
    console.error("Error transforming JSON: ", error);
    throw new Error(`Invalid 2.5 JSON`);
  }
};
