import { CustomInputField, TransformedInput } from "@/app/types";
import { Type30 } from "@/app/utils/enum/3.0";

export const transformCustomInput = (inputField: CustomInputField): TransformedInput => ({
  key: inputField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${inputField.key}_0`,
  type: Type30.INPUT,
  props: {
    label: inputField.templateOptions?.textlabel || "Custom Input",
    placeholder: inputField.templateOptions?.placeholder || "",
    disabled: inputField.templateOptions?.disabled || false,
    required: inputField.templateOptions?.required || false,
  },
  expressions: {},
  validation: {
    messages: {},
  },
});
