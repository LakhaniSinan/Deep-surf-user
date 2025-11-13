import { Grid } from "@mui/material";
import CustomSelect from "../../../components/customSelect";

const SettingsForm = ({
  language,
  timezone,
  currency,
  onChange,
  languageOptions,
  timezoneOptions,
  currencyOptions,
}) => {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      <Grid item size={{ xs: 12, md: 4 }}>
        <CustomSelect
          label="Language"
          value={language}
          onChange={(event) => onChange("language", event.target.value)}
          options={languageOptions}
          placeholder="Select language"
        />
      </Grid>
      <Grid item size={{ xs: 12, md: 4 }}>
        <CustomSelect
          label="Timezone"
          value={timezone}
          onChange={(event) => onChange("timezone", event.target.value)}
          options={timezoneOptions}
          placeholder="Select timezone"
        />
      </Grid>
      <Grid item size={{ xs: 12, md: 4 }}>
        <CustomSelect
          label="Currency"
          value={currency}
          onChange={(event) => onChange("currency", event.target.value)}
          options={currencyOptions}
          placeholder="Select currency"
        />
      </Grid>
    </Grid>
  );
};

export default SettingsForm;
