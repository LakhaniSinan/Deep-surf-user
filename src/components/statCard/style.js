export const statCardStyles = {
  card: {
    p: 2,
    bgcolor: "#1f1f1f",
    borderRadius: 5,
    border: "1px solid #2b2b2b",
    height : {xs : "auto" , md : "auto" , lg : "195px"},
  },
  iconWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,

    // borderRadius: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255, 255, 255, 1)",
  },
  subtitle: {
    fontSize: 10,
    color: "neutral.Snowwhite",
    fontWeight: 400,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: "#f5f5f5",
  },
  percentPositive: {
    fontSize: 13,
    color: "#00e676",
    fontWeight: 600,
  },
  percentNegative: {
    fontSize: 13,
    color: "#ff5252",
    fontWeight: 600,
  },
  chart: {
    mt: 2,
    height: 64,
    borderRadius: 7,
    background: "linear-gradient(180deg, rgba(0,230,118,0.15), rgba(0,0,0,0))",
  },
  image: {
    mt: 2,
    width: "100%",
    // height: 64,
    objectFit: "center",
  },
};
