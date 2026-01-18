import { Box, Skeleton, Stack } from "@mui/material";

const SubscriptionSkeleton = () => {
    return (
        <Stack spacing={4}>
            {/* 🔹 Subscription Card Skeleton */}
            <Box
                sx={{
                    position: "relative",
                    borderRadius: "30px",
                    p: 3,
                    maxWidth: 520,
                    height: 200,
                    backgroundColor: "rgba(255,255,255,0.05)",
                }}
            >
                {/* Logo Skeleton */}
                <Skeleton variant="rectangular" width={50} height={30} sx={{ mb: 2 }} />

                {/* Subscription Name */}
                <Skeleton variant="text" width="60%" height={40} sx={{ mb: 1 }} />

                {/* Days remaining */}
                <Skeleton variant="text" width="40%" height={20} sx={{ mb: 2 }} />

                {/* Status Badge */}
                <Skeleton variant="rectangular" width={120} height={38} sx={{ borderRadius: 2 }} />
            </Box>

            {/* 🔹 Billing History Skeleton */}
            <Box
                sx={{
                    backgroundColor: "rgba(22,22,22,0.85)",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    p: 2,
                }}
            >
                {/* Table Header Skeleton */}
                <Skeleton variant="text" width="30%" height={30} sx={{ mb: 2 }} />

                {/* Table Rows Skeleton */}
                {[1, 2, 3, 4].map((i) => (
                    <Box key={i} sx={{ display: "flex", gap: 2, mb: 2 }}>
                        <Skeleton variant="rectangular" width="20%" height={25} />
                        <Skeleton variant="rectangular" width="40%" height={25} />
                        <Skeleton variant="rectangular" width="20%" height={25} />
                        <Skeleton variant="rectangular" width="20%" height={25} />
                    </Box>
                ))}
            </Box>
        </Stack>
    );
};

export default SubscriptionSkeleton;
