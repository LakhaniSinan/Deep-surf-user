import { Box, Typography } from "@mui/material";
import AuthLayout from "../../../components/authLayout";
import CustomOtp from "../../../components/customOtp";
import CustomButton from "../../../components/customButton";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { otpValidation } from "../../../utils/validations";
import { verifyOtp } from "../../../services/modules/auth";
import { toast } from "react-toastify";
import { useAuthStore } from "../../../store";

const VerificationProcess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { loginUser } = useAuthStore();
  const { setToken } = useAuthStore()
  const [otp, setOtp] = useState("");
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const email = location?.state?.email;
  const handleVerify = async () => {
    const validate = otpValidation(otp, email, setFormError);
    // if (!validate) {
    //   toast.error("Please fix errors before submitting!");
    //   return;
    // }
    console.log("validate", validate);
    try {
      setIsLoading(true);
      const payload = { email, otp };
      const response = await verifyOtp(payload);
      if (response?.data?.status === "success") {
        const token = response?.data.data?.token;
        toast.success(response?.data?.message);
        navigate("/user-profile");
        setToken(token);
      } else {
        toast.error(response?.data?.message || "Verification failed");
      }
    } catch (error) {
      toast.error(error?.message || "Verification Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Verification Process" showBackButton >
      <Box mt={3}>
        <CustomOtp
          value={otp}
          onChange={(val) => {
            setOtp(val);
            setFormError((prev) => ({ ...prev, otp: "" }));
          }}
        />
        {formError.otp && (
          <Typography color="error" mt={1}>
            {formError.otp}
          </Typography>
        )}
      </Box>
      <Box display="flex" justifyContent="center" mt={6}>
        <Box width="100%">
          <CustomButton
            variant="gradient"
            title="Verify OTP"
            fullWidth
            handleClickBtn={handleVerify}
            loading={isLoading}
            width="100%"

          />
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default VerificationProcess;
