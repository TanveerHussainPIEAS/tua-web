
export interface LoginModel {
    email: string;
    password: string;
  }


  export interface AuthenticatedUser {
    id:number;
    email: string;
    userName: string;
    name: string;
    token: string;
  }

