import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import appleLogo from "../../../assets/icons/apple.svg";
import googleLogo from "../../../assets/icons/google.svg";
import AuthLayout from "../../../components/authLayout";
import CustomButton from "../../../components/customButton";
import CustomInput from "../../../components/customInput";
import { login, socialAuthLogin } from "../../../services/modules/auth";
import theme from "../../../theme";
import { loginValidation } from "../../../utils/validations";
import { useAuthStore } from "../../../store";
import { auth, googleProvider } from "../../../config/firebase"; // ✅ apna provider aur auth
import { signInWithPopup } from "firebase/auth"; // ✅ Firebase Auth se import

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  console.log("loading", isLoading);

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }
  const handleLogin = async () => {
    const validate = loginValidation(formData, setFormError);
    // if (!validate) {
    //   toast.error("Please fix errors before submitting!");
    //   return;
    // }
    try {
      setIsLoading(true);
      const payload = {
        email: formData.email,
        password: formData.password,
      };
      const response = await login(payload);
      console.log("fgywfuiscgysuycgh", response?.data?.message);

      if (response?.data?.status === "success") {
        const data = response?.data?.data;
        const token = response?.data?.data?.token;
        const user = response?.data?.data?.user;
        loginUser(user, token);
        navigate("/dashboard");
        toast.success(response?.data?.message);
      } else {
        // toast.error(response?.data?.message || "Login failed");
      }
    } catch (error) {
      // toast.error(error?.message || "Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("fffffffffffffffff", handleLogin);


  const handleNavigate = () => {
    console.log("sign", formData);
    navigate("/signUp");
  };
  // const handleforgotPassword = () => {
  //   navigate("/forgot-password");
  // };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 👇 Backend ke liye payload
      const payload = {
        provider: "google",
        email: user.email,
        username: user.displayName,
        socialId: user.uid, // ya `google-${user.uid}` agar backend ka format ye ho
        profilePicture: user.photoURL,
      };

      // 🚀 Backend API call using your function
      const response = await socialAuthLogin(payload);

      if (response?.data?.status === "success") {
        const data = response.data.data;
        const token = data.token;
        const userData = data.user;

        // 🟢 Set in Zustand
        loginUser(userData, token);

        toast.success(response?.data?.message || "Logged in with Google!");
        navigate("/dashbaord");
      } else {
        toast.error(response?.data?.message || "Google login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Google login failed");
    }
  };

  return (
    <AuthLayout title="Welcome back!">
      <Container>
        <Box mt={2}>
          <CustomInput
            placeholder="Email"
            defaultStyle={theme.palette.text.secondary}
            value={formData.email}
            name="email"
            onChange={handleChange}
            error={Boolean(formError.email)}
            helperText={formError.email}
            onKeyPress={handleKeyPress}
          // inputBgColor={"#101010"}

          />
        </Box>
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
            onKeyPress={handleKeyPress}
          // inputBgColor={"#101010"}

          />
        </Box>
        <Box mt={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={"row-reverse"}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "12px",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={2} width="100%">
          <CustomButton
            variant="h4"
            title="Login"
            width="100%"
            sx={{
              backgroundColor: "#FF6421",
            }}
            handleClickBtn={handleLogin}
            loading={isLoading}
          // disabled={isLoading}
          />
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            OR
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
          gap={2}
          width="100%"
          flexWrap="wrap"
        >
          <Box
            border={1}
            py={0.8}
            px={{ xs: 6, sm: 9 }}
            borderColor={theme.palette.text.secondary}
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleGoogleLogin}
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
