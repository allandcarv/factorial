import type { StateCreator } from 'zustand';

export interface SelectedTypesState {
  selectedTypes: Set<string>;
  addSelectedType: (typeId: string) => void;
  removeSelectedType: (typeId: string) => void;
  resetSelectedType: () => void;
}

export const createSelectedTypesSlice: StateCreator<SelectedTypesState> = (
  set
) => ({
  selectedTypes: new Set<string>(),
  addSelectedType: (typeId) =>
    set((state) => {
      state.selectedTypes.add(typeId);
      return { ...state, selectedTypes: new Set([...state.selectedTypes]) };
    }),
  removeSelectedType: (typeId) =>
    set((state) => {
      state.selectedTypes.delete(typeId);
      return { ...state, selectedTypes: new Set([...state.selectedTypes]) };
    }),
  resetSelectedType: () =>
    set((state) => ({ ...state, selectedTypes: new Set<string>() })),
});
