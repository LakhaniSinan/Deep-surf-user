// PersonalInfoForm.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import { formStyles } from "./style"; // Import styles

function PersonalInformation() {
  const [username, setUsername] = useState("jamesrodriss12");
  const [email, setEmail] = useState("jamesrodriss12@gmail.com");
  const [password, setPassword] = useState("jamesrodriss1329"); // Consider not storing raw passwords in state for real apps

  const handleSaveProfile = () => {
    console.log("Profile Saved:", { username, email, password });
    // In a real application, you would send this data to a backend
    alert("Profile information saved!");
  };

  const handleChangeUsername = () => {
    // Logic to open a dialog or inline edit for username change
    alert("Change Username functionality triggered!");
  };

  const handleChangeEmail = () => {
    // Logic for email change
    alert("Change Email functionality triggered!");
  };

  const handleChangePassword = () => {
    // Logic for password change (usually involves current password verification)
    alert("Change Password functionality triggered!");
  };

  const handleUploadProfilePicture = () => {
    // Logic to open file picker for profile picture upload
    alert("Upload Profile Picture functionality triggered!");
  };

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" component="h1" sx={formStyles.sectionTitle}>
        Personal Information
      </Typography>

      {/* Profile Picture Section */}
      <Box sx={formStyles.profileSection}>
        <Avatar
          alt="James Rodriguez"
          src="https://via.placeholder.com/150" // Replace with actual user image URL or an icon
          sx={formStyles.avatar}
        />
        <Stack spacing={1}>
          <Typography variant="body" sx={{ fontWeight: "bold" }}>
            Jamesrodriss12
          </Typography>
          <Button
            variant="outlined"
            sx={formStyles.uploadButton}
            onClick={handleUploadProfilePicture}
          >
            <Typography variant="body1">Upload Profile Picture</Typography>
          </Button>
        </Stack>
      </Box>

      {/* Username Section */}
      <Box sx={formStyles.inputGroup}>
        <Typography variant="subtitle1" sx={formStyles.inputLabel}>
          Username
        </Typography>
        <Stack direction="row" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ maxLength: 30 }}
            sx={formStyles.textField}
          />
         <Button
            variant="outlined"
            sx={formStyles.uploadButton}
            onClick={handleUploadProfilePicture}
          >
            Change
          </Button>
        </Stack>
        <Typography variant="caption" sx={formStyles.helperText}>
          Max.30 Characters
        </Typography>
      </Box>

      {/* Email Section */}
      <Box sx={formStyles.inputGroup}>
        <Typography variant="subtitle1" sx={formStyles.inputLabel}>
          Email
        </Typography>
        <Stack direction="row" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={formStyles.textField}
          />
            <Button
            variant="outlined"
            sx={formStyles.uploadButton}
            onClick={handleUploadProfilePicture}
          >
            Change
          </Button>
        </Stack>
      </Box>

      {/* Password Section */}
      <Box sx={formStyles.inputGroup}>
        <Typography variant="subtitle1" sx={formStyles.inputLabel}>
          Password
        </Typography>
        <Stack direction="row" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={formStyles.textField}
          />
           <Button
            variant="outlined"
            sx={formStyles.uploadButton}
            onClick={handleUploadProfilePicture}
          >
            Change
          </Button>
        </Stack>
      </Box>

      {/* Save Profile Button */}
      <Button
        variant="contained"
        sx={formStyles.saveButton}
        onClick={handleSaveProfile}
      >
        Save Profile
      </Button>
    </Box>
  );
}

export default PersonalInformation;
