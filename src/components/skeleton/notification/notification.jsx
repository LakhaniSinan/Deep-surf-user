import { Box, Skeleton } from "@mui/material";

const NotificationSkeleton = ({ rows = 5 }) => {
    return (
        <Box backgroundColor="neutral.darkGrey" p={2.5} mt="15px" borderRadius="10px">
            {/* Title Skeleton */}
            <Skeleton
                variant="text"
                width={250}
                height={40}
                sx={{ mb: 2 }}
            />

            {/* Notification Cards Skeleton */}
            {[...Array(rows)].map((_, index) => (
                <Box
                    key={index}
                    backgroundColor="neutral.richblack"
                    p={2}
                    borderRadius="15px"
                    mt={2}
                >
                    <Skeleton variant="text" width="60%" height={22} />
                    <Skeleton variant="text" width="90%" height={18} />
                    <Skeleton variant="text" width="80%" height={18} />
                </Box>
            ))}
        </Box>
    );
};

export default NotificationSkeleton;
