import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthLayout from "../../../components/authLayout";
import CustomInput from "../../../components/customInput";
import { Box, Typography } from "@mui/material";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import { conformNewPassword } from "../../../services/modules/auth";
import { useAuthStore } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Regex } from "../../../constants/regix";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const location = useLocation();
  const email = location?.state?.email;
  const otp = location?.state?.otp;
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
  const validateForm = () => {
    let errors = {};
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Required validation
    if (!formData.newPassword.trim()) errors.newPassword = "Required";
    if (!formData.confirmPassword.trim()) errors.confirmPassword = "Required";
    if (
      formData.newPassword.trim() &&
      formData.confirmPassword.trim() &&
      formData.newPassword !== formData.confirmPassword
    ) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (formData.newPassword.trim() && formData.newPassword.length <= 8)
      errors.newPassword = "Password must be at least 6 characters";

    // Regex validation (Strong Password)
    if (formData.newPassword && !Regex.test(formData.newPassword)) {
      errors.newPassword =
        "Must include uppercase, lowercase, number & special character";
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleConfirmPassword();
    }
  }

  const handleConfirmPassword = async () => {

    if (!validateForm()) {
      // toast.error("Please fix errors before submitting!");
      return;
    }
    try {
      setIsLoading(true);
      const payload = {
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
        email: email,
        otp: otp,
      };
      const response = await conformNewPassword(payload);
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message || "Password set successfully!");
        navigate("/login");
      } else {
        toast.error(response?.data?.message || "Failed to set password");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthLayout title={t("auth.setPassword.title")} showBackButton>
      <Typography
        marginTop={"10px"}
        variant="h4"
        color={theme.palette.text.secondary}
        mb={2}
        fontSize={"20px"}
      >
        {t("auth.setPassword.heading")}
      </Typography>
      <Box mt={3}>
        <CustomInput
          placeholder={t("auth.setPassword.newPasswordPlaceholder")}
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleChange("newPassword", e.target.value)}
          error={Boolean(formError.newPassword)}
          helperText={formError.newPassword}
          InputEndIcon={true}
          showPassword={true}
          onKeyPress={handleKeyPress}


        />
      </Box>
      <Box mt={3}>
        <CustomInput
          placeholder={t("auth.setPassword.confirmPasswordPlaceholder")}
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          error={Boolean(formError.confirmPassword)}
          helperText={formError.confirmPassword}
          InputEndIcon={true}
          showPassword={true}
          onKeyPress={handleKeyPress}


        />
      </Box>
      <Box display="flex" justifyContent="center" mt={4} width="100%">
        <CustomButton
          variant="gradient"
          title={t("auth.setPassword.setPasswordButton")}
          fullWidth
          handleClickBtn={handleConfirmPassword}
          loading={isLoading}
          width="100%"

        />
      </Box>
    </AuthLayout>
  );
};

export default SetNewPassword;
