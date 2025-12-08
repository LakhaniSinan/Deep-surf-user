import React, { useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import CustomButton from "../../../components/customButton";
import CustomInput from "../../../components/customInput";
import AOS from "aos";
import "aos/dist/aos.css";

import TeleGramIcon from "../../../assets/icons/telegram.svg";
import DiscardIcon from "../../../assets/icons/discord.svg";
import XIcon from "../../../assets/icons/x.svg";

const JoinSection = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "85%", md: "81%" },
        py: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 1, sm: 2, md: 6 },
        mt: "8px",
      }}
      data-aos="fade-up"
    >
      <Box
        data-aos="zoom-in"
        sx={{
          width: "100%",
          backgroundColor: "#1A1A1A",
          borderRadius: "20px",
          textAlign: "center",
          py: { xs: 3, sm: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Tag Button */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            data-aos="fade-down"
            sx={{
              backgroundColor: "#3EDD871C",
              display: "flex",
              alignItems: "center",
              px: { xs: 2, sm: 3, md: 3 },
              py: 2,
              borderRadius: "30px",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#3EDD87",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{
                color: "#3EDD87",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: 1,
                fontFamily: "inter",
              }}
            >
              Access is by invitation only
            </Typography>
          </Box>
        </Box>

        {/* Heading */}
        <Typography
          data-aos="fade-up"
          sx={{
            fontSize: { xs: "22px", sm: "30px", md: "40px" },
            fontWeight: { xs: 600, md: 700 },
            color: "#fff",
            lineHeight: { xs: 1.3, md: 1.2 },
            mb: { xs: 1.5, sm: 2 },
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Become a Leading <br /> Trader now
        </Typography>

        {/* Description */}
        <Typography
          data-aos="fade-up"
          data-aos-delay="150"
          sx={{
            color: "#A3A3A3",
            fontSize: { xs: "12px", sm: "14px" },
            mb: { xs: 2.5, md: 4 },
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Join the waitlist to be among the first inside the DeepSurf private.
        </Typography>

        {/* Input + Button */}
        <Stack
          data-aos="fade-up"
          data-aos-delay="250"
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", maxWidth: "600px", mx: "auto" }}
        >
          <CustomInput
            placeholder="Enter your email..."
            fullWidth
            sx={{
              bgcolor: "#121212",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
              },
              input: { color: "#fff", fontSize: "14px", py: 1.2 },
            }}
          />

          <CustomButton
            variant="calculatorSmall"
            title="Join"
            sx={{
              bgcolor: "text.DarkGrey",
              color: "#fff",
              px: { xs: 3, sm: 6 },
              py: { xs: 1, sm: 1 },
              borderRadius: "10px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": { bgcolor: "text.Orange" },
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{ textAlign: "center", mt: { xs: 6, md: 7 } }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "11px", sm: "13px", md: "14px" },
            fontWeight: 400,
            lineHeight: 1.4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          DeepSurf — The future of market intelligence. <br />
          Built with precision. Powered by AI. Protected by design.
        </Typography>

        {/* Icons */}
        <Stack
          // data-aos="zoom-in"
          direction="row"
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
          mt={{ xs: 6, md: 4 }}
        >
          <Box component="img" src={TeleGramIcon} sx={{ width: { xs: 20, sm: 24 } }} />
          <Box component="img" src={DiscardIcon} sx={{ width: { xs: 20, sm: 24 } }} />
          <Box component="img" src={XIcon} sx={{ width: { xs: 20, sm: 24 } }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default JoinSection;
