import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const CalculatorResultCard = ({ label, items = [] }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.midGrey",
        borderRadius: "8px",
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "230px"
      }}
    >
      <Stack spacing={2.5} sx={{ flex: 1 }}>
        {items.map((item, index) => (
          <Box key={index}>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 400,
                color: "text.bluishGray",
                mb: 0.5,
                lineHeight: 1.4,
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(175, 176, 180, 1)",
                lineHeight: 1.2,
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CalculatorResultCard;

