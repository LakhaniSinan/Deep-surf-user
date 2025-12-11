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
// import PositiveIcon from "../../assets/icons/positive-coins-icon.svg";
// import NegativeIcon from "../../assets/icons/negative-coin-icon.svg";
import TopCardSkeleton from "../../components/skeleton/topCoinCardSkeleton";

const TopCoinsTable = ({ data, isLoading }) => {
  console.log("TopCoinsTableData:", data);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "12px",
        padding: "16px",
        overflowX: "auto", // 👈 Add here
        maxHeight: "410px",
      }}
    >
      <Typography
        variant="h4"
        fontSize="1rem"
        fontWeight={600}
        color="text.primary"
        mb={3}
        fontFamily="Inter Tight"
      >
        Top coins
      </Typography>

      {isLoading ? (
        <TopCardSkeleton />
      ) : data?.length === 0 ? (
        <Typography textAlign={"center"} color="#fff" mt={2} fontWeight={600}>
          No Data Found
        </Typography>
      ) : (
        <TableContainer>
          <Table
            sx={{
              width: "100%",
            }}
          >
            <TableBody>
              {data?.map((coin, index) => (
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
                    <Box display="flex" alignItems="center" gap={1}>
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
                        {coin.logo ? (
                          <img
                            src={coin.logo}
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
                              fontFamily: "inter Tight"
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
                            color: "#FFFFFF",
                            fontSize: "15px",
                            fontWeight: 550,
                            lineHeight: 1.2,
                            mt: 0.5,
                          }}
                        >
                          {coin.symbol}
                        </Typography>
                        <Typography
                          sx={{
                            color: "neutral.mutedText",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            mt: 0.5,
                            fontFamily: "inter Tight"
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
                        isPositive={!coin.change24hFormatted?.includes("-")}
                      />

                      {/* {coin.change24hFormatted?.includes("-") ? (
                        <img src={NegativeIcon} />
                      ) : (
                        <img src={PositiveIcon} />
                      )} */}
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
                          fontWeight: 600,
                          fontFamily: "inter Tight"

                        }}
                      >
                        {coin.priceFormatted}
                      </Typography>
                      <Typography
                        sx={{
                          color: coin.change24hFormatted.includes("-")
                            ? "#ef4444"
                            : "green",
                          fontSize: "12px",
                          fontWeight: 500,
                          fontFamily: "inter Tight"

                        }}
                      >
                        {coin.change24hFormatted.includes("-") ? "" : "+"}
                        {coin.change24hFormatted}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TopCoinsTable;
