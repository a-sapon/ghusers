interface IUser {
  id: string;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface IUsersState {
  users: IUser[];
  since: number;
  perPage: number;
}

export interface RootState {
  users: IUsersState
}

export interface IGetUsersAction {
  type: string;
  payload: any;
}