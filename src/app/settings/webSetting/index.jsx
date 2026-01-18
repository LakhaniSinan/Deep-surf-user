import { useState } from "react";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SettingsForm from "./SettingsForm";
import ExchangeTable from "./ExchangeTable";
import ExchangeForm from "./ExchangeForm";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";


const WebSettings = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [settings, setSettings] = useState({
    language: "en",
    timezone: "pst",
    currency: "usd",
  });

  const initialExchanges = [
    {
      id: (t("setting.bybit")),
      exchange: (t("setting.bybit")),
      apiKey: "fftt456765gjkkjhi83093895",
      added: (t("setting.date")),
      status: "Active",
      action: "manage",
    },
    {
      id: "binance",
      exchange: "Binance",
      apiKey: "xjdn40ciic0qnx10d9xn1n1214",
      added: "Mar 9, 2025",
      status: "Active",
      action: "manage",
    },
  ];
  const [exchanges, setExchanges] = useState(initialExchanges);
  const [showExchangeForm, setShowExchangeForm] = useState(false);
  const [newExchange, setNewExchange] = useState({
    apiKey: "",
    apiSecret: "",
    passphrase: "",
  });

  const handleSettingChange = (field, value) => {
    console.log(value, "valuevaluevaluevalue");
    i18n.changeLanguage(value);
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };
  const languageOptions = [
    {
      value: "en",
      label: (t("setting.english")),
      icon: "https://flagcdn.com/w20/gb.png",
    },
    {
      value: "tr",
      label: "Turkish",
      icon: "https://flagcdn.com/w20/fr.png",
    },
    {
      value: "es",
      icon: "https://flagcdn.com/w20/es.png",
      label: "Spanish",
    },
    {
      value: "ru",
      icon: "https://flagcdn.com/w20/ru.png",
      label: "Russian",
    },
  ]

  const timezoneOptions = [
    { value: "pst", label: (t("setting.specificZone")) },
    { value: "gmt", label: (t("setting.greenWichTime")) },
    { value: "ist", label: (t("setting.indianStandard")) },
  ];
  const currencyOptions = [
    { value: "usd", label: (t("setting.usDollar")) },
    { value: "eur", label: (t("setting.euro")) },
    { value: "gbp", label: (t("setting.britishpound")) },
  ];
  const handleDeleteExchange = (row) => {
    setExchanges((prev) => prev.filter((item) => item.id !== row.id));
  };

  const toggleExchangeForm = () => {
    setShowExchangeForm((prev) => !prev);
    setNewExchange({
      apiKey: "",
      apiSecret: "",
      passphrase: "",
    });
  };

  const handleExchangeFieldChange = (field, value) => {
    setNewExchange((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveExchange = () => {
    if (!newExchange.apiKey || !newExchange.apiSecret) return;

    const newEntry = {
      id: `exchange-${Date.now()}`,
      exchange: "Custom Exchange",
      apiKey: newExchange.apiKey,
      added: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "Active",
      action: "manage",
    };

    setExchanges((prev) => [newEntry, ...prev]);
    toggleExchangeForm();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography variant="titleLg">{t("setting.settingTitle")}</Typography>

      <SettingsForm
        language={settings.language}
        timezone={settings.timezone}
        currency={settings.currency}
        onChange={handleSettingChange}
        languageOptions={languageOptions}
        timezoneOptions={timezoneOptions}
        currencyOptions={currencyOptions}
      />

      {/* <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="labelMd" sx={{ color: "#C7C7C7" }}>
            {t("setting.aPIkeys")}
          </Typography>
          <IconButton
            onClick={toggleExchangeForm}
            sx={{ color: "#C7C7C7", gap: 1 }}
          >
            {showExchangeForm ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <ArrowBackIosNewRoundedIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: "#C7C7C7" }}>
                  {t("setting.backToList")}
                </Typography>
              </Stack>
            ) : (
              <Stack direction="row" spacing={1} alignItems="center">
                <AddRoundedIcon />
                <Typography variant="body2" sx={{ color: "#C7C7C7" }}>
                  {t("setting.addChange")}
                </Typography>
              </Stack>
            )}
          </IconButton>
        </Stack>

        <Box
          sx={{
            backgroundColor: "rgba(22,22,22,0.85)",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            p: { xs: 3, md: 4 },
            transition: "opacity 0.3s ease",
          }}
        >
          {showExchangeForm ? (
            <ExchangeForm
              values={newExchange}
              onChange={handleExchangeFieldChange}
              onSave={handleSaveExchange}
              onCancel={toggleExchangeForm}
              isSaving={false}
            />
          ) : (
            <ExchangeTable
              rows={exchanges}
              onCopy={handleCopy}
              onDelete={handleDeleteExchange}
            />
          )}
        </Box>
      </Stack> */}
    </Box>
  );
};

export default WebSettings;

