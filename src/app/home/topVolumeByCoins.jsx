// // import { Box, Button, Grid, Typography } from '@mui/material'
// // import React, { useState } from 'react'
// // import VolumeCard from '../../components/volumeCard';

// // const TopVolumeByCoins = ({ data }) => {
// //     console.log("efjeuifgeufgefguefgef", data);

// //     const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

// //     return (
// //         <Box  borderRadius={"10px"}>
// //             <Box display={"flex"} justifyContent={"space-between"}>
// //                 <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
// //                     Top 10 by volume
// //                 </Typography>
// //                 <Box display="flex" gap={1}>
// //                     <Box
// //                         sx={{
// //                             background: "linear-gradient(190deg, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
// //                             borderRadius: "20px",
// //                             px: "3px",
// //                             py: "4px"
// //                         }}
// //                     >

// //                         <Button
// //                             onClick={() => setSelectedTimeframe("24h")}
// //                             sx={{
// //                                 minWidth: "50px",
// //                                 padding: "6px 16px",
// //                                 borderRadius: "20px",
// //                                 textTransform: "none",
// //                                 fontSize: "0.875rem",
// //                                 fontFamily: "Inter Tight",
// //                                 fontWeight: 500,
// //                                 backgroundColor:
// //                                     selectedTimeframe === "24h" ? "rgba(255, 255, 255, 0.08)" : "transparent",
// //                                 color: "text.primary",
// //                                 "&:hover": {
// //                                     backgroundColor:
// //                                         selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
// //                                 },
// //                             }}
// //                         >
// //                             24h
// //                         </Button>
// //                         <Button
// //                             onClick={() => setSelectedTimeframe("7d")}
// //                             sx={{
// //                                 minWidth: "50px",
// //                                 padding: "6px 16px",
// //                                 borderRadius: "20px",
// //                                 textTransform: "none",
// //                                 fontSize: "0.875rem",
// //                                 fontWeight: 500,
// //                                 backgroundColor:
// //                                     selectedTimeframe === "7d" ? "#2a2a2a" : "transparent",
// //                                 color: "text.primary",
// //                                 "&:hover": {
// //                                     backgroundColor:
// //                                         selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
// //                                 },
// //                             }}
// //                         >
// //                             7d
// //                         </Button>
// //                     </Box>
// //                 </Box>
// //             </Box>
// //             <Box mt={2}>
// //                 <Grid container spacing={2}>
// //                     {data?.map((item, index) => (
// //                         <Grid item size={{ xs: 6, sm: 3, md: 2.4 }} key={index}>
// //                             <VolumeCard
// //                                 name={item.symbol}
// //                                 volume={item.volumeFormatted}
// //                                 percentChange={item.change24hFormatted}
// //                                 isPositive={!item?.changeFormatted?.includes("-") ? false : true}
// //                             />
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             </Box>

// //         </Box>
// //     )
// // }
// // export default TopVolumeByCoins
// import { Box, Button, Grid, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import VolumeCard from '../../components/volumeCard';

// const TopVolumeByCoins = ({ data }) => {
//     console.log("rghrugfruigfuriurv" ,  data);

//     const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

//     return (
//         <Box borderRadius={"10px"}>
//             {/* Header with timeframe buttons */}
//             <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
//                 <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
//                     Top 10 by volume
//                 </Typography>
//                 <Box display="flex" gap={1}>
//                     <Box
//                         sx={{
//                             background: "linear-gradient(190deg, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
//                             borderRadius: "20px",
//                             px: "3px",
//                             py: "4px"
//                         }}
//                     >
//                         <Button
//                             onClick={() => setSelectedTimeframe("24h")}
//                             sx={{
//                                 minWidth: "50px",
//                                 padding: "6px 16px",
//                                 borderRadius: "20px",
//                                 textTransform: "none",
//                                 fontSize: "0.875rem",
//                                 fontFamily: "Inter Tight",
//                                 fontWeight: 500,
//                                 backgroundColor:
//                                     selectedTimeframe === "24h" ? "rgba(255, 255, 255, 0.08)" : "transparent",
//                                 color: "text.primary",
//                                 "&:hover": {
//                                     backgroundColor:
//                                         selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
//                                 },
//                             }}
//                         >
//                             24h
//                         </Button>
//                         <Button
//                             onClick={() => setSelectedTimeframe("7d")}
//                             sx={{
//                                 minWidth: "50px",
//                                 padding: "6px 16px",
//                                 borderRadius: "20px",
//                                 textTransform: "none",
//                                 fontSize: "0.875rem",
//                                 fontWeight: 500,
//                                 backgroundColor:
//                                     selectedTimeframe === "7d" ? "rgba(255, 255, 255, 0.08)" : "transparent",
//                                 color: "text.primary",
//                                 "&:hover": {
//                                     backgroundColor:
//                                         selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
//                                 },
//                             }}
//                         >
//                             7d
//                         </Button>
//                     </Box>
//                 </Box>
//             </Box>

