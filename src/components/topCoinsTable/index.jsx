import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import Sparkline from "./Sparkline";

const TopCoinsTable = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography
        variant="h4"
        fontSize="1rem"
        fontWeight={600}
        color="text.primary"
        mb={3}
      >
        Top coins
      </Typography>

      <TableContainer>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            {data.map((coin, index) => (
              <TableRow
                key={coin.id || index}
                sx={{
                  borderBottom:
                    index < data.length - 1
                      ? `1px solid ${theme.palette.neutral.line}`
                      : "none",
                  "&:hover": {
                    backgroundColor: theme.palette.neutral.hover,
                  },
                  "&:last-child td": {
                    borderBottom: "none",
                  },
                }}
              >
                {/* Coin Icon & Info */}
                <TableCell
                  sx={{
                    padding: "8px 0",
                    border: "none",
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: coin.iconBg || "#2a2a2a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {coin.icon ? (
                        <img
                          src={coin.icon}
                          alt={coin.ticker}
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {coin.ticker?.[0] || "?"}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {coin.ticker}
                      </Typography>
                      <Typography
                        sx={{
                          color: "neutral.mutedText",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          mt: 0.5,
                        }}
                      >
                        {coin.name}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* Sparkline Graph */}
                <TableCell
                  sx={{
                    padding: "8px",
                    border: "none",
                    width: "80px",
                  }}
                >
                  <Box
                    sx={{
                      width: "80px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Sparkline
                      data={coin.sparkline || []}
                      isPositive={coin.percentChange >= 0}
                    />
                  </Box>
                </TableCell>

                {/* Price & Percentage Change - Same Column */}
                <TableCell
                  sx={{
                    padding: "8px 0",
                    border: "none",
                    textAlign: "right",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    gap={0.5}
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {coin.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: coin.percentChange >= 0 ? "#22c55e" : "#ef4444",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {coin.percentChange >= 0 ? "+" : ""}
                      {coin.percentChange?.toFixed(2)}%
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopCoinsTable;
