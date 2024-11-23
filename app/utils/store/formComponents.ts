import { create } from 'zustand';

export interface formComponentsType {
    sections: string[];
    setSections: (sections: string[]) => void;
    componentsStatus: object[];
    setComponentsStatus: (componentsStatus: object[]) => void;
}

export const FormComponents = create<formComponentsType>((set) => ({
    sections: [],
    setSections: (newSections) => set((state) => ({ sections: [...state.sections, ...newSections] })),
    componentsStatus: [],
    setComponentsStatus: (componentsStatus) => set(() => ({ componentsStatus })),
}));
