import { Type25 } from './enum/2.5';
import { transformCustomInput } from '../components/platform components/CustomInput';
import { transformNidFetch } from '../components/platform components/NidFetch';
import { transformTextSection } from '../components/platform components/TextSection';

export const transformField = (field: TransformField): TransformResult  => {
  switch (field.type) {
    case Type25.CUSTOM_INPUT:
      return transformCustomInput(field as CustomInputField);
    case Type25.NID_FETCH:
      return transformNidFetch(field as NidInputField);
    case Type25.TEXT_SECTION:
      return transformTextSection(field as TextInputField);
    default:
      throw new Error(`Unknown field type: ${field.type}`);
  }
};
