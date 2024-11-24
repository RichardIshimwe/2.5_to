import { CustomDate, TransformedDate } from "@/app/types";

export const transformDateField = (dateField: CustomDate): TransformedDate => ({
  key: dateField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${dateField.key}_0`,
  type: "customdatepicker",
  props: {
    label: dateField.templateOptions?.label || "Date Picker",
    placeholder: dateField.templateOptions?.placeholder || "",
    disabled: false,
    required: dateField.templateOptions?.required || false,
  },
  expressions: {},
  validation: {
    messages: {},
  },
});
