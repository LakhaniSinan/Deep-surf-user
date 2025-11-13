import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomSwitch from "../../../components/switch";

const notificationOptions = [
  { id: "email", label: "Email" },
  { id: "telegram", label: "Telegram" },
  { id: "web", label: "Web" },
];

const Notifications = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    telegram: true,
    web: false,
  });

  const handleToggle = (channel) => (_, checked) => {
    setPreferences((prev) => ({ ...prev, [channel]: checked }));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="titleLg">Notifications</Typography>
        <Typography variant="helperSm" sx={{ mt: 0.5 }}>
          Get notified via
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
    </Box>
  );
};

export default Notifications;
