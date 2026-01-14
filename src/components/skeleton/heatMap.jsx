import { Box, Grid, Skeleton, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";

const HeatMapSkeleton = () => {
  return (
    <Box
      backgroundColor={"#161616"}
      mt={"40px"}
      p={"25px"}
      borderRadius={"25px"}
    >
      {/* Title */}
      <Skeleton
        variant="text"
        width={200}
        height={25}
        sx={{ bgcolor: "#333" }}
      />
      <Skeleton
        variant="text"
        width={"80%"}
        height={20}
        sx={{ bgcolor: "#333", mt: 1 }}
      />

      {/* Buttons */}
      <Box
        display={"flex"}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        gap={"15px"}
        marginTop={"40px"}
      >
        {[1, 2, 3].map((i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={150}
            height={40}
            sx={{ bgcolor: "#333", borderRadius: "12px", flex: 1 }}
          />
        ))}
      </Box>

      {/* Subtitle */}
      <Box mt={"20px"}>
        <Skeleton
          variant="text"
          width={180}
          height={20}
          sx={{ bgcolor: "#333" }}
        />
      </Box>

      {/* Cards Skeleton */}
      <Grid container spacing={2} marginTop={"20px"}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 1.2 }}
            key={index}
            sx={{ flexBasis: "20%" }}
          >
            <Skeleton
              variant="rectangular"
              height={80}
              sx={{ bgcolor: "#333", borderRadius: "12px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeatMapSkeleton;
