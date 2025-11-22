import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { statCardStyles } from "./style";
import PositiveIcon from "../../assets/icons/positive-coins-icon.svg";
import NegativeIcon from "../../assets/icons/negative-coin-icon.svg";

function StatCard({
  title,
  subtitle,
  price,
  percent,
  accentColor = "#4caf50",
  icon,
  imageSrc,
  imageAlt,
  sx,
}) {
  const isPositive = percent > 0 ? true : false;

  return (
    <Paper elevation={0} sx={{ ...statCardStyles.card, ...sx }}>
      <Box mb={1.5}>
        <Box display="flex" alignItems="center" gap={1}>
          {icon && (
            <Box sx={{ ...statCardStyles.iconWrapper, color: accentColor }}>
              {icon}
            </Box>
          )}
          <Box>
            <Typography sx={statCardStyles.title}>{title}</Typography>
            {subtitle && (
              <Typography sx={statCardStyles.subtitle}>{subtitle}</Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box  gap={1}>
        <Typography sx={statCardStyles.price}>{price}</Typography>
        {percent !== undefined && (
          <Typography
            sx={
              isPositive
                ? statCardStyles.percentPositive
                : statCardStyles.percentNegative
            }
          >
            {isPositive ? "+" : ""}
            {typeof percent === "number" ? percent.toFixed(2) : percent}%
          </Typography>
        )}
      </Box>

      {imageSrc ? (
        <Box
          component="img"
          src={isPositive ? PositiveIcon : NegativeIcon}
          alt={imageAlt || title}
          sx={statCardStyles.image}
          width={"100%"}
        />
      ) : (
        <Box
          sx={{
            ...statCardStyles.chart,
            background: `linear-gradient(180deg, ${accentColor}22, rgba(0,0,0,0))`,
          }}
        />
      )}
    </Paper>
  );
}

export default StatCard;
