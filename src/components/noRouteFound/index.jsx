import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, ArrowBack } from "@mui/icons-material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "rgba(255, 107, 26, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "rgba(255, 140, 66, 0.08)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          textAlign: "center",
          zIndex: 1,
          px: 3,
        }}
      >
        {/* 404 Text */}
        <Typography
          sx={{
            fontSize: { xs: "120px", sm: "180px", md: "220px" },
            fontWeight: "bold",
            background: "linear-gradient(135deg, #FF6B1A 0%, #FFA726 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 0.9,
            mb: 2,
            letterSpacing: "-8px",
            textShadow: "0 0 80px rgba(255, 107, 26, 0.3)",
          }}
        >
          404
        </Typography>

        {/* Error Message */}
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
            fontWeight: 600,
            color: "white",
            mb: 2,
            letterSpacing: "-1px",
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "rgba(255, 255, 255, 0.6)",
            mb: 5,
            maxWidth: "500px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<Home />}
            onClick={() => navigate("/")}
            sx={{
              background: "linear-gradient(135deg, #FF6B1A 0%, #FFA726 100%)",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 8px 24px rgba(255, 107, 26, 0.4)",
              transition: "all 0.3s",
              "&:hover": {
                background: "linear-gradient(135deg, #FF8C42 0%, #FFB84D 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 32px rgba(255, 107, 26, 0.5)",
              },
            }}
          >
            Go Home
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
            sx={{
              borderColor: "rgba(255, 107, 26, 0.5)",
              color: "#FF6B1A",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#FF6B1A",
                background: "rgba(255, 107, 26, 0.1)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Go Back
          </Button>
        </Box>

        {/* Additional Info */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.4)",
            mt: 6,
          }}
        >
          Error Code: 404 | Page Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;