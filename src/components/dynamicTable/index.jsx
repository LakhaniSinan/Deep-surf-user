import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useMemo, useRef, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";  // Add this import
import DeleteIcon from "@mui/icons-material/Delete";
import UserWithdraw from "../../app/settings/refferals/withdrawDetails";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import DeleteIconImg from "../../assets/icons/delete-icon.svg";
import { color } from "d3";

export default function PaginatedTable({
  tableWidth,
  tableHeader,
  tableData,
  displayRows,
  isLoading,
  showPagination = true,
  headerWhite = false,
  tableSx,
  onCopy,
  onDelete,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const withdrawDetails = useRef();

  const columnKeys = useMemo(
    () => (Array.isArray(displayRows) ? displayRows : []),
    [displayRows]
  );
  const totalColumns =
    columnKeys.length ||
    tableHeader?.length ||
    (tableData?.[0] ? Object.keys(tableData[0]).length : 0);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const headerAlignMap = useMemo(() => {
    const map = {};
    tableHeader?.forEach((header) => {
      map[header.id] = header.align || "center";
    });
    return map;
  }, [tableHeader]);

  const tableStyle = {
    "&.MuiTableContainer-root": {
      backgroundColor: "rgba(28, 28, 28, 1)",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "none",
      border: "1px solid rgba(255,255,255,0.08)",
      // border: "0.42px solid rgba(255, 255, 255, 1)"
    },

    "& .MuiTable": {
      borderCollapse: "separate",
      borderSpacing: "0",
    },
    "& .MuiTableHead-root": {
      backgroundColor: "transparent",
    },
    "& .MuiTableHead-root .MuiTableCell-root": {
      // borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "14px 16px",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: "0.08em",
      ...(headerWhite
        ? {
          backgroundColor: "#fff",
          color: "#111",
        }
        : {
          backgroundColor: "rgba(255,255,255,0.02)",
          color: "#A5A5A5",
        }),
    },
    "& .MuiTableCell-root": {
      // borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "16px",
      color: "#E3E3E3",
      textAlign: "left",
    },
    "& .MuiTablePagination-toolbar": {
      minHeight: "60px",
      borderTop: "1px solid #eee",
    },
    "& .MuiTableRow-root": {
      // backgroundColor: "black"
    }
  };
  const maskWalletAddress = (address) => {
    if (!address || address.length <= 4) return address || "N/A";
    return `****${address.slice(4)}`;
  };
  const renderCell = (row, val, index) => {
    console.log("fuefuegfefefefe", row[val]);

    switch (val) {
      case "index":
        return (
          <TableCell align="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#e3f2fd",
                // color: "#1976d2",
                fontWeight: "600",
                // border : "1px solid red"
              }}
            >
              {index + 1}
            </Box>
          </TableCell>
        );

      case "name":
        return (
          <TableCell align={headerAlignMap[val] || "left"}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography fontSize={"12px"} variant="subtitle2" color="#E3E3E3" fontWeight={600} >
                {row.name}
              </Typography>
              <Typography fontSize={"12px"} variant="caption" color="#aaa">
                {row.email}
              </Typography>
            </Box>
          </TableCell>
        );
      case "walletAddress":
        return (
          <TableCell>
            {maskWalletAddress(row.walletAddress)}
          </TableCell>
        );
      case "referralStatus":
        // Custom rendering for "refferal status"
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 0.75,
                borderRadius: "14px",
                fontSize: "13px",
                fontWeight: 400,
                backgroundColor:
                  (row[val] || row["referralStatus"] || "")
                    .toString()
                    .toLowerCase()
                    .includes("payment completed")
                    ? "neutral.green"
                    : (row[val] || row["referralStatus"] || "")
                      .toString()
                      .toLowerCase()
                      .includes("sign up")
                      ? "neutral.aquablue"
                      : "neutral.Snowwhite",
                color:
                  (row[val] || row["referralStatus"] || "")
                    .toString()
                    .toLowerCase()
                    .includes("payment completed")
                    ? "neutral.brightGreen"
                    : (row[val] || row["referralStatus"] || "")
                      .toString()
                      .toLowerCase()
                      .includes("sign up")
                      ? "rgba(208, 229, 240, 1)"
                      : "#E3E3E3",
                minWidth: 60,
                textTransform: "capitalize"
              }}
            >
              {(row[val] || row["referralStatus"] || "")}
            </Box>
          </TableCell>
        );

      case "Status":
        const statusValue = (row[val] || "").toString().toLowerCase();
        const isCompleted = statusValue.includes("completed");
        const isPending = statusValue.includes("In Process");

        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 0.75,
                borderRadius: "14px",
                fontSize: "13px",
                fontWeight: 600,
                backgroundColor: isCompleted
                  ? "rgba(0, 34, 16, 1)"
                  : isPending
                    ? "transparent"
                    : "rgba(255, 223, 167, 0.28)",
                color: isCompleted
                  ? "rgba(62, 221, 135, 1)"
                  : isPending
                    ? "rgba(245, 159, 10, 1)"
                    : "rgba(245, 159, 10, 1)",
                minWidth: 96,
              }}
            >
              {row.status}
            </Box>
          </TableCell>
        );
      // case "status":
      //   return (
      //     <TableCell>
      //       <Box color={"neutral.brightGreen"} bgcolor={"rgba(0, 34, 16, 1)"} textAlign={"center"} fontWeight={400} p={1.5} borderRadius={"10px"} border={"1px solid rgba(62, 221, 135, 1)"}>
      //         {row[val]}
      //       </Box>
      //     </TableCell>

      //   );
      case "amount":
        // First occurrence - keep this one
        return (
          <TableCell>
            <Box color={"neutral.Snowwhite"} fontWeight={500}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "details":
        return (
          <TableCell>
            <Box color={"neutral.Snowwhite"} fontWeight={500}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "date":
        return (
          <TableCell>
            <Box color={"neutral.Snowwhite"} fontWeight={500}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "status":
        // Check if status has a nested Status property
        if (row[val]?.Status) {
          return (
            <TableCell>
              <Box
                sx={{
                  fontWeight: 600,
                  color: "neutral.Snowwhite",
                  letterSpacing: "0.8px"
                }}>
                {row[val].Status}
              </Box>
            </TableCell>
          );
        }
        // Default status rendering
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                backgroundColor: (row[val] || "")
                  .toString()
                  .toLowerCase()
                  .includes("in progress")
                  ? "rgba(255, 223, 167, 0.28)"
                  : (row[val] || "")
                    .toString()
                    .toLowerCase()
                    .includes("completed")
                    ? "rgba(0, 34, 16, 1)"
                    : "neutral.Snowwhite",
                color: (row[val] || "")
                  .toString()
                  .toLowerCase()
                  .includes("in progress")
                  ? "rgba(245, 159, 10, 1)"
                  : (row[val] || "")
                    .toString()
                    .toLowerCase()
                    .includes("completed")
                    ? "rgba(62, 221, 135, 1)"
                    : "neutral.Snowwhite",
                minWidth: 76,
                borderRadius: "20px",
                display: "inline-block",
                textAlign: "center",
                py: "5px",
                px: "5px"
              }}
            >
              {row[val]}
            </Box>
          </TableCell>
        );
      case "action":
      case "Action":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Stack direction="row" spacing={1} justifyContent="center">
              {/* Custom delete icon */}
              <img
                // src={DeleteIconImg}
                alt="delete"
                style={{ cursor: "pointer", width: "20px", height: "20px" }}
                onClick={() => onDelete?.(row)}
              />
            </Stack>
          </TableCell>
        );
      case "exchange":
        return (
          <TableCell>
            <Box color={"rgba(181, 182, 185, 1)"} fontWeight={"600"}>
              {row[val]}
            </Box>
          </TableCell>
        )
      // --- Add this case for apiKey with copy icon ---
      case "apiKey":
        return (
          <TableCell>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography color="rgba(183, 183, 187, 1)" fontSize="15px" fontWeight={600}>
                {row[val]}
              </Typography>
              <ContentCopyIcon
                sx={{ cursor: "pointer", fontSize: 16, color: "rgba(181, 182, 185, 0.8)" }}
                onClick={() => {
                  navigator.clipboard.writeText(row[val]);
                  onCopy?.(row[val], row);
                }}
              />
            </Box>
          </TableCell>
        );

      case "added":
        return (
          <TableCell>
            <Box color={"rgba(181, 182, 185, 1)"} fontWeight={"400"}>
              {row[val]}
            </Box>
          </TableCell>
        )

      case "referralDate":
        return (
          <TableCell>
            <Box
              sx={{
                fontWeight: 600,
                color: "neutral.Snowwhite",
                letterSpacing: "0.8px"
              }}>
              {row[val]}
            </Box>

          </TableCell>
        )

      case "commission":
        return (
          <TableCell>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "neutral.Snowwhite"
              }}
            >
              {row[val]}
            </Box>
          </TableCell>
        )
      case "id":
        return (
          <TableCell>
            <Box fontWeight={500} >
              {row[val]}
            </Box>
          </TableCell>
        )

      case "requestDate":
        return (
          <TableCell>
            <Box fontWeight={500} fontSize={"15px"} >
              {row[val]}
            </Box>
          </TableCell>
        )

      case "batchNo":
        return (
          <TableCell>
            <Box fontWeight={500} fontSize={"15px"} >
              {row[val]}
            </Box>
          </TableCell>
        )
      case "currency":
        return (
          <TableCell>
            <Box fontWeight={500} fontSize={"15px"} >
              {row[val]}
            </Box>
          </TableCell>
        )
      case "trend":
        return (
          <TableCell>
            <Box fontWeight={600} color={row[val] === "Neutral" ? "neutral.brightYellow" : "red"}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "TF":
        return (
          <TableCell>
            <Box fontWeight={600} color={"neutral.Snowwhite"} fontSize={"15px"}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "RSI":
        return (
          <TableCell>
            <Box fontWeight={600} fontSize={"15px"}>
              {row[val]}
            </Box>
          </TableCell>
        )
      case "MACD":
        return (
          <TableCell>
            <Box color={row[val].includes("-") ? "neutral.redOrange" : "neutral.brightGreen"} fontWeight={600} fontSize={"15px"}>
              {row[val]}
            </Box>
          </TableCell>
        )
          ;
      default:
        const cellValue = row[val];
        const hasLineBreaks =
          typeof cellValue === "string" && cellValue.includes("\n");
        const align = headerAlignMap[val] || "left";

        return (
          <TableCell align={align}>
            <Typography
              fontSize="13px"
              sx={{ fontWeight: 500, color: "#F1F1F1" }}
            >
              {hasLineBreaks
                ? cellValue.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < cellValue.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))
                : cellValue}
            </Typography>
          </TableCell>
        );
    }
  };

  const paginatedData =
    rowsPerPage > 0
      ? tableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : tableData;
  const skeletonRows =
    rowsPerPage > 0
      ? Math.min(rowsPerPage, 10)
      : Math.min(tableData?.length || 6, 10) || 6;

  return (
    <TableContainer sx={[
      tableStyle,
      tableSx,
      {
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      },
    ]}>
      <Table sx={{ width: tableWidth || "100%" }}>
        <TableHead>
          <TableRow>
            {tableHeader?.map((header) => (
              <TableCell key={header.id} align={header.align || "center"}>
                <Typography
                  fontWeight={600}
                  fontSize="12px"
                  color={headerWhite ? "#111" : "rgba(152, 154, 160, 1)"}
                >
                  {header.label || header.title}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedData?.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                // "&:hover": {
                //   backgroundColor: "rgba(255,255,255,0.05)",
                //   transform: "translateY(-1px)",
                //   boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                // },
              }}
            >
              {columnKeys.map((val) => renderCell(row, val, index))}
            </TableRow>
          ))}

          {!isLoading && (!tableData || tableData.length === 0) && (
            <TableRow>
              <TableCell colSpan={totalColumns || 1} align="center">
                <Box sx={{ py: 6, textAlign: "center" }}>
                  <Typography
                    fontSize="16px"
                    fontWeight="600"
                    color="#444"
                    mb={1}
                  >
                    No records found
                  </Typography>
                  <Typography fontSize="14px" color="#777">
                    Try adjusting your filters or come back later.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* {showPagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          sx={{
            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
              { fontWeight: "500", color: "#666" },
          }}
        />
      )} */}
      <UserWithdraw ref={withdrawDetails} />

    </TableContainer>

  );
}
