import { AllFields, Form25, Section } from "@/app/types";
import { transformField } from "./transformFields";

export const Transform25To30 = (json25: Form25) => {
    console.log("inputed json in transformer : ",json25);
    try {
        return {
            fields: json25.fields.map((section: Section) => transformField(section.fieldGroup[0] as AllFields)),
        };
    } catch {
        throw new Error(`Invalid 2.5 JSON`);
    }
  };
  