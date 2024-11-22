import { Type25 } from "./app/utils/enum/2.5";

interface TransformedField {
  key: string;
  id: string;
  type: Type30;
  props: {
    label: string;
    url: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
  };
  expressions: Record<string, unknown>;
  validation: {
    messages: Record<string, unknown>;
  };
}

interface NidInputField {
  key: string;
  templateOptions?: {
    title?: string;
    placeholder?: string;
    required?: boolean;
  };
}

interface TextInputField {
  key: string;
  templateOptions?: {
    label?: string;
  };
}

interface TransformedTextSection {
  key: string;
  id: string;
  type: string;
  props: {
    label: string;
    placeholder: string;
    disabled: boolean;
  };
  expressions: Record<string, unknown>;
  validation: {
    messages: Record<string, unknown>;
  };
}

interface CustomInputField {
  key: string;
  type: Type25.CUSTOM_INPUT;
  className?: string;
  hideExpression?: string;
  templateOptions?: {
    type?: string;
    textlabel?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    summarySection?: string;
  };
  expressionProperties?: {
    [property: string]: string;
  };
}

interface TransformedInput {
  key: string;
  id: string;
  type: string;
  props: {
    label: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
  };
  expressions: Record<string, unknown>;
  validation: {
    messages: Record<string, unknown>;
  };
}

type TransformField = CustomInputField | NidInputField | TextInputField;

type TransformResult =
  | ReturnType<typeof transformCustomInput>
  | ReturnType<typeof transformNidFetch>
  | ReturnType<typeof transformTextSection>;
