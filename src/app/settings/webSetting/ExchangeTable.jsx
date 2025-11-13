import PaginatedTable from "../../../components/dynamicTable";

const ExchangeTable = ({ rows = [], onCopy, onDelete }) => {
  const tableHeader = [
    { id: "exchange", label: "Exchanges", align: "left" },
    { id: "apiKey", label: "API Keys", align: "left" },
    { id: "added", label: "Added", align: "center" },
    { id: "status", label: "Status", align: "center" },
    { id: "action", label: "Action", align: "center" },
  ];

  const displayRows = ["exchange", "apiKey", "added", "status", "action"];

  return (
    <PaginatedTable
      tableHeader={tableHeader}
      tableData={rows}
      displayRows={displayRows}
      isLoading={false}
      showPagination={false}
      onCopy={(value, row) => onCopy?.(value, row)}
      onDelete={(row) => onDelete?.(row)}
    />
  );
};

export default ExchangeTable;
