import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regix";

const signUpValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues.email?.trim()) errors.email = "Email is required";
  if (inputValues.email?.trim() && !EMAIL_REGEX.test(inputValues.email.trim()))
    errors.email = "Email is not valid";
  if (!inputValues.password?.trim()) errors.password = "Password is required";
  if (inputValues.password && inputValues.password.length < 6) {
    errors.password = "Password must be greater than 6 characters";
  }

  if (
    inputValues.password.trim() &&
    !PASSWORD_REGEX.test(inputValues.password)
  ) {
    errors.password =
      "Must include uppercase, lowercase, number & special character";
  }

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

const setPasswordValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues.currentPassword?.trim())
    errors.currentPassword = "Current Password is required";

  if (!inputValues.newPassword?.trim())
    errors.newPassword = "New Password is required";
  else if (!PASSWORD_REGEX.test(inputValues.newPassword))
    errors.newPassword =
      "Password must include uppercase, lowercase, number & special character";

  if (!inputValues.confirmPassword?.trim())
    errors.confirmPassword = "Confirm Password is required";
  else if (inputValues.newPassword !== inputValues.confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};

const setJournalAPiValidation = (inputValues, setInputErrors) => {
  const errors = {};

  if (!inputValues?.ticker?.trim()) errors.ticker = "Ticker is required";
  // if (!inputValues?.price?.trim()) errors.price = "Price is required";
  if (!inputValues?.value?.trim()) errors.value = "Value is required";
  if (!inputValues?.priceRelation?.trim())
    errors.priceRelation = "Price Relation is required";

  setInputErrors(errors);
  return Object.keys(errors).length === 0;
};

export {
  signUpValidation,
  loginValidation,
  otpValidation,
  setProfileValidation,
  setPasswordValidation,
  setJournalAPiValidation
};
