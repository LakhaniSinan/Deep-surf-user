import { Box, Checkbox, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomOtp from "../../../components/customOtp";
import CustomButton from "../../../components/customButton";
import googleLogo from "../../../assets/icons/google.svg";
import appleLogo from "../../../assets/icons/apple.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

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
  };

  const handleSignUp = () => {
    console.log("Form Data:", formData);
    navigate("/profile");
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <AuthLayout title={"Get Started"}>
      <Container>
        {/* Email */}
        <Box mt={2}>
          <CustomInput
            placeholder="Email"
            defaultStyle={theme.palette.text.secondary}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Box>

        {/* Password */}
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

        {/* OTP */}
        <Box
          display="flex"
          justifyContent="start"
          mt={2}
          flexDirection="column"
          alignItems="start"
        >
          <Box mb={1}>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Enter Join Code
            </Typography>
          </Box>

          <CustomOtp
            value={formData.otp}
            onChange={(otpValue) => handleChange("otp", otpValue)}
          />
        </Box>

        {/* Terms Checkbox */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          borderRadius={8}
          gap={1}
          mt={2}
        >
          <Checkbox
            checked={formData.agree}
            onChange={(e) => handleChange("agree", e.target.checked)}
            sx={{
              color: "white",
              "&.Mui-checked": { color: "white" },
              "& .MuiSvgIcon-root": { borderRadius: "4px", height: 22 },
              padding: 0,
            }}
          />
          <Typography
            variant="body2"
            fontSize={13}
            color={theme.palette.text.secondary}
          >
            I agree to Terms of Services Privacy Policy
          </Typography>
        </Box>

        {/* Sign Up Button */}
        <Box display="flex" justifyContent="center" mt={2} width="100%">
          <CustomButton
            handleClickBtn={handleSignUp}
            variant="gradient"
            title="Sign Up"
            fullWidth
          />
        </Box>

        {/* OR Divider */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color={theme.palette.text.secondary}>
            OR
          </Typography>
        </Box>

        {/* Social Buttons */}
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
          gap={2}
          width="100%"
          flexWrap="wrap" // ✅ wrap on small screens
        >
          <Box
            border={1}
            py={0.8} // small screens ke liye padding thodi kam
            px={{ xs: 6, sm: 9 }} // xs = extra small, sm = small screen
            borderColor={theme.palette.text.secondary}
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={googleLogo}
              alt="Google"
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box
            border={1}
            py={0.8}
            px={{ xs: 6, sm: 9 }}
            borderColor={theme.palette.text.secondary}
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={appleLogo}
              alt="Apple"
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        {/* Login Link */}
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Already have an account?{" "}
            <span
              style={{
                color: "white",
                cursor: "pointer",
                textDecoration: "underline",
              }}
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
