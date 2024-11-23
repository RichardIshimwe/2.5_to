import { AllFields, Form25, Section } from "@/app/types";
import { transformField } from "./transformFields";
import { GetSectionName } from "./getTranslation";

export const Transform25To30 = (json25: Form25) => {
  try {
    return {
      fields: [{
        id: "formly_193_sections__0",
        type: "sections",
        props: {},
        expressions: {},
        validation: {
          messages: {},
        },
        validators: null,
        fieldGroup: json25.fields.map((section: Section) => {
          return {
            key: section.key,
            id: `formly_${section.key}`,
            type: "formly-group",
            props: {
              label:
                section.templateOptions?.label !== null
                  ? section.templateOptions?.label
                  : GetSectionName(section.templateOptions?.label),
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
      }],
    };
  } catch {
    throw new Error(`Invalid 2.5 JSON`);
  }
};
