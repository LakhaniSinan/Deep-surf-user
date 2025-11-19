import { Box, Checkbox, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomOtp from "../../../components/customOtp";
import CustomButton from "../../../components/customButton";
import googleLogo from "../../../assets/icons/google.svg";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../services/modules/auth";
import { toast, ToastContainer } from "react-toastify";
import { signUpValidation } from "../../../utils/validations";

function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
    agree: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSignUp = async () => {
    const validate = signUpValidation(formData, setFormError);

    if (!validate) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = { email: formData.email, password: formData.password };
      const response = await signUp(payload);
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        navigate("/verification", { state: { email: formData.email } });
      } else {
        toast.error(response?.data?.message || "Signup failed");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <AuthLayout title={"Get Started"}>
      <Container>
        {/* 👈 ToastContainer */}
        {/* Email */}
        <Box mt={2}>
          <CustomInput
            placeholder="Email"
            defaultStyle={theme.palette.text.secondary}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={Boolean(formError.email)} // 👈 FIXED
            helperText={formError.email}
          />
        </Box>
        {/* Password */}
        <Box mt={2}>
          <CustomInput
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={Boolean(formError.password)}
            helperText={formError.password}
          />
        </Box>
        {/* OTP */}
        {/* <Box mt={2}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Enter Join Code
          </Typography>
          <CustomOtp
            value={formData.otp}
            onChange={(val) => handleChange("otp", val)}
          />
        </Box> */}
        {/* Terms */}
        {/* <Box display="flex" alignItems="center" gap={1} mt={2}>
          <Checkbox
            checked={formData.agree}
            onChange={(e) => handleChange("agree", e.target.checked)}
          />
          <Typography variant="body2" color={theme.palette.text.secondary}>
            I agree to Terms & Privacy Policy
          </Typography>
        </Box> */}
        {/* Button */}
        <Box mt={2}>
          <CustomButton
            handleClickBtn={handleSignUp}
            variant="gradient"
            title="Sign Up"
            fullWidth
            loading={isLoading}
          />
        </Box>
        {/* Login */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Already have an account?{" "}
            <span
              style={{ color: "white", cursor: "pointer" }}
              onClick={handleNavigate}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Container>
    </AuthLayout>
  );
}

export default SignUp;
