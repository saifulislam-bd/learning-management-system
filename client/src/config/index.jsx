export const signUpFormControls = [
  {
    name: "userName",
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};
export const initialSignInFormData = {
  userEmail: "",
  password: "",
};
