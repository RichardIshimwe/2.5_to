import { CustomSelect, TransformedDropdown } from "@/app/types";
import { Type30 } from "@/app/utils/enum/3.0";

export const transformCustomSelect = (
  dropdownField: CustomSelect
): TransformedDropdown => ({
  key: dropdownField.key,
  id: `formly_${Math.random().toString(36).substring(7)}_${
    dropdownField.key
  }_0`,
  type: Type30.CUSTOM_SELECT,
  props: {
    label: dropdownField.templateOptions?.label || "Dropdown Selector",
    placeholder:
      dropdownField.templateOptions?.placeholder || "Select an option",
    disabled: dropdownField.templateOptions?.disabled || false,
    required: dropdownField.templateOptions?.required || false,
    options:
      dropdownField.templateOptions?.options.map((option) => ({
        value: option.value || option.name,
        label: option.name,
      })) || [],
    multiple: false,
    bindValue: "value",
    bindLabel: "label",
  },
  expressions: {},
  validation: {
    messages: {},
  },
});
