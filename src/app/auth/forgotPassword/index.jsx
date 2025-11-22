import React, { useState } from "react";
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
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

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

      if (!isOtpSent) {
        const response = await forgetPassword({ email: formData.email });
        console.log("ForgetPasswordResponse:", response);

        if (response?.data?.status === "success") {
          toast.success(response.data?.message || "OTP sent to your email");
          setIsOtpSent(true);
          navigate("/forget-verfication", { state: { email: formData.email } });
        } else {
          toast.error(response?.data?.message || "Failed to send OTP");
        }
      } else {
        if (!otp.trim()) {
          toast.error("Please enter OTP!");
          return;
        }

        

        if (response?.data?.status === "success") {
          toast.success("OTP verified successfully!");
          navigate("/new-password"); // redirect to reset password page
        } else {
          toast.error(response?.data?.message || "Invalid OTP");
        }
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

      {/* Email Input */}
      <Box mt={2}>
        <CustomInput
          placeholder="Email"
          defaultStyle={theme.palette.text.secondary}
          value={formData.email}
          name="email"
          onChange={handleChange}
          error={Boolean(formError.email)}
          helperText={formError.email}
          disabled={isOtpSent} // disable email after OTP sent
        />
      </Box>

      {/* OTP Input */}
      {isOtpSent && (
        <Box mt={2}>
          <CustomInput
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Box>
      )}

      {/* Send / Verify Button */}
      <Box display="flex" justifyContent="center" mt={4} width="100%">
        <CustomButton
          variant="gradient"
          title={isOtpSent ? "Verify OTP" : "Send OTP"}
          fullWidth
          handleClickBtn={handleForgetPassword}
          loading={isLoading}
        />
      </Box>
    </AuthLayout>
  );
};

export default ForGetPassword;
