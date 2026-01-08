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
import { getCreateAlertApi, getDropdownApi } from '../../services/modules/journal';
import { toast } from 'react-toastify';
import CustomButton from '../../components/customButton';
import { setJournalAPiValidation } from "../../utils/validations";

const SaveAlert = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dropDownValue, setDropDownValue] = useState({ priceRelation: [] });
    const [formData, setFormData] = useState({
        ticker: "",
        price: "",
        value: "",
        priceRelation: ""
    });
    const [formErrors, setFormErrors] = useState({});

    const { t } = useTranslation();
    const navigate = useNavigate();

    // ================= DROPDOWN API =================
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

    // ================= OPTIONS =================
    const pairOptions =
        dropDownValue?.priceRelation?.map((item, index) => ({
            value: item || `Option${index}`,
            label: item || `Option ${index + 1}`,
        })) || [];

    // ================= HANDLE CHANGE FUNCTION =================
    const handleChange = (name, value) => {
        // Update form value
        setFormData({ ...formData, [name]: value });

        // Remove error on change
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // ================= SAVE ALERT API =================
    const createJounalApi = async () => {
        const isValid = setJournalAPiValidation(formData, setFormErrors);
        if (!isValid) return;

        try {
            setIsLoading(true);
            const payload = {
                ticker: formData.ticker,
                price: formData.price,
                priceRelation: formData.priceRelation,
                targetPrice: Number(formData.value)
            };
            const response = await getCreateAlertApi(payload);
            console.log("furjedededede", response);


            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                setFormData(prev => ({
                    ...prev,
                    ticker: "",
                    price: "",
                    value: ""
                }));
                setFormErrors({});
            }
        } catch (error) {
            toast.error(error?.response?.data?.error || "Something went wrong");
        } finally {
            setIsLoading(false);
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

    const whiteSelectText = {
        "& .MuiSelect-select": { color: "#fff" },
        "& .MuiSelect-icon": { color: "rgba(141, 143, 149, 1)" },
    };

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
                                <CustomInput
                                    value={formData.ticker}
                                    onChange={(e) => handleChange("ticker", e.target.value)}
                                    sx={inputStyles}
                                    placeholder={'Ticker (e.g., BTC)'}
                                    inputBgColor={"rgba(41, 40, 40, 1)"}
                                    error={!!formErrors.ticker}
                                    helperText={formErrors.ticker}
                                />

                                <CustomInput
                                    value={formData.price}
                                    onChange={(e) => handleChange("price", e.target.value)}
                                    sx={{ ...inputStyles, ...whiteSelectText }}
                                    placeholder={'Price'}
                                    error={!!formErrors.price}
                                    helperText={formErrors.price}
                                />
                            </Stack>

                            <Stack direction="row" spacing={2} mt={2}>
                                <Box flex={1}>
                                    <CustomSelect
                                        sx={whiteSelectText}
                                        options={pairOptions}
                                        placeholder="Crossed"
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
                                        placeholder="Value"
                                        error={!!formErrors.value}
                                        helperText={formErrors.value}
                                    />
                                </Box>
                            </Stack>

                            <CustomButton
                                title={t("journal.saveAlert")}
                                handleClickBtn={createJounalApi}
                                loading={isLoading}   // <-- correct prop
                                sx={styles.saveButton}
                            />

                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SaveAlert;
