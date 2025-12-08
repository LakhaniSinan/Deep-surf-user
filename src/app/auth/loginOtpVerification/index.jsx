// import { Box, Typography } from "@mui/material";
// import AuthLayout from "../../../components/authLayout";
// import CustomOtp from "../../../components/customOtp";
// import CustomButton from "../../../components/customButton";
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { otpValidation } from "../../../utils/validations";
// import { verifyOtp } from "../../../services/modules/auth";
// import { toast } from "react-toastify";
// import { useAuthStore } from "../../../store";

// const ForgetVerfication = () => {
//   const navigate = useNavigate();

//   const location = useLocation();
//   const [otp, setOtp] = useState("");
//   const [formError, setFormError] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   console.log(formError, "ffeufefef");
//   const email = location?.state?.email;
//   console.log(email, "asdjhasdhjsadjhsahdjashdsahjd");

//   const handleVerify = async () => {
//     setIsLoading(true);
//     const validate = otpValidation(otp, email, setFormError);

//     if (!validate) {
//       toast.error("Please fix errors before submitting!");
//       return;
//     }

//     navigate("/new-password", { state: { email: email, otp: otp } });
//     setIsLoading(true);
//   };

//   return (
//     <>
//       <AuthLayout title={"Verfication Process"}>
//         <Box mt={2}>
//           <CustomOtp
//             // onChange={(val) => handleChange("otp", val)}
//             value={otp}
//             onChange={(val) => {
//               setOtp(val);
//               setFormError((pre) => ({ ...pre, otp: "" }));
//             }}
//           />
//           <Typography color="error">{formError.otp}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="center" mt={8} width="100%">
//           <CustomButton
//             variant="gradient"
//             title="Verify Otp"
//             fullWidth
//             handleClickBtn={handleVerify}
//             loading={isLoading}
//           />
//         </Box>
//       </AuthLayout>
//     </>
//   );
// };

// export default ForgetVerfication;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AuthLayout from "../../../components/authLayout";
import CustomOtp from "../../../components/customOtp";
import CustomButton from "../../../components/customButton";
import { useLocation, useNavigate } from "react-router-dom";
import { otpValidation } from "../../../utils/validations";
import { toast } from "react-toastify";

const ForgetVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;
  const [otp, setOtp] = useState("");
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  if (!email) {
    navigate("/forget-password");
    return null;
  }

    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  }
  const handleVerify = async () => {
    setIsLoading(true);
    const isValid = otpValidation(otp, email, setFormError);
    console.log("isssssssssssss", isValid);

    if (!isValid) {
      toast.error("Please fix errors before submitting!");
      setIsLoading(false);
      return;
    }
    navigate("/new-password", { state: { email, otp } });
    setIsLoading(false);
  };

  return (
    <Box>
      <AuthLayout title="Verification Process" showBackButton>
        <Box mt={1}>
          <Typography color="white" mb={4}>
            Enter the OTP sent to your email: <b>{email}</b>
          </Typography>
          <CustomOtp
            value={otp}
            onKeyPress={handleKeyPress}
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
        <Box display="flex" justifyContent="center" mt={3} width="100%">
          <CustomButton
            variant="gradient"
            title="Verify OTP"
            fullWidth
            handleClickBtn={handleVerify}
            loading={isLoading}
            width="100%"
          />
        </Box>
      </AuthLayout>
    </Box>
  );
};

export default ForgetVerification;
