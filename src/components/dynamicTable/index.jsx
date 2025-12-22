import {
  Box,
  IconButton,
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
import UserWithdraw from "../../app/settings/refferals/withdrawDetails";
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

  const renderCell = (row, val, index) => {
    console.log("rrrrrrrrrrrr", row);

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

      // case "userid":
      //   return (
      //     <TableCell>
      //       <Box
      //         sx={{
      //           fontWeight: 600
      //         }}
      //       >
      //         {row[val]}
      //       </Box>
      //     </TableCell>
      //   )

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

      case "status":
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
                    : "inherit",
                minWidth: 96,
              }}
            >
              {row.status}
            </Box>
          </TableCell>
        );


      case "action":
      case "Action":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <IconButton
              size="small"
              sx={{
                color: "neutral.Snowwhite",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "neutral.Snowwhite",
                },
              }}
              onClick={() => {
                if (onView) {
                  onView(row);
                } else {
                  console.log("View row:", row);
                }
              }}
            >
              <VisibilityIcon onClick={() => withdrawDetails.current?.openDialog({ type: "add", id: row.id, data: row })} fontSize="small" width="24px" height="24px" />
            </IconButton>
          </TableCell>
        );

      case "status":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Box
              sx={{
                borderRadius: "100%",
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
      // case "requestDate":
      //   return (
      //     <TableCell>
      //       <Box sx={{
      //         fontWeight: 600,
      //       }}>
      //       </Box>
      //       {row.requestDate}
      //     </TableCell>
      //   )

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
