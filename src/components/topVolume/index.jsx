// // SentimentGauge.jsx
// import React from 'react';
// import { Box, Card, Typography } from '@mui/material';
// import { styles } from './styles';

// const VolumeCard = (sentiment) => {
//   // const sentiment = 50;
//   const sentimentLabel = "Neutral";
//   const needleRotation = (sentiment / 100) * 180;
//   const gradientId = "sentimentGradient";
  
//   return (
//     <Box sx={styles.container}>
//       <Card sx={styles.card}>
//         <Box sx={styles.header}>
//           <Typography sx={styles.subtitle}>
//             Overall Sentiment
//           </Typography>
//           <Typography sx={styles.title}>
//             {sentimentLabel}
//           </Typography>
//         </Box>
        
//         <Box sx={styles.gaugeContainer}>
//           <svg width="240" height="140" viewBox="0 0 240 140" style={{ overflow: 'visible' }}>
//             <defs>
//               <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#ef4444" />
//                 <stop offset="50%" stopColor="#eab308" />
//                 <stop offset="100%" stopColor="#22c55e" />
//               </linearGradient>
//             </defs>
            
//             <path
//               d="M 30 120 A 90 90 0 0 1 210 120"
//               fill="none"
//               stroke="#27272a"
//               strokeWidth="20"
//               strokeLinecap="round"
//             />
            
//             <path
//               d="M 30 120 A 90 90 0 0 1 210 120"
//               fill="none"
//               stroke={`url(#${gradientId})`}
//               strokeWidth="20"
//               strokeLinecap="round"
//             />
            
//             <circle
//               cx="120"
//               cy="120"
//               r="12"
//               fill="#18181b"
//               stroke="#3f3f46"
//               strokeWidth="2"
//             />
            
//             <line
//               x1="120"
//               y1="120"
//               x2="120"
//               y2="45"
//               stroke="#e4e4e7"
//               strokeWidth="3"
//               strokeLinecap="round"
//               transform={`rotate(${needleRotation - 90} 120 120)`}
//               style={{ transformOrigin: '120px 120px' }}
//             />
            
//             <circle
//               cx="120"
//               cy="120"
//               r="8"
//               fill="#fafafa"
//             />
//           </svg>
          
//           <Box sx={styles.scoreBox}>
//             <Box sx={styles.scoreBadge}>
//               <Typography sx={styles.scoreText}>
//                 {sentiment}
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default VolumeCard;



