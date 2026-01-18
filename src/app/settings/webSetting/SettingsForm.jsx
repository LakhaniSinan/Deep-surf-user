import { Grid } from "@mui/material";
import CustomSelect from "../../../components/customSelect";
import { useTranslation } from "react-i18next";


const SettingsForm = ({
  language,
  timezone,
  currency,
  onChange,
  languageOptions,
  timezoneOptions,
  currencyOptions,
}) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      <Grid item size={{ xs: 12, md: 4 }}>
        <CustomSelect
          label={t("setting.language")}
          value={language}
          onChange={(event) => onChange("language", event.target.value)}
          options={languageOptions}
          placeholder="Select language"
        />
      </Grid>
      <Grid item size={{ xs: 12, md: 4 }}>
        {/* <CustomSelect
          label={t("setting.timeZone")}
          value={timezone}
          onChange={(event) => onChange("timezone", event.target.value)}
          options={timezoneOptions}
          placeholder="Select timezone"
        /> */}
      </Grid>
      <Grid item size={{ xs: 12, md: 4 }}>
        {/* <CustomSelect
          label={t("setting.currency")}
          value={currency}
          onChange={(event) => onChange("currency", event.target.value)}
          options={currencyOptions}
          placeholder="Select currency"
        /> */}
      </Grid>
    </Grid>
  );
};

export default SettingsForm;
