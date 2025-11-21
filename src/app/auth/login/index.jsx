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
import { auth, googleProvider } from "../../../config/firebase"; // ✅ apna provider aur auth
import { signInWithPopup } from "firebase/auth"; // ✅ Firebase Auth se import

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormError((prev) => ({
      ...prev,
      [name]: "",
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
        navigate("/profile");
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
  // const handleforgotPassword = () => {
  //   navigate("/forgot-password");
  // };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // ✅ correct provider
      const user = result.user;
      const token = await user.getIdToken();

      loginUser(
        {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        },
        token
      );

      toast.success("Logged in with Google!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Google login failed");
    }
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
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
            error={Boolean(formError.password)}
            helperText={formError.password}
            InputEndIcon={true}
            showPassword={true}
          />
        </Box>
        <Box mt={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "14px",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Typography>
          </Box>
        </Box>

        {/* Login Button */}
        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton
            variant="h4"
            title="Login"
            width="100%"
            sx={{
              backgroundColor: "#FF6421",
            }}
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
            onClick={handleGoogleLogin} // 👈 add this
          >
            <img
              src={googleLogo}
              alt="Google"
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
