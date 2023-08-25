import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rfk';

interface IGithubState {
  favourites: string[];
}

const initialState: IGithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourites(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourites(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(
        (elem) => elem !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export default githubSlice.reducer;
