import React from "react";
import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { statCardStyles } from "./style";

const TopCoinsTableSkeleton = ({ rows = 10 }) => {
  // <-- default 10 rows
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Table>
          <TableBody>
            {Array.from({ length: rows }).map((_, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td": { borderBottom: "none" },
                  ...statCardStyles.card, // <-- style applied
                }}
              >
                {/* Coin Icon & Info */}
                <TableCell sx={{ padding: "8px 0", border: "none" }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Skeleton variant="circular" width={30} height={30} />
                    <Box>
                      <Skeleton variant="text" width={60} height={12} />
                      <Skeleton variant="text" width={40} height={10} />
                      <Skeleton variant="text" width={50} height={10} />
                    </Box>
                  </Box>
                </TableCell>

                {/* Sparkline / Graph */}
                <TableCell
                  sx={{ padding: "8px", border: "none", width: "80px" }}
                >
                  <Skeleton variant="rectangular" width={80} height={30} />
                </TableCell>

                {/* Price & Percentage */}
                <TableCell
                  sx={{ padding: "8px 0", border: "none", textAlign: "right" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    gap={0.5}
                  >
                    <Skeleton variant="text" width={50} height={12} />
                    <Skeleton variant="text" width={40} height={12} />
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

export default TopCoinsTableSkeleton;
