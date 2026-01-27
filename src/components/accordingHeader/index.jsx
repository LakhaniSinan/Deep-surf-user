import { Box, Typography } from "@mui/material";
import React from "react";

const AccordingHeader = ({
  tittle,
  fontSize = "13px",
  color = "neutral.Snowwhite",
  bgGroundColor = "#fff",
  mt = 1,

  highlights = [], // 👈 [{ word: "", color: "" }]
}) => {
  const renderText = () => {
    let text = tittle;

    highlights.forEach(({ word, color ,   }) => {
      text = text.replace(
        word,
        `<span style="color:${color}; font-weight:500">${word}</span>`
      );
    });

    return (
      <span dangerouslySetInnerHTML={{ __html: text }} />
    );
  };

  return (
    <Box mt={mt}>
      <Box display="flex" alignItems="flex-start" gap="10px">
        {/* Dot */}
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: bgGroundColor,
            mt: "7px",
            flexShrink: 0,
          }}
        />

        {/* Text */}
        <Typography fontSize={fontSize} color={color} lineHeight={1.6}>
          {renderText()}
        </Typography>
      </Box>
    </Box>
  );
};

export default AccordingHeader;
