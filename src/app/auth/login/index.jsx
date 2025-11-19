import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import appleLogo from "../../../assets/icons/apple.svg";
import googleLogo from "../../../assets/icons/google.svg";
import AuthLayout from "../../../components/authLayout";
import CustomButton from "../../../components/customButton";
import CustomInput from "../../../components/customInput";
import { login } from "../../../services/modules/auth";
import theme from "../../../theme";
import { loginValidation } from "../../../utils/validations";
import { useAuthStore } from "../../../store";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // zustand state
  // const setToken = useAuthStore((state) => state.setToken);
  // const setUser = useAuthStore((state) => state.setUser);

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

  const handleLogin = async () => {
    const validate = loginValidation(formData, setFormError);

    if (!validate) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        email: formData.email,
        password: formData.password,
      };
      const response = await login(payload);

      if (response?.data?.status === "success") {
        const data = response.data.data;
        const token = data.token;
        const user = data.user;
        loginUser(user, token);
        navigate("/home");
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message || "Login failed");
      }
    } catch (error) {
      toast.error(error?.message || "Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = () => {
    console.log("sign", formData);
    navigate("/signUp");
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
            error={Boolean(formError.email)} // 👈 FIXED
            helperText={formError.email}
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
            error={Boolean(formError.password)}
            helperText={formError.password}
          />
        </Box>
        {/* Login Button */}
        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton
            variant="gradient"
            title="Login"
            fullWidth
            handleClickBtn={handleLogin}
            loading={isLoading}
          />
        </Box>
        {/* OR Text */}
        <Box mt={2}>
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
