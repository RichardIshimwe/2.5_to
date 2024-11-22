import { Type30 } from "@/app/utils/enum/3.0";

export const transformTextSection = (inputField: TextInputField): TransformedTextSection => ({
  key: inputField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${inputField.key}_0`,
  type: Type30.BLOCK, // Using the 3.0 type
  props: {
    label: inputField.templateOptions?.label || "Text Section",
    placeholder: "",
    disabled: false,
  },
  expressions: {},
  validation: {
    messages: {},
  },
});
