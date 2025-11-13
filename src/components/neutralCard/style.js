import { Box, Card, Typography, styled } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   minHeight: '100vh',
  backgroundColor: "#000",
  //   padding: '24px'
});

export const StyledCard = styled(Card)({
  backgroundColor: "#1a1a1a",

  borderRadius: "24px",
  //   padding: '32px',
  //   width: '320px',
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
});

export const HeaderBox = styled(Box)({
  textAlign: "center",
  marginTop: "23px",
});

export const SubtitleText = styled(Typography)({
  color: "#9ca3af",
  fontWeight: 500,
  //   marginBottom: '4px',
  fontSize: "0.875rem",
});

export const SentimentTitle = styled(Typography)({
  color: "#FFE600",
  fontWeight: 500,
  fontSize: "2rem",
});

export const GaugeContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ScoreBox = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, 8px)",
});

export const ScoreBadge = styled(Box)({
  //   backgroundColor: '#27272a',
  //   borderRadius: '9999px',
  padding: "12px 24px",
  //   border: '1px solid #3f3f46'
});

export const ScoreText = styled(Typography)({
  color: "white",
  fontWeight: 700,
  fontSize: "2.5rem",
});
