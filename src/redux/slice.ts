import { createSlice, Slice } from '@reduxjs/toolkit';
import { IUsersState } from '../interfaces/interfaces';

const initialState: IUsersState = {
  users: [],
  currentUser: null,
  since: 0,
  perPage: 10,
  totalPages: 10,
  currentPage: 1
};

const usersSlice: Slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state, { payload }) => ({ ...state, users: payload }),
    setCurrentUser: (state, { payload }) => ({ ...state, currentUser: payload }),
    setSince: (state, { payload }) => ({ ...state, since: payload }),
    setCurrentPage: (state, { payload }) => ({ ...state, currentPage: payload }),
  },
});

export const { fetchUsers, setCurrentUser, setSince, setCurrentPage } = usersSlice.actions;

export default usersSlice.reducer;
