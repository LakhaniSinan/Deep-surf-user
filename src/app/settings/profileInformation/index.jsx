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
  Grid,
} from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuthStore } from "../../../store";
import { changePassword } from "../../../services/modules/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme";
import { uploadMediaService } from "../../../utils/help";

function PersonalInformation() {
  const { user } = useAuthStore();
  const [username, setUsername] = useState(user?.username || "");
  console.log("dwuhdiwdwyguhwijd", username);
  const [email, setEmail] = useState(user?.email || "");
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );
  console.log("profilepicture", profilePicture);


  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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



  const handleImageUpload = async (event) => {
    console.log("hittttttttttttttttttttttttttttttttt")
    const file = event.target.files?.[0];
    console.log("fileeeeeeeeeeeeeeeeeeeeee", file);
    if (!file) return;
    console.log("file", file);
    try {
      setIsLoading(true);
      const uploadRes = await uploadMediaService(file);
      console.log("Uploaded Image:", uploadRes);
      setProfilePicture(uploadRes);
      toast.success("Profile picture uploaded!");
      event.target.value = "";
    } catch (error) {
      toast.error(error?.message || "Image upload failed");
    } finally {
      setIsLoading(false);
    }

  };





  const handleUserName = () => {
    console.log("[efoigfhijefeguhjhewnf", handleUserName);
  };
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
          <Typography fontWeight={600}>{user?.username}</Typography>

          <Box
            component="label"
            sx={{
              cursor: "pointer",
              backgroundColor: "##00000000",
              border: "1px solid #8F8F8F",
              padding: "8px 12px",
              display: "inline-block",
              borderRadius : "10px",
              px : "40px",
              py : "10px",
              fontFamily:"inter"
            }}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Box>


        </Stack>

      </Stack>

      {/* Username */}
      <Typography>Username</Typography>
      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomInput
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          {/* <CustomButton
            title="Change"
            value={username}
            // handleClickBtn={() => setOpenDialog(true)}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
            }}
            handleChange={handleUserName}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            readonly
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          {/* <CustomButton
            title="Change"
            // handleClickBtn={() => setOpenDialog(true)}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
            }}
          /> */}
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomInput
            type="Password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <CustomButton
            title="Change"
            handleClickBtn={() => setOpenDialog(true)}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
            }}
          />
        </Grid>
      </Grid>
      <Box>
        <CustomButton
          title="Save Profile"
          // handleClickBtn={() => setOpenDialog(true)}
          sx={{
            cursor: "pointer",
            backgroundColor: "#3E3E46",
            border: "1px solid #8F8F8F",
          }}
        />
      </Box>

      <Dialog fullWidth open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle color="#ffff" textAlign={"center"}>
          Change Password
        </DialogTitle>
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
            sx={{
              width: "100%",
            }}
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
            variant="gradient"
          />
          <CustomButton
            title="Save"
            handleClickBtn={handlePasswordChange}
            loading={isLoading}
            setOpenDialog={setOpenDialog}
            variant="gradient"
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PersonalInformation;
