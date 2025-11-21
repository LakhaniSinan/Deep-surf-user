import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuthStore } from "../../../store";
import { changePassword } from "../../../services/modules/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PersonalInformation() {
  const { user, loginUser } = useAuthStore();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  console.log("CurrentPassword:", currentPassword);
  const [newPassword, setNewPassword] = useState("");
  console.log("NewPassword:", newPassword);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
    reader.readAsDataURL(file);
  };

  // 🟢 API Call for Change Password
  const handlePasswordChange = async () => {
    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Enter all fields!");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        currentPassword,
        newPassword,
      };

      const response = await changePassword(payload);
      console.log("ChangePasswordResponse:", response);

      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        setOpenDialog(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setOpenDialog(false);
      } else {
        toast.error(response?.data?.message || "Failed to change password");
      }
    } catch (error) {
      toast.error(error?.message || "API Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography variant="titleLg">Personal Information</Typography>

      {/* Avatar */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        alignItems="center"
      >
        <Avatar
          src={profilePicture || "https://via.placeholder.com/76"}
          sx={{ width: 76, height: 76 }}
        />
        <Stack direction="column" spacing={1}>
          <Typography fontWeight={600}>{username}</Typography>
          <Stack
            component="label"
            direction="row"
            alignItems="center"
            sx={{ cursor: "pointer" }}
          >
            <AddCircleOutlineIcon />
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
      <CustomInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      {/* Email */}
      <CustomInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      {/* Password Dialog Button */}
      <CustomButton
        title="Change Password"
        handleClickBtn={() => setOpenDialog(true)}
      />

      {/* Change Password Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <CustomInput
            placeholder="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            InputEndIcon={true}
            showPassword={true}
          />
          <CustomInput
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputEndIcon={true}
            showPassword={true}
          />
          <CustomInput
            placeholder="Confirm Password"
            type="password"
            InputEndIcon={true}
            showPassword={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <CustomButton
            title="Cancel"
            handleClickBtn={() => setOpenDialog(false)}
          />
          <CustomButton
            title="Save"
            handleClickBtn={handlePasswordChange}
            loading={isLoading}
            setOpenDialog={setOpenDialog}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PersonalInformation;
