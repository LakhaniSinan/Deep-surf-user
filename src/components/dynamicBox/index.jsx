import { Box, Typography } from '@mui/material'
import React from 'react'

const DynamicBox = ({
  title,
  price,
  value,
  titleColor,
  priceColor,
  valueColor,
  leftValue,
  rightValue,
  leftColor,
  rightColor,
  fontValue,
  fontWeightValue
}) => {
  return (
    <Box bgcolor={"background.almostBlack"} borderRadius={"8px"} p={1.2} mt={2}>
      <Typography color={titleColor || 'neutral.cadetGrey'} fontSize={"13px"} fontWeight={400}>
        {title}
      </Typography>

      {/* Single price */}
      {price && (
        <Typography color={priceColor || 'text.orange'} fontWeight={600} fontSize={"21px"} fontFamily={700}>
          {price}
        </Typography>
      )}
      {/* Left / Right split values (green/red) */}
      {leftValue && rightValue && (
        <Typography fontSize="17px" fontWeight={600}>
          <span style={{ color: leftColor || '#10B981' }}>{leftValue}</span>
          <span style={{ color: "white" }}>{""} / </span>
          <span style={{ color: rightColor || '#EF4444' }}>{rightValue}</span>
        </Typography>
      )}

      {/* Single value */}
      {value && (
        <Typography color={valueColor || 'text.carmineRed'} fontSize={fontValue || "13px"} fontWeight={fontWeightValue || 400}>
          {value}
        </Typography>
      )}


    </Box>
  )
}

export default DynamicBox
