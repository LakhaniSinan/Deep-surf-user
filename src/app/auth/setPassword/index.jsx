import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import CustomInput from "../../../components/customInput";
import { Box, Typography } from "@mui/material";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import { conformNewPassword } from "../../../services/modules/auth";
import { useAuthStore } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const location = useLocation();
  console.log(location, "locationnnn");
  const email = location?.state?.email;
  const otp = location?.state?.otp;
  // console.log(email, "asdjhasdhjsadjhsahdjashdsahjd");
  // console.log(otp, "asdjhasdhjsadjhsahdjashdsahjd");
  console.log("wqwertyuiop", formData);
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
    if (!formData.newPassword.trim()) errors.newPassword = "Required";
    if (!formData.confirmPassword.trim()) errors.confirmPassword = "Required";
    if (
      formData.newPassword.trim() &&
      formData.confirmPassword.trim() &&
      formData.newPassword !== formData.confirmPassword
    )
      errors.confirmPassword = "Passwords do not match";

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleConfirmPassword = async () => {
    if (!validateForm()) {
      toast.error("Please fix errors before submitting!");
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
        navigate("/");
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
    <AuthLayout title={"GET STARTED"}>
      <Typography
        marginTop={"70px"}
        variant="h4"
        color={theme.palette.text.secondary}
        mb={2}
      >
        SET NEW PASSWORD
      </Typography>
      <Box mt={2}>
        <CustomInput
          placeholder="New Password"
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleChange("newPassword", e.target.value)}
          error={Boolean(formError.newPassword)}
          helperText={formError.newPassword}
        />
      </Box>
      <Box mt={2}>
        <CustomInput
          placeholder="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          error={Boolean(formError.confirmPassword)}
          helperText={formError.confirmPassword}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={8} width="100%">
        <CustomButton
          variant="gradient"
          title="Set New Password"
          fullWidth
          handleClickBtn={handleConfirmPassword}
          loading={isLoading}
        />
      </Box>
    </AuthLayout>
  );
};

export default SetNewPassword;
