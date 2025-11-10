import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profileData, setProfileData] = useState({
    username: "",
    profileImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange("profileImage", URL.createObjectURL(file));
    }
  };

  const handleContinue = () => {
    navigate("/login");
    console.log("Profile Data:", profileData);
  };

  return (
    <AuthLayout title={"Set up your profile"}>
      <Container>
        <Box display={"flex"} justifyContent={"center"} my={5}>
          <Box position="relative">
            <Avatar
              src={profileData.profileImage || ""}
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
                  backgroundColor: [theme.palette.background.paper],
                },
              }}
            >
              {!profileData.profileImage && (
                <>
                  <IconButton
                    color="inherit"
                    component="label"
                    sx={{
                      color: "white",
                      p: 0,
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                    aria-label="add profile picture"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageUpload}
                    />
                    <AddCircleOutlineIcon
                      sx={{ color: theme.palette.text.secondary }}
                    />
                  </IconButton>
                  <Typography
                    variant="body2"
                    mt={1}
                    textAlign={"center"}
                    color={theme.palette.text.secondary}
                  >
                    Add profile picture
                  </Typography>
                </>
              )}
            </Avatar>
          </Box>
        </Box>

        <Box mt={2}>
          <CustomInput
            placeholder="Create username"
            defaultStyle={theme.palette.text.secondary}
            value={profileData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </Box>

        <Box mt={1} display={"flex"} justifyContent={"start"}>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Max. 30 Characters
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={8} width="100%">
          <CustomButton
            variant="gradient"
            title="Continue"
            fullWidth
            handleClickBtn={handleContinue}
          />
        </Box>
      </Container>
    </AuthLayout>
  );
}

export default Profile;
