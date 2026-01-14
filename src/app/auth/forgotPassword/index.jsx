import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthLayout from "../../../components/authLayout";
import { Box, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import { useNavigate } from "react-router-dom";
import { forgetPassword, verifyOtp } from "../../../services/modules/auth"; // verifyOtp import
import { toast } from "react-toastify";

const ForGetPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [user, setuser] = useState({})

  const [formData, setFormData] = useState({
    email: "",
  });
  console.log("fefgehhjfhfjke", formData);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
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
      handleForgetPassword();
    }
  }

  const handleForgetPassword = async () => {
    if (!formData.email.trim()) {
      setFormError({ email: "Email is required" });
      // toast.error("Please enter your email!");
      return;
    }

    try {
      setIsLoading(true);

      if (!isOtpSent) {
        const response = await forgetPassword({ email: formData.email });
        console.log("eftgyuhijohdjnm", response)
        console.log("ForgetPasswordResponse:", response);

        if (response?.data?.status === "success") {
          toast.success(response.data?.message || "OTP sent to your email");
          setIsOtpSent(true);
          navigate("/forget-verfication", { state: { email: formData.email } });
          setuser(user.data)
        } else {
          toast.error(response?.data?.message || "Failed to send OTP");
        }
      } else {
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title={t("auth.forgotPassword.title")} showBackButton>
      <Typography
        marginTop={"6px"}
        variant="h4"
        color={theme.palette.text.secondary}
        mb={2}
      >
        {t("auth.forgotPassword.heading")}
      </Typography>

      {/* Email Input */}

      <Box>
        <Typography color="#fff" fontSize={"13px"} textAlign={"left"} marginLeft={"2px"}>
          {t("auth.forgotPassword.description")}
        </Typography>
      </Box>
      <Box mt={3}>
        <CustomInput
          placeholder={t("auth.forgotPassword.emailPlaceholder")}
          defaultStyle={theme.palette.text.secondary}
          value={formData.email}
          name="email"
          onChange={handleChange}
          error={Boolean(formError.email)}
          helperText={formError.email}
          disabled={isOtpSent}
          onKeyPress={handleKeyPress}
        />
      </Box>

      {/* OTP Input */}
      {isOtpSent && (
        <Box mt={2}>
          <CustomInput
            placeholder={t("auth.forgotPassword.otpPlaceholder")}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Box>
      )}

      {/* Send / Verify Button */}
      <Box display="flex" justifyContent="center" mt={4} width="100%">
        <CustomButton
          variant="gradient"
          title={isOtpSent ? t("auth.forgotPassword.verifyOtp") : t("auth.forgotPassword.sendOtp")}
          fullWidth
          handleClickBtn={handleForgetPassword}
          loading={isLoading}
          width="100%"
        />
      </Box>
    </AuthLayout>
  );
};

export default ForGetPassword;
