import { Box, Checkbox, Container, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../../../components/authLayout";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomOtp from "../../../components/customOtp";
import CustomButton from "../../../components/customButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import googleLogo from "../../../assets/icons/google.svg"; // multicolor official
import appleLogo from "../../../assets/icons/apple.svg"; // official black logo

function SignUp() {
  return (
    <AuthLayout title={"Get Started "}>
      <Container>
        <Box mt={2}>
          <CustomInput
            placeholder={"Email"}
            defaultStyle={theme.palette.text.secondary}
          />
        </Box>
        <Box mt={2}>
          <CustomInput
            placeholder={"Password"}
            defaultStyle={theme.palette.text.secondary}
            inputPadding="14px 16px"
            type="password"
          />
        </Box>

        <Box
          display={"flex"}
          justifyContent={"start"}
          mt={2}
          flexDirection={"column"}
          alignItems={"start"}
        >
          <Box mb={2}>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Enter Join Code
            </Typography>
          </Box>
          <Box>
            <CustomOtp />
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          borderRadius={8}
          gap={1}
          mt={2}
        >
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
              "& .MuiSvgIcon-root": {
                borderRadius: "4px",
                height: 22,
              },
              padding: 0,
            }}
          />

          <Typography variant="body2" color={theme.palette.text.secondary}>
            I agree to Terms of Services Privacy Policy
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={2} width="100%">
          <CustomButton variant="gradient" title="Get Started" fullWidth />
        </Box>

        <Box mt={2}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            OR
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={2} gap={2} width="100%">
          <CustomButton
            variant="glossyDark"
            icon={
              <img
                src={googleLogo}
                alt="Google"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
            }
          />
          <CustomButton
            variant="glossyDark"
            icon={
              <img
                src={appleLogo}
                alt="Apple"
                width={20}
                height={20}
                style={{ objectFit: "contain" , color : "white" }}
              />
            }
          />
        </Box>

        <Box mt={2}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Already have an account?{" "}
            <span style={{ color: "white" }}> Login</span>
          </Typography>
        </Box>
      </Container>
    </AuthLayout>
  );
}

export default SignUp;
