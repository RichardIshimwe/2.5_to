import { create } from "zustand";

export interface modifiedComponentType {
  type: string;
  count: number;
}

export interface sectionType {
  name: string;
  transformedComponents: modifiedComponentType[];
  skippedComponents: modifiedComponentType[];
}

export interface formComponentsType {
  sections: sectionType[];
  setSections: (
    updater: (prevSections: sectionType[]) => sectionType[]
  ) => void;
}

export const FormComponents = create<formComponentsType>((set) => ({
  sections: [],
  setSections: (updater) =>
    set((state) => ({
      sections: updater(state.sections),
    })),
}));
