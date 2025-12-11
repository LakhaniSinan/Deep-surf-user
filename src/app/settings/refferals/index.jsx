import { Box, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import ReferralIcon from "../../../assets/icons/referral-active.svg";
import DollarsIcon from "../../../assets/icons/dollar-icon.svg";
import WalletIcon from "../../../assets/icons/wallet-icon.svg";
import PercentageIcon from "../../../assets/icons/percentage-icon.svg"
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import WithDrawalRequestTransaction from "./refferalHistory";

const Referrals = () => {
  const [referralLink] = useState("https://deepsurf.io/refer/ht5gh");
  const [promoCode] = useState("76913284");
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={4}>
        <Typography variant="titleLg">Referrals</Typography>

        <Box>
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={ReferralIcon}
                  alt="Referrals icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    p: 1.5,
                  }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>
                    Total referrals
                  </Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>
                    4
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={DollarsIcon}
                  alt="Referrals icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    p: 1.5,
                  }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>
                    Total Earning
                  </Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>
                    $3427
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={PercentageIcon}
                  alt="Referrals icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    p: 1.5,
                  }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite" }}>
                    Commission
                  </Typography>
                  <Typography variant="h4" sx={{ color: "neutral.Snowwhite" }}>
                    10%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src={WalletIcon}
                  alt="Referrals icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    p: 1.5,
                  }}
                />
                <Stack spacing={0.5}>
                  <Typography variant="labelMd" sx={{ color: "neutral.Snowwhite", fontWeight: "700" }}>
                    Wallet balance
                  </Typography>
                  <Typography variant="h3" sx={{ color: "neutral.Snowwhite" }}>
                    $7423
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5}>
                <Typography
                  variant="labelMd"
                  fontSize="12px"
                  sx={{ color: "#C7C7C7" }}
                >
                  Your referral link
                </Typography>
                <CustomInput
                  value={referralLink}
                  fullWidth
                  readonly
                  InputEndIcon={
                    <ContentCopyRoundedIcon
                      fontSize="small"
                      sx={{ color: "#FFFFFF" }}
                    />
                  }
                  onEndIconClick={() => handleCopy(referralLink, "link")}
                />
                <Typography variant="helperSm" sx={{ color: "#8F8F8F" }}>
                  Share the link below with your friends
                </Typography>
                {copiedField === "link" && (
                  <Typography variant="helperSm" sx={{ color: "#5CB85C" }}>
                    Link copied!
                  </Typography>
                )}
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack
                spacing={1}
                alignItems={{ xs: "flex-start", md: "flex-start" }}
                justifyContent="center"
              >
                <Typography
                  variant="labelMd"
                  fontSize="12px"
                  sx={{ color: "neutral.Snowwhite" }}
                >
                  You can also use promo code
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h5" sx={{ color: "#FF6421" }}>
                    {promoCode}
                  </Typography>
                  <CustomButton
                    title={copiedField === "code" ? "Copied!" : ""}
                    handleClickBtn={() => handleCopy(promoCode, "code")}
                    width="auto"
                    sx={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      minWidth: 0,
                      px: 1,
                    }}
                    icon={<ContentCopyRoundedIcon fontSize="small" />}
                  />
                </Stack>
                {copiedField === "code" && (
                  <Typography variant="helperSm" sx={{ color: "#5CB85C" }}>
                    Promo code copied!
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>

      </Box>

      <Box >
        <WithDrawalRequestTransaction />
      </Box>
    </>
  );
};

export default Referrals;
