import { Type25 } from "../enum/2.5";
import { transformCustomInput } from "../../components/platform components/Custom Input/CustomInput";
import { transformNidFetch } from "../../components/platform components/Nid Fetch/NidFetch";
import { transformTextSection } from "../../components/platform components/Text Section/TextSection";
import {
  CustomInputField,
  NidInputField,
  Block,
  AllFields,
} from "../../types";

export const transformField = (field: AllFields) => {
  console.log("field 1:1 : ",field);
  switch (field.type) {
    case Type25.CUSTOM_INPUT:
      return transformCustomInput(field as CustomInputField);
    case Type25.NID_FETCH:
      return transformNidFetch(field as NidInputField);
    case Type25.TEXT_SECTION:
      return transformTextSection(field as Block);
    default:
      throw new Error(`Unknown field type: ${field.type}`);
  }
};
