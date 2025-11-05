import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { Box, Container, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import googleLogo from "../../../assets/icons/google.svg";
import appleLogo from "../../../assets/icons/apple.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // ✅ Manage form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ Handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ✅ Handle login button click
  const handleLogin = () => {
    console.log("Login Data:", formData);
    navigate("/profile");
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <AuthLayout title="Welcome back!">
      <Container>
        {/* Email Field */}
        <Box mt={2}>
          <CustomInput
            placeholder="Email"
            defaultStyle={theme.palette.text.secondary}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Box>

        {/* Password Field */}
        <Box mt={2}>
          <CustomInput
            placeholder="Password"
            defaultStyle={theme.palette.text.secondary}
            inputPadding="14px 16px"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Box>

        {/* Login Button */}
        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton
            variant="gradient"
            title="Login"
            fullWidth
            handleClickBtn={handleLogin}
          />
        </Box>

        {/* OR Text */}
        <Box mt={2}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            OR
          </Typography>
        </Box>

        {/* Social Buttons */}
        <Box display="flex" justifyContent="center" mt={2} gap={2} width="100%">
          <CustomButton
            variant="glossyDark"
            icon={
              <img
                src={googleLogo}
                alt="Google"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
            }
          />
          <CustomButton
            variant="glossyDark"
            icon={
              <img
                src={appleLogo}
                alt="Apple"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
            }
          />
        </Box>

        {/* Sign Up Link */}
        <Box mt={4}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Don’t have an account?{" "}
            <span
              style={{ color: "white", cursor: "pointer" }}
              onClick={handleNavigate}
            >
              Sign Up
            </span>
          </Typography>
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default Login;
