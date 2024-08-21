import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  isMember: false,
  exsistingUserId: null,

  login: () => {},
  logout: () => {},
  isAdminHandler: () => {},
  isMemberHandler: () => {},
  exsistingUserHandler: () => { },
});
