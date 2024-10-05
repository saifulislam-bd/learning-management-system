import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerService, loginService } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [auth, setAuth] = useState({ authenticate: false, user: null });

  async function handleRegisterUser(e) {
    e.preventDefault();
    const data = await registerService(signUpFormData);
  }
  async function handleLoginUser(e) {
    e.preventDefault();
    const data = await loginService(signInFormData);

    if (data) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({ authenticate: true, user: data.data.user });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signUpFormData,
        setSignUpFormData,
        signInFormData,
        setSignInFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
