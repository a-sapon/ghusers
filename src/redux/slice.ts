import { createSlice, Slice } from '@reduxjs/toolkit';
import { IUsersState } from '../interfaces/interfaces';

const initialState: IUsersState = {
  users: [],
  since: 0,
  perPage: 10,
};

const usersSlice: Slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state, { payload }) => ({ ...state, users: payload }),
    // setSince: (state, { payload }) => ({ ...state, since: payload }),
    // setPerPage: (state, { payload }) => ({ ...state, perPage: payload }),
  },
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
