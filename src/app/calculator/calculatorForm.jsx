import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomSelect from "../../components/customSelect";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import { getCalculator, simulateApi } from "../../services/modules/calculator";
import { toast } from "react-toastify";

const CalculatorForm = ({
  exchange,
  metaData,
  exchangeMarketData,
  exchangeAtr,
  setTf,
  setLen,
  pair,
  setPair,
  onCalculate,
  isLoading
}) => {
  const { t } = useTranslation();
  const [localLoading, setLocalLoading] = useState(false)
  const [hasCalculated, setHasCalculated] = useState(false);
  const [formData, setFormData] = useState({
    exchange: "Binance Future",
    feeType: "taker",
    fee: "",
    fundingRate: "",
    positionDuration: "<8hours",
    ticker: "",
    pair: pair || "BTCUSDT",
    sizingMethod: "risk",
    deposit: "",
    riskOrMargin: "",
    direction: "",
    leverage: "",
    entryMethod: "atr",
    atr: "",
    target: "3",
    level: "",
    lotStep: "",
    lotMinimum: "",
    entry: "",
    stopLoss: "",
    takeProfit: "",

  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, pair }));
  }, [pair]);

  useEffect(() => {
    if (!metaData) return;
    setFormData(prev => ({
      ...prev,
      fee: prev.feeType === "taker" ? metaData.fee_taker_pct : metaData.fee_maker_pct,
      fundingRate: metaData.funding_rate_pct,
      lotStep: metaData.qty_step,
      lotMinimum: metaData.min_qty,
      level: exchangeMarketData?.current_price,
      atr: exchangeAtr?.atr_value
    }));
  }, [metaData, formData.feeType, exchangeMarketData, exchangeAtr]);

  const exchangeOptions = exchange?.exchanges?.map((ex) => ({
    value: ex.name,
    label: ex.name
  })) || [];

  const feeTypeOptions = [
    { value: "taker", label: t("Chart.takerMarketOrder") },
    { value: "maker", label: t("Chart.makerLimitOrder") },
  ];

  const positionDurationOptions = [
    { value: "<8hours", label: t("Chart.hoursNofunding") },
    { value: "8-16 hours", label: t("Chart.8-24Hours") },
    { value: "16-24 hours ", label: "16-24 hours" },
    { value: "1-3 days", label: "1-3 days" },
    { value: "3-7 days", label: "3-7 days" },
    { value: "1-2 weeks", label: "1-2 weeks" },
    { value: "2-4 weeks", label: "2-4 weeks" },
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
    const value = event.target.value;
    setFormData({ ...formData, [field]: value });

    if (field === "pair" && setPair) {
      setPair(value);
    }
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSizingMethod = (method) => {
    setFormData({ ...formData, sizingMethod: method });
  };

  const handleEntryMethod = (method) => {
    setFormData({ ...formData, entryMethod: method });
  };

  const handlePreset = (preset) => {
    const presets = {
      Scalp: { leverage: 20, riskOrMargin: 0.5, positionDuration: "<8hours", atr_tf: "5m", atr_len: 14, target: 2 },
      Intraday: { leverage: 10, riskOrMargin: 1, positionDuration: "8-16 hours", atr_tf: "15m", atr_len: 14, target: 3 },
      Swing: { leverage: 5, riskOrMargin: 2, positionDuration: "1-3 days", atr_tf: "1h", atr_len: 14, target: 3 },
      Safe: { leverage: 3, riskOrMargin: 0.5, positionDuration: "<8hours", atr_tf: "4h", atr_len: 14, target: 5 },
    };
    const presetData = presets[preset];
    if (presetData) {
      setFormData(prev => ({
        ...prev,
        leverage: presetData.leverage,
        riskOrMargin: presetData.riskOrMargin,
        positionDuration: presetData.positionDuration,
        target: presetData.target
      }));
      setTf?.(presetData.atr_tf);
      setLen?.(presetData.atr_len);
      setHasCalculated(false);

    }
  };
  const simulateWhatIfAPi = async () => {
    try {
      setLocalLoading(true);
      const payload = {
        currentPrice: formData.level,
        direction: formData.direction,
        leverage: formData.leverage,
        deposit: formData.deposit,
        riskOrMargin: formData.riskOrMargin,
        positionSizeUnits: formData.positionSizeUnits || 0,
        entryPrice: formData.entry || formData.level,
        pair: formData.pair,
        target: formData.target,
        atr: formData.atr,
        stopPrice : formData.stopLoss,
        takePrice : formData.takeProfit
      };

      // Call API
      const response = await simulateApi(payload);

      if (response) {
        console.log("API Response:", response);
      }
    } catch (error) {
      console.error("Simulation API error:", error);
      toast.error("Simulation failed. Please try again.");
    } finally {
      setLocalLoading(false);
    }
  };
  const handleCalculateClick = () => {
    setHasCalculated(true);
    onCalculate(formData);
  };
  return (
    <Box sx={{ background: "#161616", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", p: 2 }}>
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
              <Typography variant="labelMd" fontSize={12} sx={{ color: "#C7C7C7" }}>{t("Chart.Fee%")}</Typography>
              <CustomInput placeholder="0.060" value={formData.fee} onChange={handleInputChange("fee")} />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography variant="labelMd" fontSize={12} sx={{ color: "#C7C7C7" }}>{t("Chart.FundingRate")}</Typography>
              <CustomInput placeholder="0.010" value={formData.fundingRate} onChange={handleInputChange("fundingRate")} />
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
              <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.searchbyTicker")}</Typography>
              <CustomInput placeholder="btc, eth, zec ..." value={formData.ticker} onChange={handleInputChange("ticker")} />
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
          <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray", mb: 2, display: "block" }}>{t("Chart.sizingOptions")}</Typography>
          <Stack direction="row" spacing={2}>
            <CustomButton
              variant={formData.sizingMethod === "risk" ? "calculatorToggle" : "calculatorSmall"}
              title={t("Chart.sizefromRisk")}
              handleClickBtn={() => handleSizingMethod("risk")}
            />
            <CustomButton
              variant={formData.sizingMethod === "margin" ? "calculatorToggle" : "calculatorSmall"}
              title={t("Chart.sizefromMargin")}
              handleClickBtn={() => handleSizingMethod("margin")}
            />
          </Stack>
        </Box>
        {/* Trade Parameters */}
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.Deposit")}</Typography>
              <CustomInput placeholder="2000" value={formData.deposit} onChange={handleInputChange("deposit")} type="number" />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>
                {formData.sizingMethod === "risk" ? t("Chart.Risk") : t("Chart.Margin$")}
              </Typography>
              <CustomInput placeholder="1" value={formData.riskOrMargin} onChange={handleInputChange("riskOrMargin")} type="number" />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CustomSelect label={t("Chart.Direction")} value={formData.direction} onChange={handleChange("direction")} options={directionOptions} />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.Leverage")}</Typography>
              <CustomInput placeholder="20" value={formData.leverage} onChange={handleInputChange("leverage")} type="number" />
            </Stack>
          </Grid>
        </Grid>
        {/* Entry/Stop/Take Configuration */}
        <Box>
          {/* <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray", mb: 2 }}>{t("Chart.entryStopTakeConfiguration")}</Typography> */}
          <Stack direction="row" spacing={2} mb={3}>
            <CustomButton
              variant={formData.entryMethod === "atr" ? "calculatorToggle" : "calculatorSmall"}
              title={t("Chart.aTRTemplate")}
              handleClickBtn={() => handleEntryMethod("atr")}
            />

            <CustomButton
              variant={formData.entryMethod === "manual" ? "calculatorToggle" : "calculatorSmall"}
              title={t("Chart.Manual")}
              handleClickBtn={() => handleEntryMethod("manual")}
            />

          </Stack>

          {formData.entryMethod === "atr" && (
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.ATR")}</Typography>
                  <CustomInput placeholder="837.9928" value={formData.atr} onChange={handleInputChange("atr")} type="number" />
                </Stack>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.target")}</Typography>
                  <CustomInput placeholder="3" value={formData.target} onChange={handleInputChange("target")} type="number" />
                </Stack>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.level")}</Typography>
                  <CustomInput placeholder="115,132.00" value={formData.level} onChange={handleInputChange("level")} type="number" />
                </Stack>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray" }}>{t("Chart.lotStep")}</Typography>
                  <Stack direction="row" spacing={2}>
                    <CustomInput placeholder="1" value={formData.lotStep} onChange={handleInputChange("lotStep")} type="number" />
                    <CustomInput placeholder="1" value={formData.lotMinimum} onChange={handleInputChange("lotMinimum")} type="number" />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          )}
          {formData.entryMethod === "manual" && (
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography fontSize={12} sx={{ color: "text.bluishGray" }}>
                    Entry
                  </Typography>
                  <CustomInput
                    placeholder="Entry Price"
                    value={formData.entry}
                    onChange={handleInputChange("entry")}
                    type="number"
                  />
                </Stack>
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography fontSize={12} sx={{ color: "text.bluishGray" }}>
                    Stop Loss
                  </Typography>
                  <CustomInput
                    placeholder="Stop Loss"
                    value={formData.stopLoss}
                    onChange={handleInputChange("stopLoss")}
                    type="number"
                  />
                </Stack>
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
                <Stack spacing={1}>
                  <Typography fontSize={12} sx={{ color: "text.bluishGray" }}>
                    Take Profit
                  </Typography>
                  <CustomInput
                    placeholder="Take Profit"
                    value={formData.takeProfit}
                    onChange={handleInputChange("takeProfit")}
                    type="number"
                  />
                </Stack>
              </Grid>
            </Grid>
          )}

        </Box>
        {/* Quick Presets */}
        {formData.entryMethod === "atr" && (
          <Box>
            <Typography variant="labelMd" fontSize={12} sx={{ color: "text.bluishGray", mb: 2 }}>{t("Chart.quickPresets")}</Typography>
            <Stack direction="row" spacing={2} width="100%">
              <CustomButton variant="calculatorSmall" title={t("Chart.scalp")} handleClickBtn={() => handlePreset("Scalp")} width="100%" />
              <CustomButton variant="calculatorSmall" title="Swing" handleClickBtn={() => handlePreset("Swing")} width="100%" />
              <CustomButton variant="calculatorSmall" title={t("Chart.intraday")} handleClickBtn={() => handlePreset("Intraday")} width="100%" />
              <CustomButton variant="calculatorSmall" title={t("Chart.safe")} handleClickBtn={() => handlePreset("Safe")} width="100%" />
            </Stack>
          </Box>
        )}

        {/* Calculate Button */}
        <CustomButton
          title={isLoading ? "Calculating..." : "Calculate"}
          width="100%"
          handleClickBtn={handleCalculateClick} // ✅ CHANGED ONLY
          disabled={isLoading}
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "18px",
            fontWeight: 600,
            backgroundColor: "rgba(255, 100, 33, 1)",
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? "not-allowed" : "pointer"
          }}
        />
      </Stack>
    </Box>
  );
};

export default CalculatorForm;