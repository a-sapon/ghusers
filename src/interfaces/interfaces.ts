interface IUser {
  id: string;
  login: string;
  html_url: string;
  avatar_url: string;
  name: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  company: string;
  blog: string;
  created_at: string;
  bio: string;
}

export interface IUsersState {
  users: IUser[];
  currentUser: IUser | null;
  since: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
}

export interface RootState {
  users: IUsersState;
}

export interface IGetUsersAction {
  type: string;
  payload: any;
}
