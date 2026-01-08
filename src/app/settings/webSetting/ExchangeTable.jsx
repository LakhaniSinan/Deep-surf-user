import PaginatedTable from "../../../components/dynamicTable";
import { useTranslation } from "react-i18next";
const ExchangeTable = ({ rows = [], onCopy, onDelete }) => {
  const { t } = useTranslation();

  const tableHeader = [
    { id: "exchange", label: (t("setting.Exchanges")), align: "left" },
    { id: "apiKey", label: (t("setting.aPIkeys")), align: "left" },
    { id: "added", label: (t("setting.added")), align: "center" },
    { id: "status", label: (t("setting.status")), align: "center" },
    { id: "Action", label: (t("setting.action")), align: "center" },
  ];

  const displayRows = ["exchange", "apiKey", "added", "status", "Action"];

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
