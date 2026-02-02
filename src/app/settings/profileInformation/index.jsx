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
import { useTranslation } from "react-i18next";
import { updateUser } from "../../../services/modules/home";
import { color } from "d3";
import { setPasswordValidation } from "../../../utils/validations";
function PersonalInformation() {
  const { user, setUser } = useAuthStore();
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({});
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
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    setIsLoading(true);

    const uploadRes = await uploadMediaService(file);

    // ✅ backend update
    const payload = {
      profilePicture: uploadRes,
    };

    const response = await updateUser(payload);

    if (response?.data?.status === "success") {
      setProfilePicture(uploadRes);

      // ✅ auth store update
      setUser({
        ...user,
        profilePicture: uploadRes,
      });

      toast.success("Profile picture updated!");
    } else {
      toast.error("Failed to update profile picture");
    }

    event.target.value = "";
  } catch (error) {
    toast.error(error?.message || "Image upload failed");
  } finally {
    setIsLoading(false);
  }
};


  const handlePasswordChange = async () => {
    const isValid = setPasswordValidation(
      { currentPassword, newPassword, confirmPassword },
      setPasswordErrors
    );
    if (!isValid) return;
    if (!isValid) return;
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

        // ✅ clear fields
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        // ✅ clear validation errors
        setPasswordErrors({});

        // ✅ close dialog
        setOpenDialog(false);
      }
      else {
        toast.error(response?.data?.message || "Failed to change password");
      }
    } catch (error) {
      toast.error(error?.message || "API Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateUserName = async () => {
    if (!username.trim()) {
      toast.error("Username cannot be empty!");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        username: username,
      };
      const response = await updateUser(payload);
      if (response?.data?.status === "success") {
        toast.success("Username updated successfully!");
        setUser({
          ...user,
          username: username,
        });
      } else {
        toast.error(response?.data?.message || "Failed to update username");
      }
    } catch (error) {
      toast.error(error?.message || "API request failed");
    } finally {
      setIsLoading(false);
    }
  };
  const handlePasswordInputChange = (field, value) => {
    // value update
    if (field === "currentPassword") setCurrentPassword(value);
    if (field === "newPassword") setNewPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);

    // error clear
    setPasswordErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const inputStyle = {
    "& .MuiInputBase-root": {
      backgroundColor: "#000",
      borderRadius: "15px",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#000",
      },
      "&.Mui-focused": {
        backgroundColor: "#000",
        boxShadow: "none",
      },
    },
    "& .MuiInputBase-input": {
      padding: "10px 14px",
      color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInputAdornment-root": {
      backgroundColor: "#000",
      borderRadius: "0 15px 15px 0",
      height: "100%",
    },
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordErrors({});
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Typography variant="titleLg">{t("ProfileInformation.profileInformationTitle")}</Typography>
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
              border: "1px solid rgba(143, 143, 143, 1)",
              padding: "8px 12px",
              display: "inline-block",
              borderRadius: "10px",
              px: "40px",
              py: "10px",
              fontFamily: "Inter Tight",
              color: "rgba(171, 171, 175, 1)",
              fontWeight: 500
            }}
          >
            {t("ProfileInformation.uploadImage")}
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
      <Typography color="rgba(163, 163, 165, 1)">{t("ProfileInformation.username")} </Typography>
      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            sx={{
              "& .MuiOutlinedInput-root": {
                border: "1px solid rgba(143, 143, 143, 1)",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "rgba(28, 28, 28, 1)",
              }
            }}
          />

        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <CustomButton
            title="Change"
            value={username}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
              color: "rgba(178, 178, 181, 1)"
            }}
            handleClickBtn={handleUpdateUserName}
            loading={isLoading}
          />
        </Grid>
      </Grid>
      {/* <Box display={"flex"} gap={"100px"} justifyContent={"space-center"} width={"100%"}>
        <Box>
          <CustomInput
            value={username}
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Box>
        <Box>
          <CustomButton
            title="Change"
            value={username}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
            }}
            handleClickBtn={handleUpdateUserName}
            loading={isLoading}
          />
        </Box>
      </Box> */}

      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <Typography color="rgba(163, 163, 165, 1)">Email</Typography>
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            readonly
            sx={{
              "& .MuiOutlinedInput-root": {
                border: "1px solid rgba(143, 143, 143, 1)",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "rgba(28, 28, 28, 1)"
              }
            }}
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
      <Typography color="rgba(163, 163, 165, 1)">Password</Typography>

      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomInput
            type="Password"
            value={email}
            // InputEndIcon={true}
            // showPassword={true}
            // onChange={(e) => setEmail(e.target.value)}
            // placeholder="Enter email"
            sx={{
              "& .MuiOutlinedInput-root": {
                border: "1px solid rgba(143, 143, 143, 1)",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "rgba(28, 28, 28, 1)",
              }
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <CustomButton
            title={t("ProfileInformation.change")}
            handleClickBtn={() => setOpenDialog(true)}
            sx={{
              cursor: "pointer",
              backgroundColor: "#00000000",
              border: "1px solid #8F8F8F",
              color: "rgba(178, 178, 181, 1)"
            }}
          />
        </Grid>
      </Grid>
      <Box>
        <CustomButton
          title={t("ProfileInformation.saveProfile")}
          // handleClickBtn={() => setOpenDialog(true)}
          sx={{
            cursor: "pointer",
            backgroundColor: "rgba(62, 62, 70, 1)",
            color: "rgba(100, 100, 108, 1)"
          }}
        />
      </Box>

      <Dialog sx={{
        "& .MuiPaper-root": {
          bgcolor: "neutral.darkGrey",
          borderRadius: "20px"
        }
      }} fullWidth open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle color="neutral.Snowwhite" fontSize={"20px"} textAlign={"left"}>
          Change Password
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <CustomInput
            placeholder="Current Password"
            type="password"
            value={currentPassword}
            inputBgColor={"neutral.black"}
            InputEndIcon={true}
            showPassword={true}
            sx={inputStyle}
            error={Boolean(passwordErrors.currentPassword)}
            helperText={passwordErrors.currentPassword}
            onChange={(e) =>
              handlePasswordInputChange("currentPassword", e.target.value)
            }
          // sx={{
          //   width: "100%",
          // }}
          />
          <CustomInput
            placeholder="New Password"
            type="password"
            value={newPassword}
            InputEndIcon={true}
            showPassword={true}
            sx={inputStyle}
            error={Boolean(passwordErrors.newPassword)}
            helperText={passwordErrors.newPassword}
            onChange={(e) =>
              handlePasswordInputChange("newPassword", e.target.value)
            }
          />
          <CustomInput
            placeholder="Confirm Password"
            type="password"
            InputEndIcon={true}
            showPassword={true}
            value={confirmPassword}
            sx={inputStyle}
            error={Boolean(passwordErrors.confirmPassword)}
            helperText={passwordErrors.confirmPassword}
            onChange={(e) =>
              handlePasswordInputChange("confirmPassword", e.target.value)
            }
          />
        </DialogContent>
        <DialogActions>
          <CustomButton
            title="Cancel"
            handleClickBtn={() => setOpenDialog(false)}
            sx={
              {
                background: "black",
                color: "white"
              }
            }
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
