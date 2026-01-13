import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { styles } from "./style";
import CustomInput from "../../components/customInput";
import ArrowBtn from "../../assets/icons/arrow-back-btn.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDropdownApi, updateJournalAlert } from "../../services/modules/journal";
import CustomSelect from "../../components/customSelect";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { exchangeData, exchangeMarketApi } from "../../services/modules/calculator";

const EditJournal = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [dropDownValue, setDropDownValue] = useState({ priceRelation: [] });
  const [exchangeMarketData, setExchangeMarketData] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);
  console.log("dwdwdwdddddddddddddddddd", exchangeMarketData);

  const { t } = useTranslation();
  const { id } = useParams();
  console.log("alertttttttttttttttttttttttt", id);
  const [formData, setFormData] = useState({
    ticker: "",
    price: "",
    value: "",
    priceRelation: ""
  })
  const defaultPair = "BTCUSDT";
  const getJournalAlertById = async () => {
    try {
      setSaveLoading(true);   // 🔥 yahan
      const payload = {  // Fixed typo: paylaod -> payload
        ticker: formData.ticker,
        price: exchangeMarketData?.current_price, // Use API value
        priceRelation: formData.priceRelation,
        targetPrice: Number(formData.value)
      }
      // Fix: Pass id first, then payload
      const response = await updateJournalAlert(id, payload);

      if (response?.data?.status === "success") {
        console.log("fuhfhrufrfrfrf", response?.data?.data);
        toast.success(response?.data?.message);
        setFormData(prev => ({
          ...prev,
          ticker: "",
          price: "",
          value: ""
        }));
        setFormErrors({});
        navigate("/coin-alert");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || "Something went wrong");
    } finally {
      setSaveLoading(false);  // 🔥 yahan
    }
  };

  const getDropDownValue = async () => {
    try {
      setIsLoading(true);
      const response = await getDropdownApi();
      const data = response?.data?.data || response?.data;
      setDropDownValue(data || { priceRelation: [] });
    } catch (error) {
      console.error("Error fetching dropdown:", error);
      toast.error("Failed to load dropdown data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDropDownValue();
  }, []);
  const handleChange = (name, value) => {
    // Update form value
    setFormData({ ...formData, [name]: value });

    // Remove error on change
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  const pairOptions =
    dropDownValue?.priceRelation?.map((item, index) => ({
      value: item || `Option${index}`,
      label: item || `Option ${index + 1}`,
    })) || [];
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      height: "44px",
      borderRadius: "10px",
      backgroundColor: "rgba(41, 40, 40, 1)",
      "& fieldset": {
        borderColor: "rgba(143, 143, 143, 1)",
        borderRadius: "12px",

      },

      "&:hover fieldset": {
        borderColor: "rgba(143, 143, 143, 1)",
        color: "white",
      },

      "&.Mui-focused fieldset": {
        borderColor: "rgba(143, 143, 143, 1)",
      },
    },

    "& input": {
      padding: "10px 14px",
      fontSize: "14px",
    },
  };

  const whiteSelectText = {
    "& .MuiSelect-select": { color: "#fff" },
    "& .MuiSelect-icon": { color: "rgba(141, 143, 149, 1)" },
  };
  const exchangeMarket = async (pair) => {
    try {
      setIsLoading(true);
      const response = await exchangeMarketApi({ pair });
      const data = response?.data?.data;
      setExchangeMarketData(data);
      console.log("ffffffffffdddddddddddddddddddddddddddddddddfffffffffffffff", data?.current_price);

    } catch (error) {
      console.log("failed to exchange market APi");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    exchangeMarket(defaultPair);
  }, []);


  return (
    <Box sx={styles.pageRoot}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h1" color={theme.palette.text.primary}>
            Journal
          </Typography>
        </Box>

        <Box sx={styles.sectionContainer}>

          <Box>
            <Typography variant="h5" color={theme.palette.text.primary}>
              My Coins & Alerts
            </Typography>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Alerts work in real-time via WebSocket! Get instant notifications when conditions are met.
            </Typography>
          </Box>


          <Box sx={styles.formCard}>
            <Box sx={styles.formInner}>
              <Box sx={styles.formHeader}>
                <Box display={"flex"} gap={"20px"} sx={{ cursor: "pointer" }} onClick={() => navigate("/coin-alert")} mt={2}>
                  <Box>
                    <Box bgcolor={"neutral.mutedGrey"} borderRadius={"50%"} p={0.5}><img src={ArrowBtn} width={"20px"} height={"20px"} /></Box>
                  </Box>
                  <Box>
                    <Typography variant="h5" color={theme.palette.text.primary}>
                      Edit alert
                    </Typography>
                  </Box>

                </Box>
              </Box>

              <Stack direction="row" spacing={2} mt={5}>
                <CustomInput
                  sx={inputStyles}
                  value={formData.ticker}
                  border={theme.palette.background.default}
                  onChange={(e) => handleChange("ticker", e.target.value)}
                  placeholder={'Ticker (e.g., BTC)'}
                />
                <CustomInput
                  sx={{
                    ...inputStyles,
                    "& .MuiOutlinedInput-root": {
                      ...inputStyles["& .MuiOutlinedInput-root"],
                    },
                    "& .MuiOutlinedInput-input.Mui-disabled": {
                      color: "#fff",             // text color
                      WebkitTextFillColor: "#fff" // for Chrome/Safari
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(143, 143, 143, 1)", // keep border color
                    }
                  }}
                  value={exchangeMarketData?.current_price || ""}
                  placeholder="Price"
                  disabled
                />

              </Stack>



              <Stack direction="row" spacing={2} mt={2} alignItems="center">
                <Box sx={{ flex: 1 }}>
                  <CustomSelect
                    sx={whiteSelectText}
                    options={pairOptions}
                    placeholder="Crossed"
                    onChange={(e) => handleChange("priceRelation", e.target.value)}

                  />
                </Box>

                <Box sx={{ width: "505px" }}>
                  <CustomInput
                    sx={inputStyles}
                    value={formData.value}
                    placeholder="Value"
                    onChange={(e) => handleChange("value", e.target.value)}
                  />
                </Box>
              </Stack>


              <CustomButton
                title={t("journal.saveAlert")}
                handleClickBtn={getJournalAlertById}
                loading={saveLoading}   // ✅ FIX
                sx={styles.saveButton}
              />
            </Box>
          </Box>
          {/* Alerts List (example card) */}
          <Box sx={styles.alertListWrapper}>
            <Box sx={styles.alertCard}>
              <Box>
                <Typography variant="h6" sx={styles.alertTitle}>
                  BTC/USDT
                </Typography>
                <Typography variant="body2" sx={styles.alertSubtitle}>
                  Price crossed{' '}
                  <Box component="span" sx={styles.alertBoldValue}>
                    120000
                  </Box>
                </Typography>
                <Typography variant="body3" mt={2} sx={styles.alertTimestamp}>
                  Added: 10/15, 12:42 PM
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={styles.editButton}
                >
                  Edit
                </Button>
                <Button
                  sx={styles.deleteButton}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EditJournal;
