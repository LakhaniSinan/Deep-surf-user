// import { Box, Container, Typography } from "@mui/material";
// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { toast } from "react-toastify";
// import AuthLayout from "../../../components/authLayout";
// import CustomButton from "../../../components/customButton";
// import CustomInput from "../../../components/customInput";
// import { login, socialAuthLogin } from "../../../services/modules/auth";
// import theme from "../../../theme";
// import { loginValidation } from "../../../utils/validations";
// import { useAuthStore } from "../../../store";
// import { auth, googleProvider } from "../../../config/firebase";
// import { signInWithPopup } from "firebase/auth";

// const MyLoginPage = () => {
//     const navigate = useNavigate();
//     const { t } = useTranslation();
//     const { loginUser } = useAuthStore();
//     const [isLoading, setIsLoading] = useState(false);

//     const [formError, setFormError] = useState({});
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const commingSoon = useRef();

//     const handleChange = (event) => {
//         const { value, name } = event.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//         setFormError((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === "Enter") handleLogin();
//     };

//     const handleLogin = async () => {
//         // Frontend validation
//         const validate = loginValidation(formData, setFormError);
//         if (!validate) return;

//         try {
//             setIsLoading(true);
//             const payload = {
//                 email: formData.email,
//                 password: formData.password,
//             };
//             const response = await login(payload);

//             if (response?.data?.status === "success") {
//                 const data = response?.data?.data;
//                 const token = data?.token;
//                 const user = data?.user;
//                 loginUser(user, token);
//                 navigate("/dashboard");
//                 toast.success(response?.data?.message);
//             } else {
//                 const message = response?.data?.message || "Login failed";

//                 // Backend errors email/password ke input ke neeche show karna
//                 if (message.toLowerCase().includes("email")) {
//                     setFormError({ email: message });
//                 } else if (message.toLowerCase().includes("password")) {
//                     setFormError({ password: message });
//                 } else {
//                     toast.error(message);
//                 }
//             }
//         } catch (error) {
//             const errMsg =
//                 error?.response?.data?.message || error?.message || "Login failed";
//             toast.error(errMsg);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleNavigate = () => {
//         navigate("/signUp");
//     };

//     const handleGoogleLogin = async () => {
//         try {
//             const result = await signInWithPopup(auth, googleProvider);
//             const user = result.user;

//             const payload = {
//                 provider: "google",
//                 email: user.email,
//                 username: user.displayName,
//                 socialId: user.uid,
//                 profilePicture: user.photoURL,
//             };

//             const response = await socialAuthLogin(payload);

//             if (response?.data?.status === "success") {
//                 const data = response.data.data;
//                 const token = data.token;
//                 const userData = data.user;
//                 loginUser(userData, token);

//                 toast.success(response?.data?.message || "Logged in with Google!");
//                 navigate("/dashboard");
//             } else {
//                 toast.error(response?.data?.message || "Google login failed");
//             }
//         } catch (error) {
//             toast.error(error?.message || "Google login failed");
//         }
//     };

//     return (
//         <AuthLayout title={t("auth.login.title")}>
//             <Container>
//                 <Box mt={2}>
//                     <CustomInput
//                         placeholder={t("auth.login.emailPlaceholder")}
//                         defaultStyle={theme.palette.text.secondary}
//                         value={formData.email}
//                         name="email"
//                         onChange={handleChange}
//                         error={Boolean(formError.email)}
//                         helperText={formError.email}
//                         onKeyPress={handleKeyPress}
//                     />
//                 </Box>

//                 <Box mt={2}>
//                     <CustomInput
//                         placeholder={t("auth.login.passwordPlaceholder")}
//                         defaultStyle={theme.palette.text.secondary}
//                         type="password"
//                         value={formData.password}
//                         name="password"
//                         onChange={handleChange}
//                         error={Boolean(formError.password)}
//                         helperText={formError.password}
//                         InputEndIcon={true}
//                         showPassword={true}
//                         onKeyPress={handleKeyPress}
//                     />
//                 </Box>

//                 <Box mt={2} display="flex" justifyContent="flex-end">
//                     <Typography
//                         variant="body2"
//                         sx={{
//                             color: "#ffffff",
//                             cursor: "pointer",
//                             fontSize: "12px",
//                             fontFamily: "Inter Tight",
//                             "&:hover": { textDecoration: "underline" },
//                         }}
//                         onClick={() => navigate("/forgot-password")}
//                     >
//                         {t("auth.login.forgotPassword")}
//                     </Typography>
//                 </Box>

//                 <Box display="flex" justifyContent="center" mt={2} width="100%">
//                     <CustomButton
//                         variant="h4"
//                         title={t("auth.login.loginButton")}
//                         width="100%"
//                         sx={{ backgroundColor: "#FF6421" }}
//                         handleClickBtn={handleLogin}
//                         loader={false}
//                     />
//                 </Box>

//                 <Box mt={4}>
//                     <Typography variant="body2" color={theme.palette.text.secondary}>
//                         {t("auth.login.dontHaveAccount")}{" "}
//                         <span
//                             style={{ color: "white", cursor: "pointer" }}
//                             onClick={handleNavigate}
//                         >
//                             {t("auth.login.signUp")}
//                         </span>
//                     </Typography>
//                 </Box>
//             </Container>
//         </AuthLayout>
//     );
// };

// export default MyLoginPage;
