import { AllFields, Form25, Section } from "@/app/types";
import { transformField } from "./transformFields";

export const Transform25To30 = (json25: Form25) => {
  try {
    // Return the transformed fields
    return {
      fields: json25.fields.map((section: Section) => {
        return {
          id: section.key,
          type: "sections",
          props: {},
          expressions: {},
          validation: {
            messages: {},
          },
          validators: {},
          fieldGroup: section.fieldGroup.map((field) =>
            transformField(field as AllFields)
          ),
        };
      }),
    };
  } catch {
    throw new Error(`Invalid 2.5 JSON`);
  }
};