//             {/* Grid with VolumeCards */}
//             <Box mt={2}>
//                 <Grid container spacing={2}>
//                     {data?.by24hVolume.map((item, index) => {
//                         // Decide which data to show based on selectedTimeframe
//                         const volume = selectedTimeframe === "24h" ? item.volume24hFormatted : item?.change24hFormatted; // agar 7d volume alag ho to change karo
//                         const percentChange =
//                             selectedTimeframe === "24h" ? item?.change24hFormatted : item?.change7dFormatted;
//                         const isPositive =
//                             selectedTimeframe === "24h"
//                                 ? !item.change24hFormatted?.includes("-")
//                                 : !item?.change7dFormatted?.includes("-");

//                         return (
//                             <Grid item size={{ xs: 6, sm: 3, md: 2.4 }} key={index}>
//                                 <VolumeCard
//                                     name={item.symbol}
//                                     volume={item.volumeFormatted}
//                                     percentChange={item.change24hFormatted}
//                                     isPositive={isPositive}
//                                 />
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Box>
//         </Box>
//     );
// };

// export default TopVolumeByCoins;
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import VolumeCard from '../../components/volumeCard';

const TopVolumeByCoins = ({ data }) => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

    return (
        <Box borderRadius={"10px"}>
            {/* Header with timeframe buttons */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
                <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
                    Top 10 by volume
                </Typography>

                <Box display="flex" gap={1}>
                    <Box
                        sx={{
                            background: "linear-gradient(190deg, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
                            borderRadius: "20px",
                            px: "3px",
                            py: "4px"
                        }}
                    >
                        <Button
                            onClick={() => setSelectedTimeframe("24h")}
                            sx={{
                                minWidth: "50px",
                                padding: "6px 16px",
                                borderRadius: "20px",
                                textTransform: "none",
                                fontSize: "0.875rem",
                                fontFamily: "Inter Tight",
                                fontWeight: 500,
                                backgroundColor:
                                    selectedTimeframe === "24h" ? "rgba(255, 255, 255, 0.08)" : "transparent",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor:
                                        selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
                                },
                            }}
                        >
                            24h
                        </Button>

                        <Button
                            onClick={() => setSelectedTimeframe("7d")}
                            sx={{
                                minWidth: "50px",
                                padding: "6px 16px",
                                borderRadius: "20px",
                                textTransform: "none",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                backgroundColor:
                                    selectedTimeframe === "7d" ? "rgba(255, 255, 255, 0.08)" : "transparent",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor:
                                        selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
                                },
                            }}
                        >
                            7d
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Grid with VolumeCards */}
            <Box mt={2}>
                <Grid container spacing={2}>
                    {(selectedTimeframe === "24h" ? data.by24hVolume : data.by7dVolume)?.map((item, index) => {
                        const volume = selectedTimeframe === "24h" ? item.volumeFormatted : item.volume7dFormatted;
                        const percentChange = selectedTimeframe === "24h" ? item.change24hFormatted : item.change7dFormatted;
                        const isPositive = !percentChange.includes("-"); // true agar +ve, false agar -ve

                        return (
                            <Grid item size={{xs  :12 , sm : 3 , md : 4}}  key={index}>
                                <VolumeCard
                                    name={item.symbol}
                                    volume={volume}
                                    percentChange={percentChange}
                                    isPositive={isPositive}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default TopVolumeByCoins;
 