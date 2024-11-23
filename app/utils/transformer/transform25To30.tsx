import { AllFields, Form25, Section } from "@/app/types";
import { transformField } from "./transformFields";
import { GetSectionName } from "./getTranslation";

export const Transform25To30 = (
  json25: Form25,
  setSections: (
    sections: {
      name: string;
      transformedCompones: { type: string; count: number }[];
      skippedCompones: { type: string; count: number }[];
    }[]
  ) => void,
  sections: {
    name: string;
    transformedCompones: { type: string; count: number }[];
    skippedCompones: { type: string; count: number }[];
  }[]
) => {
  const sectionKeys: string[] = [];
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
                ? section.templateOptions?.label
                : GetSectionName(section.key);
            setSections([
              ...sections,
              {
                name: currentSectionName as string,
                transformedCompones: [],
                skippedCompones: [],
              },
            ]);
            sectionKeys.push(currentSectionName as string);
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
  } catch {
    throw new Error(`Invalid 2.5 JSON`);
  } finally {
    console.log("Finally");
    console.log("all sections before sending to store");
    console.log("current sections keys: ", sectionKeys);
    console.log("sections in store: ", sections);
  }
};
