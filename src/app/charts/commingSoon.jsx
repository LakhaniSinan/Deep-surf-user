// import * as React from "react";
// import { Box, Typography, Container, Button, Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // 🔹 import useNavigate

// export default function ComingSoon() {
//     const navigate = useNavigate(); // 🔹 initialize navigate

//     return (
//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background:
//                     "radial-gradient(circle at top, rgba(124,124,255,0.18), transparent 45%), #0b0f1a",
//             }}
//         >
//             <Container maxWidth="sm">
//                 <Box
//                     sx={{
//                         p: { xs: 4, md: 6 },
//                         borderRadius: 4,
//                         textAlign: "center",
//                         backgroundColor: "#11162a",
//                         boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
//                     }}
//                 >
//                     <Typography
//                         variant="h3"
//                         fontWeight={700}
//                         gutterBottom
//                         sx={{ color: "#fff" }}
//                     >
//                         Coming Soon
//                     </Typography>

//                     <Typography
//                         variant="body1"
//                         sx={{ color: "rgba(255,255,255,0.7)", mb: 4 }}
//                     >
//                         We are working hard to launch something amazing.
//                         <br />
//                         Stay tuned for updates 🚀
//                     </Typography>

//                     <Stack direction="row" spacing={2} justifyContent="center">
//                         {/* <Button
//                             variant="contained"
//                             size="large"
//                             sx={{
//                                 px: 4,
//                                 py: 1.2,
//                                 borderRadius: 3,
//                                 backgroundColor: "#7c7cff",
//                                 color: "#fff",
//                                 ":hover": { backgroundColor: "#6a6af0" },
//                             }}
//                         >
//                             Notify Me
//                         </Button> */}
//                         <Button
//                             variant="outlined"
//                             size="large"
//                             sx={{
//                                 px: 4,
//                                 py: 1.2,
//                                 borderRadius: 3,
//                                 borderColor: "rgba(255,255,255,0.3)",
//                                 color: "#fff",
//                                 ":hover": {
//                                     borderColor: "#7c7cff",
//                                     backgroundColor: "rgba(124,124,255,0.08)",
//                                 },
//                             }}
//                             onClick={() => navigate(-1)} // 🔹 Go back to previous page
//                         // agar kisi specific route par jana ho to use: navigate("/dashboard")
//                         >
//                             Go Back
//                         </Button>
//                     </Stack>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }
