import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomSwitch from "../../../components/switch";
import { useTranslation } from "react-i18next";
import NotificationIcon from "../../../assets/icons/notification-icon.svg"
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

  const notificationData = [
    {
      id: "email",
      title: "Email Notifications",
      enabled: false,
      options: [
        { id: 1, label: "Alerts and Notifications", icon: NotificationIcon },
        { id: 2, label: "Weekly Reports", icon: NotificationIcon },
        { id: 3, label: "Marketing Newsletters", icon: NotificationIcon },
      ],
    },
    {
      id: "email",
      title: "Push Notifications",
      enabled: false,
      options: [
        { id: 1, label: "Alerts", icon: NotificationIcon },
        { id: 2, label: "Price Updates", icon: NotificationIcon },
        { id: 3, label: "News and Updates", icon: NotificationIcon },
      ],
    },
    {
      id: "email",
      title: "Sound Notifications",
      enabled: false,
      options: [
        { id: 1, label: "Alerts", icon: NotificationIcon },
        { id: 2, label: "Trading Signals", icon: NotificationIcon },
      ],
    },
    {
      id: "email",
      title: "Alert Types",
      options: [
        { id: 1, label: "Price Alerts", icon: NotificationIcon },
        { id: 2, label: "Watchlist Alerts", icon: NotificationIcon },
        { id: 3, label: "Portfolio Alerts", icon: NotificationIcon },

      ],
    },
  ]


  return (
    // <Box display={"flex"} flexDirection={"column"} gap={3}>
    //   <Box display={"flex"} flexDirection={"column"}>
    //     <Typography variant="titleLg">{t("SettingsTab.notifications")}</Typography>
    //     <Typography variant="helperSm" sx={{ mt: 0.5 }}>
    //       {t("Notification.GetNotifiedVia")}
    //     </Typography>
    //   </Box>
    //   <Stack
    //     direction={{ xs: "column", md: "row" }}
    //     spacing={{ xs: 3, md: 6 }}
    //     alignItems={{ xs: "flex-start", md: "center" }}
    //   >
    //     {notificationOptions.map(({ id, label }) => (
    //       <Stack
    //         key={id}
    //         spacing={1.5}
    //         alignItems="center"
    //         sx={{ minWidth: { md: 120 }, textAlign: "center" }}
    //       >
    //         <Typography
    //           variant="body2"
    //           sx={{ color: "#FFFFFF", fontWeight: 500 }}
    //         >
    //           {label}
    //         </Typography>
    //         <CustomSwitch
    //           checked={preferences[id]}
    //           onChange={handleToggle(id)}
    //           inputProps={{ "aria-label": `${label} notifications` }}
    //         />
    //       </Stack>
    //     ))}
    //   </Stack>
    // </Box>
    <Box bgcolor={"background.charcoal"} p={1}>
      <Box>
        <Typography color="neutral.Snowwhite" fontWeight={600} fontSize={"25px"}>
          Notifications Settings
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container spacing={2}>
          {notificationData.map((section, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <Box
                bgcolor="rgba(30, 30, 30, 1)"
                p={1.3}
                borderRadius="14px"
                height={"150px"}
              >
                {/* Header */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography color="white" fontSize={"18px"} fontWeight={550}>
                    {section.title}
                  </Typography>

                  <CustomSwitch checked={section.enabled} />
                </Box>

                {/* Options */}
                <Box mt={2}>
                  {section.options.map((item) => (
                    <Box
                      key={item.id}
                      display="flex"
                      gap="10px"
                      mt={0.8}
                      alignItems="center"

                    >
                      <img src={item.icon} alt="" />

                      <Typography color="white" fontSize={13} fontWeight={500}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>

    </Box>
  );
};

export default Notifications;
