// PersonalInfoForm.jsx

import React, { useState } from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";

function PersonalInformation() {
  const [username, setUsername] = useState("jamesrodriss12");
  const [email, setEmail] = useState("jamesrodriss12@gmail.com");
  const [password, setPassword] = useState("jamesrodriss1329"); // Consider not storing raw passwords in state for real apps

  const handleSaveProfile = () => {
    console.log("Profile Saved:", { username, email, password });
    alert("Profile information saved!");
  };
  const handleUploadProfilePicture = () => {
    alert("Upload Profile Picture functionality triggered!");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Typography variant="titleLg">Personal Information</Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 4 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Avatar
          alt="James Rodriguez"
          src="https://i.pinimg.com/736x/03/87/a5/0387a59e6591fae6a5e077020de479f4.jpg"
          sx={{
            width: 76,
            height: 76,
            border: "2px solid #8F8F8F",
          }}
        />
        <Stack spacing={1}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Jamesrodriss12
          </Typography>
          <CustomButton
            variant="softOutlined"
            title="Upload Profile Picture"
            handleClickBtn={handleUploadProfilePicture}
            sx={() => ({
              maxWidth: 220,
              fontSize: "14px",
              minHeight: 44,
            })}
          />
        </Stack>
      </Stack>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Username</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <CustomInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ maxLength: 30 }}
            placeholder="jamesrodrisss12"
          />
          <CustomButton
            variant="softOutlined"
            title="Change"
            handleClickBtn={handleUploadProfilePicture}
            sx={() => ({
              minWidth: 130,
              fontSize: "14px",
              minHeight: 44,
            })}
          />
        </Stack>
        <Typography variant="helperSm" sx={{ ml: 1 }}>
          Max.30 Characters
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Email</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jamesrodrisss12@gmail.com"
          />
          <CustomButton
            variant="softOutlined"
            title="Change"
            handleClickBtn={handleUploadProfilePicture}
            sx={() => ({
              minWidth: 130,
              fontSize: "14px",
              minHeight: 44,
            })}
          />
        </Stack>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="labelMd">Password</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <CustomInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
          <CustomButton
            variant="softOutlined"
            title="Change"
            handleClickBtn={handleUploadProfilePicture}
            sx={() => ({
              minWidth: 130,
              fontSize: "14px",
              minHeight: 44,
            })}
          />
        </Stack>
      </Box>

      <CustomButton
        variant="glossyDark"
        title="Save Profile"
        handleClickBtn={handleSaveProfile}
        width="fit-content"
      />
    </Box>
  );
}

export default PersonalInformation;
