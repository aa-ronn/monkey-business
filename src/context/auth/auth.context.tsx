import axios from "axios";
import { FC, createContext, useState } from "react";
import { AuthContextType, User } from "../../types/auth.types";

const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  signUpWithEmailAndPassword: async () => "",
  signInWithEmailAndPassword: async () => "",
  signOut: () => {},
});

const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  /**
   * Logs a user in based off input username and password.
   * @param email the users email
   * @param password the users password
   * @returns promise of success or failure
   */
  const signUpWithEmailAndPassword = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<string> =>
    new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: "http://localhost:5000/auth/register",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      })
        .then((res: any) => {
          setToken(res.token);
          setUser(res.user);
        })
        .then(() => {
          resolve("User created");
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });

  /**
   * Logs a user in based off input username and password.
   * @param email the users email
   * @param password the users password
   * @returns promise of success or failure
   */
  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<string> =>
    new Promise((resolve, reject) => {
      resolve("signed in");
    });

  /**
   * Signs out the current user.
   * @param none
   * @returns none
   */
  const signOut = () => {
    console.log("signed out");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
