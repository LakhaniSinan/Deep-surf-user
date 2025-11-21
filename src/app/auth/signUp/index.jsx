import {
  Box,
  Checkbox,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
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
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  const [showPassword, setShowPassword] = React.useState(false);
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
        console.log("Signupsuccessful", response);
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
        <Box mt={2}>
          <CustomInput
            placeholder="Email"
            defaultStyle={theme.palette.text.secondary}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={Boolean(formError.email)}
            helperText={formError.email}
          />
        </Box>

        <Box mt={2}>
          <CustomInput
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={Boolean(formError.password)}
            helperText={formError.password}
            InputEndIcon={true}
            showPassword={true}
          />
        </Box>

        {/* OTP */}
        <Box mt={3}>
          <Typography sx={{
            marginBottom: "12px",
          }} variant="body2" color={theme.palette.text.secondary}>
            Enter Join Code
          </Typography>
          <CustomOtp
            value={formData.otp}
            onChange={(val) => handleChange("otp", val)}
          />
        </Box>
        {/* Terms */}
        <Box display="flex" alignItems="center" gap={1} mt={2}>
          <Checkbox
            checked={formData.agree}
            onChange={(e) => handleChange("agree", e.target.checked)}
          />
          <Typography variant="body2" color={theme.palette.text.secondary}>
            I agree to Terms & Privacy Policy
          </Typography>
        </Box>
        {/* Button */}
        <Box mt={5} display="flex" width="100%">
          <CustomButton
            handleClickBtn={handleSignUp}
            variant="h5"
            title="Sign Up"
            width="100%"
            loading={isLoading}
            sx={{
              backgroundColor: "#FF6421",
            }}
          />
        </Box>

        <Box
          border={1}
          py={0.8} // small screens ke liye padding thodi kam
          px={{ xs: 6, sm: 9 }} // xs = extra small, sm = small screen
          borderColor={theme.palette.text.secondary}
          borderRadius={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={5}
        >
          <img
            src={googleLogo}
            alt="Google"
            width={20}
            height={20}
            style={{ objectFit: "contain" }}
          />
        </Box>
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
