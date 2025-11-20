import React, { useState } from "react";
import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import { getProfile } from "../../../services/modules/user";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuthStore } from "../../../store";
import { uploadMediaService } from "../../../utils/help";
import { toast } from "react-toastify";

function PersonalInformation() {
  const { user, setUser } = useAuthStore();
  const [username, setUsername] = useState(user?.username);
  console.log("fhugfhfkguyekuyefgif" , user)
  const [email, setEmail] = useState(user?.email);
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture);
  const [password, setPassword] = useState("jamesrodriss1329");
  const [isLoading, setIsLoading] = useState(false);

  // Image Upload Handler
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const uploadRes = await uploadMediaService(file); // Should return image URL here
      console.log("Uploaded Image:", uploadRes);

      setProfilePicture(uploadRes); // 📌 Just store image URL directly

      toast.success("Profile picture uploaded!");
      // event.target.value = ""; // Reset file input
    } catch (error) {
      toast.error(error?.message || "Image upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = async () => {
    try {
      setIsLoading(true);
      const payload = {
       username : username,
        profilePicture : profilePicture,
      };
      console.log("Payload:", payload);

      const response = await getProfile(payload);

      if (response?.data?.status === "success") {
        setUser(response?.data?.data?.user);
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message || "Failed to update");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Typography variant="titleLg">Personal Information</Typography>

      {/* Avatar Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 4 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Avatar
          alt={username}
          src={profilePicture || "https://via.placeholder.com/76"}
          sx={{
            width: 76,
            height: 76,
            border: "2px solid #8F8F8F",
          }}
        />
        <Stack spacing={1}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {username}
          </Typography>
          <Stack
            component="label"
            direction="row"
            alignItems="center"
            spacing={1}
            sx={(theme) => ({
              cursor: "pointer",
              minWidth: 150,
              minHeight: 50,
              display: "flex",
              gap: "10px",
              px: 3,
              borderRadius: "8px",
              border: "1px solid #8F8F8F",
              fontWeight: 600,
              fontSize: "16px",
              color: "#ffffff",
              // backgroundColor: "theme.palette.text.secondary",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.8,
              },
            })}
          >
            <AddCircleOutlineIcon fontSize="medium" />
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Stack>
        </Stack>
      </Stack>

      {/* Username */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Username</Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <CustomInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ maxLength: 30 }}
            placeholder="Enter username"
          />
          <CustomButton
            variant="softOutlined"
            title="Change"
            handleClickBtn={handleContinue}
            loading={isLoading}
            sx={() => ({ minWidth: 130, minHeight: 44 })}
          />
        </Stack>
        <Typography variant="helperSm">Max. 30 Characters</Typography>
      </Box>

      {/* Email */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Email</Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Stack>
      </Box>

      {/* Password */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Password</Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <CustomInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </Stack>
      </Box>

      {/* Save Button */}
      <CustomButton
        variant="glossyDark"
        title="Save Profile"
        handleClickBtn={handleContinue}
        width="fit-content"
        loading={isLoading}
      />
    </Box>
  );
}

export default PersonalInformation;
