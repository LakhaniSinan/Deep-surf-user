import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import CustomButton from "../../../components/customButton";
import CustomInput from "../../../components/customInput";
import TeleGramIcon from "../../../assets/icons/telegram.svg";
import DiscardIcon from "../../../assets/icons/discord.svg";
import XIcon from "../../../assets/icons/x.svg";

const JoinSection = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "85%", md: "85%" },
        py: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 1, sm: 2, md: 6 },
        marginTop: "8px",
      }}
    >
      <Box
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
            display={"flex"}
            alignItems={"center"}
            sx={{
              backgroundColor: "#3EDD871C",
              px: { xs: 2, sm: 3, md: 3 },
              py: 2,
              borderRadius: "30px",
              width: "fit-content",
              gap: 1,
            }}
          >
            {/* Dot */}
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#3EDD87",
                borderRadius: "50%",
              }}
            />

            {/* Text using Typography */}
            <Typography
              sx={{
                color: "#3EDD87",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: 1,
                cursor: "default",
                fontFamily: "inter"
              }}
            >
              Access is by invitation only
            </Typography>
          </Box>
        </Box>


        {/* Heading */}
        <Typography
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

      {/* Footer Section */}
      <Box sx={{ textAlign: "center", mt: { xs: 6, md: 7 } }}>
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
          direction="row"
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
          mt={{ xs: 6, md: 4 }}
        >
          <Box
            component="img"
            src={TeleGramIcon}
            sx={{ width: { xs: 20, sm: 24 } }}
          />
          <Box
            component="img"
            src={DiscardIcon}
            sx={{ width: { xs: 20, sm: 24 } }}
          />
          <Box component="img" src={XIcon} sx={{ width: { xs: 20, sm: 24 } }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default JoinSection;
