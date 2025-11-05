import React from 'react'
import AuthLayout from '../../../components/authLayout'
import { Box, Checkbox, Container, Typography } from '@mui/material'
import CustomInput from '../../../components/customInput'
import CustomOtp from '../../../components/customOtp'
import theme from '../../../theme'
import CustomButton from '../../../components/customButton'
import googleLogo from "../../../assets/icons/google.svg"; // multicolor official
import appleLogo from "../../../assets/icons/apple.svg"; // official black logo

function Login() {
  return (
    <AuthLayout title={"Welcome back!"}>
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

      

        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton variant="gradient" title="Login" fullWidth />
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

        <Box mt={4}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Already have an account?{" "}
            <span style={{ color: "white" }}> Login</span>
          </Typography>
        </Box>
      </Container>
    </AuthLayout>
  )
}

export default Login