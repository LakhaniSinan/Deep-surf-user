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

const VerficationProcess = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useAuthStore();
  console.log(formError, "ffeufefef");
  const email = location?.state?.email;
  console.log(email, "asdjhasdhjsadjhsahdjashdsahjd");

  const handleVerify = async () => {
    const validate = otpValidation(otp, email, setFormError);

    if (!validate) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        email: email,
        otp: otp,
      };
      const response = await verifyOtp(payload);

      if (response?.data?.status === "success") {
        const data = response.data.data;
        const token = data.token;
        const user = data.user;
        loginUser(user, token);
        navigate("/profile");
        toast.success(response?.data?.message);
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
    <>
      <AuthLayout title={"Verfication Process"}>
        <Box mt={2}>
          <CustomOtp
            // onChange={(val) => handleChange("otp", val)}
            value={otp}
            onChange={(val) => {
              setOtp(val);
              setFormError((pre) => ({ ...pre, otp: "" }));
            }}
          />
          <Typography color="error">{formError.otp}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton
            variant="gradient"
            title="Verify Otp"
            fullWidth
            handleClickBtn={handleVerify}
            loading={isLoading}
          />
        </Box>
      </AuthLayout>
    </>
  );
};

export default VerficationProcess;
