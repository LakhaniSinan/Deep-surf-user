import React from "react";
import AuthLayout from "../../../components/authLayout";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import { ControlPointDuplicateOutlined } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Profile() {
  return (
    <AuthLayout title={"Set up your profile"}>
      <Container>
          <Box display={"flex"} justifyContent={"center"} my={5}>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: [theme.palette.background.paper]
              },
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: "white",
                p: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              aria-label="add profile picture"
            >
              <AddCircleOutlineIcon color={theme.palette.text.secondary}  />
            </IconButton>
            <Typography
              variant="body2"
              mt={1}
              textAlign={"center"}
              color={theme.palette.text.secondary}
            >
              Add profile picture
            </Typography>
          </Avatar>
        </Box>
        <Box mt={2}>
          <CustomInput
            placeholder={"Create username"}
            defaultStyle={theme.palette.text.secondary}
          />
        </Box>

        <Box mt={1} display={"flex"} justifyContent={"start"}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Max.30 Characters
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton variant="gradient" title="Continue" fullWidth />
        </Box>
      </Container>
    </AuthLayout>
  );
}

export default Profile;
