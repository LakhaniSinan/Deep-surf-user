import React, { useEffect, useState } from 'react';
import { Box, Container, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import { styles } from "./style";
import CustomInput from "../../components/customInput";
import CustomSelect from '../../components/customSelect';
import ArrowBtn from "../../assets/icons/arrow-back-btn.svg";
import { useNavigate } from "react-router-dom";
import { getCreateAlertApi, getDropdownApi, jounralSearchApi, journalLiveCoin } from '../../services/modules/journal';
import { toast } from 'react-toastify';
import CustomButton from '../../components/customButton';
import { setJournalAPiValidation } from "../../utils/validations";
import { useLocation } from "react-router-dom";
const SaveAlert = () => {
    const [dropDownValue, setDropDownValue] = useState({ priceRelation: [] });
    const [formData, setFormData] = useState({
        ticker: "",
        price: "",
        value: "",
        priceRelation: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [saveLoading, setSaveLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const { pair, currentPrice } = location.state || {};
    useEffect(() => {
        if (pair || currentPrice) {
            setFormData(prev => ({
                ...prev,
                ticker: pair || "",
                price: currentPrice || "",
            }));
        }
    }, [pair, currentPrice]);

    // ================= DROPDOWN API =================
    const getDropDownValue = async () => {
        try {
            const response = await getDropdownApi();
            const data = response?.data?.data || response?.data;
            setDropDownValue(data || { priceRelation: [] });
        } catch (error) {
            // toast.error("Failed to load dropdown data");
        }
    };

    useEffect(() => {
        getDropDownValue();
    }, []);

    // ================= OPTIONS =================
    const pairOptions =
        dropDownValue?.priceRelation?.map((item, index) => ({
            value: item || `Option${index}`,
            label: item || `Option ${index + 1}`,
        })) || [];

    // ================= HANDLE CHANGE =================
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: "" }));
    };

    // ================= SAVE ALERT API =================
    const createJounalApi = async () => {
        const isValid = setJournalAPiValidation(formData, setFormErrors);
        if (!isValid) return;

        try {
            setSaveLoading(true);
            const payload = {
                ticker: formData.ticker,
                price: formData.price,
                priceRelation: formData.priceRelation,
                targetPrice: Number(formData.value)
            };
            const response = await getCreateAlertApi(payload);
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                setFormData({ ticker: "", price: "", value: "", priceRelation: "" });
                setFormErrors({});
            }
            navigate("/coin-alert");
        } catch (error) {
            // toast.error(error?.response?.data?.error || "Something went wrong");
        } finally {
            setSaveLoading(false);
        }
    };

    // ================= SEARCH API =================
    const journalSearch = async (query) => {
        if (!query) {
            setSearchResults([]);
            setShowDropdown(false);
            return;
        }
        try {
            const response = await jounralSearchApi(query);
            if (response?.data?.status === "success") {
                setSearchResults(response?.data?.data || []);
                setShowDropdown(true);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Search failed");
        }
    };

    // ================= TRIGGER SEARCH ON TICKER CHANGE =================
    useEffect(() => {
        if (formData.ticker.length >= 1) {
            journalSearch(formData.ticker);
        } else {
            setSearchResults([]);
            setShowDropdown(false);
        }
    }, [formData.ticker]);

    // ================= HANDLE TICKER SELECT =================
    const handleTickerSelect = async (item) => {
        const selectedTicker = item.ticker || item.symbol || item.name;
        const coin = selectedTicker.toLowerCase();

        setFormData(prev => ({ ...prev, ticker: selectedTicker }));
        setShowDropdown(false);
        setSearchResults([]);

        // Fetch current price from live API
        try {
            const response = await journalLiveCoin(coin);
            const price = response?.data?.data?.price || "";
            setFormData(prev => ({ ...prev, price }));
        } catch (error) {
            console.error("Error fetching coin price", error);
            setFormData(prev => ({ ...prev, price: "" }));
            toast.error("Failed to fetch coin price");
        }
    };

    // ================= STYLES =================
    const inputStyles = {
        "& .MuiOutlinedInput-root": {
            height: "44px",
            borderRadius: "10px",
            backgroundColor: "rgba(41, 40, 40, 1)",
            "& fieldset": { borderColor: "rgba(143, 143, 143, 1)", borderRadius: "12px" },
            "&:hover fieldset": { borderColor: "rgba(143, 143, 143, 1)" },
            "&.Mui-focused fieldset": { borderColor: "rgba(143, 143, 143, 1)" },
        },
        "& input": { padding: "10px 14px", fontSize: "14px" },
    };
    const whiteSelectText = { "& .MuiSelect-select": { color: "#fff" }, "& .MuiSelect-icon": { color: "rgba(141, 143, 149, 1)" } };

    return (
        <Box sx={styles.pageRoot}>
            <Header />
            <Container maxWidth="lg">
                <Box my={5}>
                    <Typography variant="h1" color={theme.palette.text.primary} fontSize={"35px"}>
                        {t("journal.heading")}
                    </Typography>
                </Box>
                <Box sx={styles.sectionContainer}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Typography variant="h5" color={"neutral.Snowwhite"}>
                            {t("journal.myCoinsAlerts")}
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography variant="body2" color={theme.palette.text.secondary}>
                            {t("journal.myCoinsAlertHeading")}
                        </Typography>
                    </Box>
                    <Box sx={styles.formCard}>
                        <Box sx={styles.formInner}>
                            <Box sx={styles.formHeader}>
                                <Box display={"flex"} alignItems={"center"} gap={"10px"} mt={2} sx={{ cursor: "pointer" }} onClick={() => navigate("/coin-alert")}>
                                    <Box bgcolor={"neutral.mutedGrey"} borderRadius={"50%"} p={0.5}>
                                        <img src={ArrowBtn} width={"20px"} height={"20px"} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" color={"neutral.Snowwhite"}>
                                            {t("journal.addToJournal")}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Stack direction="row" spacing={2} mt={5}>
                                {/* SEARCH INPUT + DROPDOWN */}
                                <Box sx={{ position: "relative", width: "100%" }}>
                                    <CustomInput
                                        value={formData.ticker}
                                        onChange={(e) => handleChange("ticker", e.target.value)}
                                        sx={inputStyles}
                                        placeholder={t("journal.ticker")}
                                        inputBgColor={"rgba(41, 40, 40, 1)"}
                                        error={!!formErrors.ticker}
                                        helperText={formErrors.ticker}
                                    />                                 
                                    {showDropdown && searchResults.length > 0 && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                width: "100%",
                                                bgcolor: "#292828",
                                                border: "1px solid #8f8f8f",
                                                borderRadius: "10px",
                                                maxHeight: "200px",
                                                overflowY: "auto",
                                                zIndex: 10,
                                                mt: 0.5,
                                            }}
                                        >
                                            {searchResults.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    onClick={() => handleTickerSelect(item)}
                                                    sx={{
                                                        px: 2,
                                                        py: 1,
                                                        cursor: "pointer",
                                                        "&:hover": { backgroundColor: "#3a3a3a" },
                                                        color: "#fff",
                                                        borderBottom: index !== searchResults.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                                                    }}
                                                >
                                                    {item.ticker} - {item.name}
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Box>

                                {/* PRICE INPUT */}
                                <CustomInput
                                    value={formData.price}
                                    onChange={(e) => handleChange("price", e.target.value)}
                                    sx={{
                                        ...inputStyles,
                                        "& .MuiOutlinedInput-input.Mui-disabled": { color: "#fff", WebkitTextFillColor: "#fff" },
                                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(143, 143, 143, 1)" },
                                    }}
                                    placeholder={t("journal.price")}
                                    disabled
                                />
                            </Stack>

                            {/* PRICE RELATION + VALUE */}
                            <Stack direction="row" spacing={2} mt={2}>
                                <Box flex={1}>
                                    <CustomSelect
                                        sx={whiteSelectText}
                                        options={pairOptions}
                                        placeholder={t("journal.selectPriceRelation")}
                                        value={formData.priceRelation}
                                        onChange={(e) => handleChange("priceRelation", e.target.value)}
                                        error={!!formErrors.priceRelation}
                                        helperText={formErrors.priceRelation}
                                    />
                                </Box>
                                
                                <Box flex={1}>
                                    <CustomInput
                                        value={formData.value}
                                        onChange={(e) => handleChange("value", e.target.value)}
                                        sx={inputStyles}
                                        placeholder={t("journal.value")}
                                        error={!!formErrors.value}
                                        helperText={formErrors.value}
                                    />
                                </Box>
                            </Stack>

                            <CustomButton
                                title={t("journal.saveAlert")}
                                handleClickBtn={createJounalApi}
                                loading={saveLoading}
                                sx={styles.saveButton}
                            />

                        </Box>
                    </Box>
                </Box >
            </Container >
        </Box >
    );
};

export default SaveAlert;