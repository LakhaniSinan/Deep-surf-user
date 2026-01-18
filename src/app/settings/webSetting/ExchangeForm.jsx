import { Grid, Stack, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import { useTranslation } from "react-i18next";

const ExchangeForm = ({
  values,
  onChange,
  onSave,
  onCancel,
  isSaving,
}) => {
  const handleChange = (field) => (event) => {
    console.log("fielddddddddddddd", field);

    onChange(field, event.target.value);
  };
  const { t } = useTranslation();

  return (
    <>
    {/* <Stack spacing={3}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="labelMd" sx={{ color: "#C7C7C7" }}>
          {t("setting.addChange")}
        </Typography>
      </Stack>
      <Grid container spacing={{ xs: 3, md: 3 }}>
        <Grid item xs={12} md={4}>
          <CustomInput
            placeholder={t("setting.aPIkeys")}
            value={values.apiKey}
            onChange={handleChange("apiKey")}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInput
            placeholder={t("setting.apiSecret")}
            value={values.apiSecret}
            onChange={handleChange("apiSecret")}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInput
            placeholder={t("setting.passPhrase")}
            value={values.passphrase}
            onChange={handleChange("passphrase")}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <CustomButton
          title={t("setting.saveApiKeys")}
          variant="softOutlined"
          handleClickBtn={onSave}
          loading={isSaving}
          width={160}
        />

        <CustomButton
          title={t("setting.cancel")}
          variant="softOutlined"
          handleClickBtn={onCancel}
          width={120}
          sx={{ backgroundColor: "transparent", color: "#C7C7C7" }}
        />
      </Stack>
    </Stack> */}
    </>
  );
};

export default ExchangeForm;

