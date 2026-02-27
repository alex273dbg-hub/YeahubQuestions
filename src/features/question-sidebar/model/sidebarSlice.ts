import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface inistialStateInterface {
  searchValue: string;
  specializationsId: number;
  specializationsTitle: string;
  skillsId: string[];
  rate: number[];
  level: number[];
  levelSelected: string[];
}

const inistialState: inistialStateInterface = {
  searchValue: '',
  specializationsId: 11,
  specializationsTitle: 'React Frontend Developer',
  skillsId: [],
  rate: [],
  level: [],
  levelSelected: [],
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: inistialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSpecializations: (state, action) => {
      state.specializationsId = action.payload;
      state.skillsId = [];
    },
    setSpecTitle: (state, action) => {
      state.specializationsTitle = action.payload;
    },
    setSkills: (state, action: PayloadAction<number>) => {
      if (state.skillsId.includes(action.payload.toString())) {
        state.skillsId = state.skillsId.filter((id) => id !== action.payload.toString());
        return;
      }
      state.skillsId.push(action.payload.toString());
    },
    setRate: (state, action: PayloadAction<number>) => {
      if (state.rate.includes(action.payload)) {
        state.rate = state.rate.filter((rate) => rate !== action.payload);
        return;
      }
      state.rate.push(action.payload);
    },
    setLevels: (state, action: PayloadAction<string>) => {
      const [start, end] = action.payload.split('-').map(Number);

      for (let i = start; i <= end; i++) {
        state.level.push(i);
      }

      if (state.levelSelected.includes(action.payload)) {
        state.levelSelected = state.levelSelected.filter((level) => level !== action.payload);
        state.level = state.level.filter((l) => l < start || l > end);
        return;
      }
      state.levelSelected.push(action.payload);
    },
  },
});

export const { actions: sidebarActions, reducer: sidebarReducer } = sidebarSlice;
