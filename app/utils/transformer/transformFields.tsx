import { Type25 } from "../enum/2.5";
import { transformCustomInput } from "../../components/platform components/Custom Input/CustomInput";
import { transformNidFetch } from "../../components/platform components/Nid Fetch/NidFetch";
import { transformTextSection } from "../../components/platform components/Text Section/TextSection";
import { CustomInputField, NidInputField, Block, AllFields } from "../../types";
import { sectionType } from "../../utils/store/formComponents";

export const transformField = (
  field: AllFields,
  setSections: (
    updater: (prevSections: sectionType[]) => sectionType[]
  ) => void,
  currentSectionName: string
) => {
  console.log("field 1:1 : ", field);
  setSections((prevSections) => {
    return prevSections.map((section) => {
      if (section.name === currentSectionName) {
        const existingIndex = section.transformedComponents.findIndex(
          (component) => component.type === field.type
        );
        if (existingIndex !== -1) {
          const updatedComponents = [...section.transformedComponents];
          updatedComponents[existingIndex].count += 1;

          return {
            ...section,
            transformedComponents: updatedComponents,
          };
        } else {
          return {
            ...section,
            transformedComponents: [
              ...section.transformedComponents,
              { type: field.type, count: 1 },
            ],
          };
        }
      }
      return section;
    });
  });

  switch (field.type) {
    case Type25.CUSTOM_INPUT:
      return transformCustomInput(field as CustomInputField);
    case Type25.NID_FETCH:
      return transformNidFetch(field as NidInputField);
    case Type25.TEXT_SECTION:
      return transformTextSection(field as Block);
    default:
      setSections((prevSections) => {
        return prevSections.map((section) => {
          if (section.name === currentSectionName) {
            const existingIndex = section.skippedComponents.findIndex(
              (component) => component.type === field.type
            );
            if (existingIndex !== -1) {
              const updatedComponents = [...section.skippedComponents];
              updatedComponents[existingIndex].count += 1;
    
              return {
                ...section,
                skippedComponents: updatedComponents,
              };
            } else {
              return {
                ...section,
                skippedComponents: [
                  ...section.skippedComponents,
                  { type: field.type, count: 1 },
                ],
              };
            }
          }
          return section;
        });
      });
      console.log("this field is not found : ", field);
      // throw new Error(`Field type ${field.type} not supported`);
  }
};
