// import React from "react";
// import { Box, LinearProgress, Typography } from "@mui/material";

// const CustomProgress = ({ longValue, shortValue }) => {
//   return (
//     <Box display="flex" mt="30px" gap={2}>
//       {/* LONG Progress */}
//       <Box position="relative" flex={1}>
//         <LinearProgress
//           variant="determinate"
//           value={longValue}
//           sx={{
//             height: 50,
//             borderRadius: "30px",
//             backgroundColor: "#E0E0E0", // light gray background
//             "& .MuiLinearProgress-bar": {
//               bgcolor: "#0B2015", // dark green
//               borderRadius: "30px",
//             },
//           }}
//         />
//         <Typography
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: `${longValue}%`,
//             transform: "translate(-50%, -50%)",
//             fontSize: "11px",
//             fontWeight: "bold",
//             color: "#00FF00", // green text
//             transition: "left 0.3s ease",
//           }}
//         >
//           {longValue}%
//         </Typography>
//       </Box>

//       {/* SHORT Progress */}
//       <Box position="relative" flex={1}>
//         <LinearProgress
//           variant="determinate"
//           value={shortValue}
//           sx={{
//             height: 50,
//             borderRadius: "30px",
//             backgroundColor: "#E0E0E0",
//             "& .MuiLinearProgress-bar": {
//               bgcolor: "#8B0000", // dark red/maroon
//               borderRadius: "30px",
//             },
//           }}
//         />
//         <Typography
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: `${shortValue}%`,
//             transform: "translate(-50%, -50%)",
//             fontSize: "11px",
//             fontWeight: "bold",
//             color: "#FF6666",
//             transition: "left 0.3s ease",
//           }}
//         >
//           {shortValue}%
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default CustomProgress;
