import theme from "../../../theme";

export const styles = {
  pageRoot: {
    position: "relative",
    minHeight: "100vh",
    // backgroundColor: theme.palette.background.default,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    m: 0,
    p: 0,
    overflow: "hidden",
    boxSizing: "border-box",
  },

  sectionContainer: {
    backgroundColor: "background.lightGray",
    borderRadius: 3,
    p: 2,
    border: "1px solid rgba(255,255,255,0.08)",
  },

  sectionTitle: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    mb: 1,
  },

  accordionGroup: {
    mt: 1,
  },

  accordionRoot: {
    backgroundColor: "background.gray",
    borderRadius: 2,
    mb: 1,
    border: "1px solid rgba(255,255,255,0.08)",
    "&:before": { display: "none" },
  },

  accordionSummary: {
    px: 2,
    minHeight: 56,
    "& .MuiAccordionSummary-content": {
      my: 1,
    },
  },

  summaryText: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 14,
  },

  expandIcon: {
    color: theme.palette.secondary.main,
    fontSize: 18,
  },

  accordionDetails: {
    px: 2,
    py: 1.5,
  },

  detailsText: {
    color: theme.palette.text.secondary,
    fontSize: 13,
  },
};


