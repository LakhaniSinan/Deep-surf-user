import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { Box, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../../services/modules/auth";
import { toast } from "react-toastify";

const ForGetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });
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

  const handleForgetPassword = async () => {
    if (!formData.email.trim()) {
      setFormError({ email: "Email is required" });
      toast.error("Please enter your email!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = { email: formData.email };
      const response = await forgetPassword(payload);

      if (response?.data?.status === "success") {
        toast.success(response.data?.message || "Password reset email sent!");
        navigate("/verification"); // redirect back to login page
      } else {
        toast.error(response?.data?.message || "Failed to send reset email");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Get Started">
      <Typography
        marginTop={"70px"}
        variant="h4"
        color={theme.palette.text.secondary}
        mb={2}
      >
        FORGET PASSWORD
      </Typography>

      <Box mt={2}>
        <CustomInput
          placeholder="Email"
          defaultStyle={theme.palette.text.secondary}
          value={formData.email}
          name="email"
          onChange={handleChange}
          error={Boolean(formError.email)}
          helperText={formError.email}
        />
      </Box>

      <Box display="flex" justifyContent="center" mt={4} width="100%">
        <CustomButton
          variant="gradient"
          title="Send"
          fullWidth
          handleClickBtn={handleForgetPassword}
          loading={isLoading}
        />
      </Box>
    </AuthLayout>
  );
};

export default ForGetPassword;
