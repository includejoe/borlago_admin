import { createContext, useContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

import { User } from "@src/types/user";

interface AuthStateInterface {
  token?: string;
  user?: User;
}

interface AuthActionInterface {
  type: "LOGIN" | "LOGOUT";
  payload?: {
    token: string;
    user: User;
  };
}

interface AuthContextInterface extends AuthStateInterface {
  login: (token: string, user: User) => void;
  logout: () => void;
}

const initialState: AuthStateInterface = {
  token: undefined,
  user: undefined,
};

if (localStorage.getItem("jwtToken")) {
  // eslint-disable-next-line
  const decodedToken: any = jwtDecode(
    localStorage.getItem("jwtToken") as string
  );

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
  } else {
    initialState.token = localStorage.getItem("jwtToken") as string;
    const readableUser = localStorage.getItem("user");
    initialState.user = JSON.parse(readableUser as string);
  }
}

const AuthContext = createContext<AuthContextInterface>({
  token: undefined,
  user: undefined,
  login: () => null,
  logout: () => null,
});

function authReducer(
  state: AuthStateInterface,
  action: AuthActionInterface
): AuthStateInterface {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload?.token,
        user: action.payload?.user,
      };
    case "LOGOUT":
      return {
        ...state,
        token: undefined,
        user: undefined,
      };
    default:
      return state;
  }
}

// eslint-disable-next-line
export function useAuthContext() {
  return useContext<AuthContextInterface>(AuthContext);
}

export function AuthContextProvider(props: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(token: string, user: User): void {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "LOGIN",
      payload: { token, user },
    });
  }

  function logout(): void {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, token: state.token, login, logout }}
      {...props}
    />
  );
}
