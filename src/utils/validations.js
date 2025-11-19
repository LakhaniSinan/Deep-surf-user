import { EMAIL_REGEX } from "../constants/regix";

const signUpValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues.email?.trim()) errors.email = "Email is required";
  if (inputValues.email?.trim() && !EMAIL_REGEX.test(inputValues.email.trim()))
    errors.email = "Email is not valid";
  if (!inputValues.password?.trim()) errors.password = "Password is required";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};
const loginValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues.email?.trim()) errors.email = "Email is required";
  if (inputValues.email?.trim() && !EMAIL_REGEX.test(inputValues.email.trim()))
    errors.email = "Email is not valid";
  if (!inputValues.password?.trim()) errors.password = "Password is required";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};

const otpValidation = (otp, email, setInputErrors) => {
  const errors = {};

  if (!email?.trim()) errors.email = "Email is required";
  if (email?.trim() && !EMAIL_REGEX.test(email.trim()))
    errors.email = "Email is not valid";

  if (!otp?.trim()) errors.otp = "Otp is required";

  if (otp?.trim() && otp.length !== 6) errors.otp = "Invalid otp";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};

const setProfileValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues.username.trim()) errors.username = "Username is required";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};

export {
  signUpValidation,
  loginValidation,
  otpValidation,
  setProfileValidation,
};
