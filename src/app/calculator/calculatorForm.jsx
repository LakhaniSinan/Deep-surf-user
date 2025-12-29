import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CustomSelect from "../../components/customSelect";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import getCalculator from "../../services/modules/calculator";
import { toast } from "react-toastify";
const CalculatorForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const [calculator, setCalculator] = useState(null)
  console.log("ffurfrjfrfrfrfr" , calculator);
  
  const [formData, setFormData] = useState({
    exchange: "",
    feeType: "",
    fee: "0.060",
    fundingRate: "0.010",
    positionDuration: "<8hours",
    ticker: "",
    pair: "",
    sizingMethod: "risk",
    deposit: "",
    riskOrMargin: "",
    direction: "",
    leverage: "",
    entryMethod: "atr",
    atr: "837.9928",
    target: "3",
    level: "115,132.00",
    lotStep: "1",
    lotMinimum: "1",
  });

  const exchangeOptions = [
    { value: "binance-futures", label: (t("Chart.binanceFutures")) },
    { value: "binance", label: "Binance" },
    { value: "bybit", label: "Bybit" },
    { value: "okx", label: "OKX" },
  ];

  const feeTypeOptions = [
    { value: "taker", label: (t("Chart.takerMarketOrder")) },
    { value: "maker", label: (t("Chart.makerLimitOrder")) },
  ];

  const positionDurationOptions = [
    { value: "<8hours", label: (t("Chart.hoursNofunding")) },
    { value: "8-24hours", label: (t("Chart.8-24Hours")) },
    { value: ">24hours", label: (t("Chart.24Hours")) },
  ];

  const pairOptions = [
    { value: "BTCUSDT", label: "BTCUSDT" },
    { value: "ETHUSDT", label: "ETHUSDT" },
    { value: "BNBUSDT", label: "BNBUSDT" },
    { value: "SOLUSDT", label: "SOLUSDT" },
  ];

  const directionOptions = [
    { value: "long", label: "Long" },
    { value: "short", label: "Short" },
  ];

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };
  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };
  const handleSizingMethod = (method) => {
    setFormData({
      ...formData,
      sizingMethod: method,
    });
  };
  const handleEntryMethod = (method) => {
    setFormData({
      ...formData,
      entryMethod: method,
    });
  };
  const handlePreset = (preset) => {
    // Quick preset configurations
    const presets = {
      scalp: {
        leverage: "50",
        riskOrMargin: "0.5",
        target: "1",
      },
      swing: {
        leverage: "10",
        riskOrMargin: "2",
        target: "5",
      },
      intraday: {
        leverage: "20",
        riskOrMargin: "1",
        target: "3",
      },
      safe: {
        leverage: "5",
        riskOrMargin: "0.5",
        target: "2",
      },
    };

    setFormData({
      ...formData,
      ...presets[preset],
    });
  };


  const handleCalculate = async () => {
    try {
      setIsLoading(true);
      const payload = {
        exchange: formData.exchange,
        feeType: formData.feeType,
        pair : formData.pair,
        deposit : formData.deposit,
        riskPercent : formData.riskOrMargin,
        direction : formData.direction,
        leverage : formData.leverage
      };
      const response = await getCalculator(payload);
      if (response?.data?.status === "success") {
        setCalculator(response.data.data);
        toast.success("Calculation Successful");
      } else {
        toast.error(response?.data?.message || "Calculation failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "API failed");
    } finally {
      setIsLoading(false);
    }
  };


  // useEffect(() => {
  //   if (payload) {
  //     handleCalculate();
  //   }
  // });
  return (
    <Box
      sx={{
        background: "#161616",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.08)",
        p: 2,
      }}
    >
      <Stack spacing={2}>
        {/* Exchange & Fees Section */}
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label={t("Chart.Exchange")}
              value={formData.exchange}
              onChange={handleChange("exchange")}
              options={exchangeOptions}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label={t("Chart.feeType")}
              value={formData.feeType}
              onChange={handleChange("feeType")}
              options={feeTypeOptions}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {t("Chart.Fee%")}
              </Typography>
              <CustomInput
                placeholder="0.060"
                value={formData.fee}
                onChange={handleInputChange("fee")}
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {t("Chart.FundingRate")}
              </Typography>
              <CustomInput
                placeholder="0.010"
                value={formData.fundingRate}
                onChange={handleInputChange("fundingRate")}
              />
            </Stack>
          </Grid>
        </Grid>
        {/* Position & Pair Section */}
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 12 }}>
            <CustomSelect
              label={t("Chart.positionDuration")}
              value={formData.positionDuration}
              onChange={handleChange("positionDuration")}
              options={positionDurationOptions}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {t("Chart.searchbyTicker")}
              </Typography>
              <CustomInput
                placeholder="btc, eth, zec ..."
                value={formData.ticker}
                onChange={handleInputChange("ticker")}
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label={t("Chart.Pairfutures")}
              value={formData.pair}
              onChange={handleChange("pair")}
              options={pairOptions}
            />
          </Grid>
        </Grid>

        {/* Sizing Options */}
        <Box>
          <Typography
            variant="labelMd"
            fontSize={12}
            sx={{ color: "#C7C7C7", mb: 2, display: "block" }}
          >
            {t("Chart.sizingOptions")}
          </Typography>
          <Stack direction="row" spacing={2}>
            <CustomButton
              variant={
                formData.sizingMethod === "risk"
                  ? "calculatorToggle"
                  : "calculatorSmall"
              }
              title={t("Chart.sizefromRisk")}
              handleClickBtn={() => handleSizingMethod("risk")}
            />
            <CustomButton
              variant={
                formData.sizingMethod === "margin"
                  ? "calculatorToggle"
                  : "calculatorSmall"
              }
              title={t("Chart.sizefromMargin")}
              handleClickBtn={() => handleSizingMethod("margin")}
            />
          </Stack>
        </Box>

        {/* Trade Parameters */}
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {t("Chart.Deposit")}
              </Typography>
              <CustomInput
                placeholder="2000"
                value={formData.deposit}
                onChange={handleInputChange("deposit")}
                type="number"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {formData.sizingMethod === "risk" ? (t("Chart.Risk")) : (t("Chart.Margin$"))}
              </Typography>
              <CustomInput
                placeholder="1"
                value={formData.riskOrMargin}
                onChange={handleInputChange("riskOrMargin")}
                type="number"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CustomSelect
              label={t("Chart.Direction")}
              value={formData.direction}
              onChange={handleChange("direction")}
              options={directionOptions}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="labelMd"
                fontSize={12}
                sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
              >
                {t("Chart.Leverage")}
              </Typography>
              <CustomInput
                placeholder="20"
                value={formData.leverage}
                onChange={handleInputChange("leverage")}
                type="number"
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Entry/Stop/Take Configuration */}
        <Box>
          <Typography
            variant="labelMd"
            fontSize={12}
            sx={{ color: "#C7C7C7", mb: 2, display: "block" }}
          >
            {t("Chart.entryStopTakeConfiguration")}
          </Typography>
          <Stack direction="row" spacing={2} mb={3}>
            <CustomButton
              variant={
                formData.entryMethod === "atr"
                  ? "calculatorToggle"
                  : "calculatorSmall"
              }
              title={t("Chart.aTRTemplate")}
              handleClickBtn={() => handleEntryMethod("atr")}
            />
            <CustomButton
              variant={
                formData.entryMethod === "manual"
                  ? "calculatorToggle"
                  : "calculatorSmall"
              }
              title={t("Chart.Manual")}
              handleClickBtn={() => handleEntryMethod("manual")}
            />
          </Stack>

          {formData.entryMethod === "atr" && (
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography
                    variant="labelMd"
                    fontSize={12}
                    sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
                  >
                    {t("Chart.ATR")}
                  </Typography>
                  <CustomInput
                    placeholder="837.9928"
                    value={formData.atr}
                    onChange={handleInputChange("atr")}
                    type="number"
                  />
                </Stack>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography
                    variant="labelMd"
                    fontSize={12}
                    sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
                  >
                    {t("Chart.target")}
                  </Typography>
                  <CustomInput
                    placeholder="3"
                    value={formData.target}
                    onChange={handleInputChange("target")}
                    type="number"
                  />
                </Stack>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography
                    variant="labelMd"
                    fontSize={12}
                    sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
                  >
                    {t("Chart.level")}
                  </Typography>
                  <CustomInput
                    placeholder="115,132.00"
                    value={formData.level}
                    onChange={handleInputChange("level")}
                  />
                </Stack>
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography
                    variant="labelMd"
                    fontSize={12}
                    sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
                  >
                    {t("Chart.lotStep")}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <CustomInput
                      placeholder="1"
                      value={formData.lotStep}
                      onChange={handleInputChange("lotStep")}
                      type="number"
                    />
                    <CustomInput
                      placeholder="1"
                      value={formData.lotMinimum}
                      onChange={handleInputChange("lotMinimum")}
                      type="number"
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          )}

          <Grid container spacing={3} mt={1}></Grid>
        </Box>

        {/* Quick Presets */}
        <Box>
          <Typography
            variant="labelMd"
            fontSize={12}
            sx={{ color: "#C7C7C7", mb: 2, display: "block" }}
          >
            {t("Chart.quickPresets")}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            width="100%"
          >
            <CustomButton
              variant="calculatorSmall"
              title={t("Chart.scalp")}
              handleClickBtn={() => handlePreset("scalp")}
              width="100%"
            />
            <CustomButton
              variant="calculatorSmall"
              title="Swing"
              handleClickBtn={() => handlePreset("swing")}
              width="100%"
            />
            <CustomButton
              variant="calculatorSmall"
              title={t("Chart.intraday")}
              handleClickBtn={() => handlePreset("intraday")}
              width="100%"
            />
            <CustomButton
              variant="calculatorSmall"
              title={t("Chart.safe")}
              handleClickBtn={() => handlePreset("safe")}
              width="100%"
            />
          </Stack>
        </Box>

        {/* Calculate Button */}
        <CustomButton
          variant="gradient"
          title="Calculator"
          handleClickBtn={handleCalculate}
          width="100%"
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "18px",
            fontWeight: 600,
          }}
        />

      </Stack>
    </Box>
  );
};

export default CalculatorForm;
