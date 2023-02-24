
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
    permission: Permission;
  }

  export interface Permission {
    id:number;
    userId: number;
    canAddProduct: boolean; 
    canEditProduct: boolean;
    canViewProduct: boolean;
    canDeleteProduct: boolean;
    canAddOrder: boolean;
    canEditOrder: boolean;
    canViewOrder: boolean;
    canDeleteOrder: boolean;
    canAddUser: boolean;
    canEditUser: boolean;
    canViewUser: boolean;
    canDeleteUser: boolean;   
  }


 