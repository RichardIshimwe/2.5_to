import { Type25 } from "./utils/enum/2.5";
import { Type30 } from "./utils/enum/3.0";

export interface TransformedField {
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

export interface Block {
  key: string;
  templateOptions?: {
    label?: string;
  };
}

export interface TransformedTextSection {
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

export interface CustomInputField {
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

export interface TransformedInput {
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

export type AllFields = CustomInputField | NidInputField | Block;

export interface FetchedProperty {
  originKey: string;
  targetFieldKey: string;
}

export interface SummaryFormatting {
  value: string;
  formatType: string;
}

export interface TemplateOptions {
  title?: string;
  userType?: string;
  required?: boolean;
  rfaDisable?: boolean;
  isSubLabel?: boolean;
  summarySection?: string;
  summaryFormatting?: SummaryFormatting;
  identificationType?: string;
  placeholder?: string;
  fetchedPropertiesToPrefill?: FetchedProperty[];
  icon?: string;
  label?: string;
}

export interface NidInputField {
  key: string;
  type: string;
  selected: boolean;
  className: string;
  hideExpression: string;
  templateOptions: TemplateOptions;
}

export interface Validation {
  messages: Record<string, string>;
}

export interface Expressions {
  [key: string]: unknown;
}

export interface Props {
  label: string;
  placeholder?: string;
  disabled: boolean;
  required?: boolean;
  hint?: string;
  tooltip?: string;
  internalDescription?: string;
  readonly?: boolean;
}

export interface Field {
  key: string;
  id: string;
  type: string;
  props: Props;
  expressions: Expressions;
  validation: Validation;
}

export interface Block {
  key: string;
  id: string;
  type: string;
  props: Props;
  expressions: Expressions;
  validation: Validation;
  fieldGroup: Field[];
}

export interface Form25 {
  fields: Section[];
}

export type Section = {
  key: string;
  wrappers?: string[];
  fieldGroup: Field[];
  templateOptions?: TemplateOptions;
  fieldGroupClassName?: string;
  others: number[];
};
