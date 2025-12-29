import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomSwitch from "../../../components/switch";
import { useTranslation } from "react-i18next";
import Notification from "./notification";




const Notifications = () => {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useState({
    email: true,
    telegram: true,
    web: false,
  });
  const notificationOptions = [
    { id: "email", label: (t("Notification.email")) },
    { id: "telegram", label: (t("Notification.telegram")) },
    { id: "web", label: (t("Notification.web")) },
  ];
  const handleToggle = (channel) => (_, checked) => {
    setPreferences((prev) => ({ ...prev, [channel]: checked }));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="titleLg">{t("SettingsTab.notifications")}</Typography>
        <Typography variant="helperSm" sx={{ mt: 0.5 }}>
          {t("Notification.GetNotifiedVia")}
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 6 }}
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        {notificationOptions.map(({ id, label }) => (
          <Stack
            key={id}
            spacing={1.5}
            alignItems="center"
            sx={{ minWidth: { md: 120 }, textAlign: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#FFFFFF", fontWeight: 500 }}
            >
              {label}
            </Typography>
            <CustomSwitch
              checked={preferences[id]}
              onChange={handleToggle(id)}
              inputProps={{ "aria-label": `${label} notifications` }}
            />
          </Stack>
        ))}
      </Stack>
      <Notification />
    </Box>
  );
};

export default Notifications;
