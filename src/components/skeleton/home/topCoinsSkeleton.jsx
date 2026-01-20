import { Box, Grid, Typography, Skeleton, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const widgetStyle = {
  background: "#151515",
  borderRadius: "16px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const TopCoinsComponentSkeleton = () => {
  return (
    <Grid item size={{ xs: 12, md: 12 }}>
      <Box sx={widgetStyle} p={2}>
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Skeleton variant="text" width={140} height={32} />

          <IconButton
            size="small"
            sx={{
              bgcolor: "neutral.vermilionOrange",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          {/* LEFT COLUMN */}
          <Grid item size={{ xs: 12, md: 6 }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
                mb={1.5}
              >
                {/* LEFT ICON + TEXT */}
                <Box display="flex" gap="10px" alignItems="center" p={1}>
                  <Skeleton variant="circular" width={20} height={20} />
                  <Box>
                    <Skeleton variant="text" width={80} height={16} />
                    <Skeleton variant="text" width={50} height={14} />
                  </Box>
                </Box>

                {/* CENTER GRAPH */}
                <Skeleton variant="rectangular" width={20} height={30} />

                {/* RIGHT PRICE */}
                <Box textAlign="right">
                  <Skeleton variant="text" width={60} height={16} />
                  <Skeleton variant="text" width={45} height={14} />
                </Box>
              </Box>
            ))}
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item size={{ xs: 12, md: 6 }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
                mb={1.5}
                p={1}
              >
                {/* LEFT ICON + TEXT */}
                <Box display="flex" gap="10px" alignItems="center">
                  <Skeleton variant="circular" width={22} height={22} />
                  <Box>
                    <Skeleton variant="text" width={90} height={16} />
                    <Skeleton variant="text" width={55} height={14} />
                  </Box>
                </Box>

                {/* CENTER GRAPH */}
                <Skeleton variant="rectangular" width={20} height={20} />

                {/* RIGHT PRICE */}
                <Box textAlign="right">
                  <Skeleton variant="text" width={60} height={16} />
                  <Skeleton variant="text" width={45} height={14} />
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default TopCoinsComponentSkeleton;
