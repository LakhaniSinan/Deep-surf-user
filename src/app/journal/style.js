import theme from "../../theme";

export const styles = {
  pageRoot: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    m: 0,
    p: 0,
    overflow: "hidden",
    boxSizing: "border-box",
    bgcolor: "background.black",
    maxHeight: "50vh",
  },

  sectionContainer: {
    bgcolor: "background.lightGray",
    borderRadius: 5,
    p: 3,
  },

  formCard: {
    my: 2,
    bgcolor: "background.gray",
    borderRadius: 3,
    // mt: 2,
    p: 0.5,
  },

  formInner: {
    mx: 4,
  },

  formHeader: {
    py: 1,
  },

  saveButton: {
    backgroundColor: "rgba(62, 62, 70, 1)",
    color: "text.secondary",
    textTransform: "none",
    my: 4,
  },

  alertListWrapper: {
    mt: 3,
  },

  alertCard: {
    backgroundColor: "background.gray",
    borderRadius: 3,
    p: 2,
    px: { xs: 2, md: 3 },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  alertTitle: {
    fontWeight: 700,
    color: theme.palette.text.primary,
  },

  alertSubtitle: {
    mt: 0.5,
    color: "#fff",
    fontWeight: 700,
  },

  alertBoldValue: {
    color: "text.primary",
    fontWeight: 700,
  },

  alertTimestamp: {
    mt: 1,
    color: theme.palette.text.secondary,
  },

  editButton: {
    color: "text.secondary",
    borderColor: theme.palette.text.secondary,
    border: 1,
    py: 0.8,
    px: { xs: 6, sm: 9 },
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: "rgba(255,255,255,0.35)",
      backgroundColor: "background.mediumGray",
    },
  },

  deleteButton: {
    backgroundColor: "#EF5350",
    color: "#ffffff",
    py: 0.8,
    px: { xs: 6, sm: 9 },
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": { backgroundColor: "#E53935" },
  },
};
