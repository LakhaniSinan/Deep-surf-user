import { Box, Typography } from "@mui/material";

const Notification = () => {

    const data = [
        {
            title: "James",
            email: "james@example.com"
        },
        {
            title: "Emily",
            email: "emily@example.com"
        },
        {
            title: "Oliver",
            email: "oliver@example.com"
        }
    ];

    return (
        <Box backgroundColor="neutral.darkGrey" p={2.5} mt="15px" borderRadius="10px">
            <Typography variant="h4" color="neutral.white" fontSize="25px" mb={1}>
                Notification
            </Typography>
            {
                data.map((item, index) => (
                    <Box key={index}>
                        <Box backgroundColor="neutral.richblack" p={2} borderRadius="15px" mt={2}>
                            <Typography fontWeight={600} fontSize={"18px"}>
                                {item.title}
                            </Typography>
                            <Typography color="neutral.grey">
                                {item.email}
                            </Typography>
                        </Box>

                    </Box>
                ))
            }
        </Box>

    )

}


export default Notification;