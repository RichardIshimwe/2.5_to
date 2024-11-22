import { Type30 } from "@/app/utils/enum/3.0";

export const transformNidFetch = (inputField: NidInputField): TransformedField => ({
  key: inputField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${inputField.key}_0`,
  type: Type30.CUSTOM_OTP_DATA_FETCH, // Using the 3.0 type
  props: {
    label: inputField.templateOptions?.title || "NID Fetch",
    url: "/integration/v1/fetch/sync",
    placeholder: inputField.templateOptions?.placeholder || "",
    disabled: false,
    required: inputField.templateOptions?.required || false,
  },
  expressions: {},
  validation: {
    messages: {},
  },
});
