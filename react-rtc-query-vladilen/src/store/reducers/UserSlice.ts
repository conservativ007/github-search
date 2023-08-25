import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userName: string;
  targetUserName: string;
  dropdownUsers: boolean;
}

const initialState: UserState = {
  userName: 'conservativ',
  targetUserName: '',
  dropdownUsers: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setTargetUserName(state, action: PayloadAction<string>) {
      state.targetUserName = action.payload;
    },
    setDropdownUsers(state, action: PayloadAction<boolean>) {
      state.dropdownUsers = action.payload;
    },
  },
});

export default userSlice.reducer;

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
