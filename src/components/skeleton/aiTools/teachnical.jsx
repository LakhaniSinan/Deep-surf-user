import { Box, Typography, Grid, Skeleton } from "@mui/material";

const TechnicalIndicatorSkeleton = () => {
  return (
    <>
      {/* Technical Indicators Heading */}
      <Skeleton variant="text" width={200} height={30} sx={{ mt: 2 }} />

      {/* Technical Indicators Cards */}
      <Box sx={{ p: 1, borderRadius: 1, mt: 1 }}>
        <Grid container spacing={1}>
          {[...Array(6)].map((_, index) => (
            <Grid key={index} item xs="auto" size={{ xs: 12, sm: 1.8 }}>
              <Box
                sx={{
                  px: 1,
                  py: 2,
                  minWidth: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00000000",
                  borderRadius: 4,
                  border: "1px solid #FFFFFF",
                  marginTop: "10px",
                }}
              >
                <Skeleton variant="text" width={40} height={15} sx={{ mr: 0.5 }} />
                <Skeleton variant="text" width={50} height={15} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Community Sentiment Heading */}
      <Skeleton variant="text" width={150} height={25} sx={{ mt: 3 }} />

      {/* Long & Short Progress Bars */}
      <Box display="flex" gap={2} mt={3}>
        {[...Array(2)].map((_, index) => (
          <Box key={index} width="100%" position="relative">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={50}
              sx={{ borderRadius: "30px" }}
            />
            <Skeleton
              variant="text"
              width={30}
              height={15}
              sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
          </Box>
        ))}
      </Box>

      {/* Support & Resistance Levels */}
      <Box sx={{ p: 2, borderRadius: 2, mt: 3 }}>
        <Grid container spacing={2}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  borderRadius: 4,
                  p: 2,
                }}
              >
                <Skeleton variant="text" width={80} height={20} />
                <Skeleton variant="text" width={60} height={20} sx={{ mt: 1 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TechnicalIndicatorSkeleton;
