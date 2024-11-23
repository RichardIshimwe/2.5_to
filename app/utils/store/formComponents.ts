import { create } from "zustand";

export interface modifiedComponentType {
  type: string;
  count: number;
}

export interface sectionType {
    name: string;
    transformedCompones: modifiedComponentType[];
    skippedCompones: modifiedComponentType[];
}

export interface formComponentsType {
  sections: sectionType[];
  setSections: (
    sections: {
      name: string;
      transformedCompones: modifiedComponentType[];
      skippedCompones: modifiedComponentType[];
    }[]
  ) => void;
}

export const FormComponents = create<formComponentsType>((set) => ({
  sections: [],
  setSections: (newSections) =>
    set((state) => ({ sections: [...state.sections, ...newSections] })),
}));
