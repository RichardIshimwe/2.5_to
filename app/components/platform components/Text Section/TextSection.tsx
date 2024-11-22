import { Block, TransformedTextSection } from "@/app/types";
import { Type30 } from "@/app/utils/enum/3.0";

export const transformTextSection = (
  inputField: Block
): TransformedTextSection => ({
  key: inputField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${inputField.key}_0`,
  type: Type30.BLOCK,
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
