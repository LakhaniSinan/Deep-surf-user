import { Box, Typography, Skeleton } from "@mui/material";

const AiProofSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161616",
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
        maxWidth: "1449px",
        marginTop: "30px",
      }}
    >
      {/* Pair */}
      <Skeleton
        variant="text"
        width="150px"
        height={20}
        sx={{ marginBottom: "15px" }}
      />

      {/* Price & Change */}
      <Skeleton
        variant="text"
        width="200px"
        height={30}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        variant="text"
        width="80px"
        height={18}
        sx={{ marginBottom: "10px", marginLeft: "5px" }}
      />

      {/* Recommendation Box */}
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        backgroundColor="#1C1C1C"
        padding={2}
        borderRadius="20px"
        mt={2}
      >
        {/* Button Skeleton */}
        <Skeleton
          variant="rectangular"
          width={120}
          height={40}
          sx={{ borderRadius: "20px" }}
        />

        {/* Text Skeleton */}
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="100px" height={20} />
          <Skeleton variant="text" width="80px" height={15} />
        </Box>
      </Box>
    </Box>
  );
};

export default AiProofSkeleton;
