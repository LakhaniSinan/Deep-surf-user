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
import React, { useMemo, useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

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
      backgroundColor: "transparent",
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
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "14px 16px",
      fontWeight: 600,
      textTransform: "uppercase",
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
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "16px",
      color: "#E3E3E3",
      textAlign: "left",
    },
    "& .MuiTablePagination-toolbar": {
      minHeight: "60px",
      // backgroundColor: "#fafafa",
      borderTop: "1px solid #eee",
    },
  };

  const renderCell = (row, val, index) => {
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
                color: "#1976d2",
                fontWeight: "600",
              }}
            >
              {index + 1}
            </Box>
          </TableCell>
        );

      case "status":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 0.75,
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                backgroundColor: (row[val] || "")
                  .toString()
                  .toLowerCase()
                  .includes("success")
                  ? "rgba(92, 184, 92, 0.14)"
                  : "rgba(255,255,255,0.08)",
                color: (row[val] || "")
                  .toString()
                  .toLowerCase()
                  .includes("success")
                  ? "#5CB85C"
                  : "#E3E3E3",
                minWidth: 96,
                textTransform: "capitalize",
              }}
            >
              {row.status}
            </Box>
          </TableCell>
        );

      case "trend_pro":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Typography color={"background.yellow"}>{row.trend}</Typography>
          </TableCell>
        );

      case "status_pro":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            <Typography color={"background.green"}>{row.Status}</Typography>
          </TableCell>
        );

      case "apiKey":
        return (
          <TableCell align={headerAlignMap[val] || "left"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "#F1F1F1", wordBreak: "break-all" }}
              >
                {row[val]}
              </Typography>
              {onCopy && (
                <IconButton
                  size="small"
                  sx={{ color: "#B4B4B4" }}
                  onClick={() => onCopy(row[val], row)}
                >
                  <ContentCopyRoundedIcon fontSize="inherit" />
                </IconButton>
              )}
            </Box>
          </TableCell>
        );

      case "action":
        return (
          <TableCell align={headerAlignMap[val] || "center"}>
            {onDelete && (
              <IconButton
                size="small"
                sx={{ color: "#B4B4B4", "&:hover": { color: "#FF6B6B" } }}
                onClick={() => onDelete(row)}
              >
                <DeleteOutlineRoundedIcon fontSize="inherit" />
              </IconButton>
            )}
          </TableCell>
        );

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
    <TableContainer sx={[tableStyle, tableSx]}>
      <Table sx={{ width: tableWidth || "100%" }}>
        <TableHead>
          <TableRow>
            {tableHeader?.map((header) => (
              <TableCell key={header.id} align={header.align || "center"}>
                <Typography
                  fontWeight={600}
                  fontSize="12px"
                  color={headerWhite ? "#111" : "#EAEAEA"}
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
              hover
              sx={{
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                },
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

      {showPagination && (
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
      )}
    </TableContainer>
  );
}
