import React, { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import theme from "../../../theme";
import CustomButton from "../../../components/customButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { setProfileValidation } from "../../../utils/validations";
import { setProfile } from "../../../services/modules/user";
import { useAuthStore } from "../../../store";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [profileData, setProfileData] = useState({
    username: "",
    profileImage: null,
  });

  const handleChange = (field, value) => {
    if (field === "username" && value.length > 30)
      return setFormErrors((prev) => ({
        ...prev,
        username: "Maximum character should be less than 30",
      }));

    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormErrors((pre) => ({ ...pre, [field]: "" }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange("profileImage", URL.createObjectURL(file));
    }
  };

  const handleContinue = async () => {
    const validate = setProfileValidation(profileData, setFormErrors);

    if (!validate) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        username: profileData.username,
      };
      const response = await setProfile(payload);

      if (response?.data?.status === "success") {
        const data = response?.data?.data;
        setUser(data?.user);
        navigate("/home");
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message || "Login failed");
      }
    } catch (error) {
      toast.error(error?.message || "Login Failed");
    } finally {
      setIsLoading(false);
    }
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
            error={Boolean(formErrors.username)}
            helperText={formErrors.username}
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
            loading={isLoading}
          />
        </Box>
      </Container>
    </AuthLayout>
  );
}

export default Profile;
