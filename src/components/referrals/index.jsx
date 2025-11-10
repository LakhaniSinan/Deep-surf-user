import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import { formStyles } from "./style";
import CustomInput from "../customInput";

function Referrals() {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h5" component="h1" sx={formStyles.sectionTitle}>
        Referrals
      </Typography>

      {/* Profile Picture Section */}
      <Box sx={formStyles.profileSection}>
        <Avatar
          alt="James Rodriguez"
          src="https://via.placeholder.com/150" // Replace with actual user image URL or an icon
          sx={formStyles.avatar}
        />
        <Stack spacing={1}>
          <Typography variant="body3" sx={{ fontWeight: "bold" }}>
            Total referrals
          </Typography>

          <Typography variant="h1">4</Typography>
        </Stack>
      </Box>

      {/* Email Section */}
      <Box sx={formStyles.inputGroup}>
        <Typography variant="subtitle1" sx={formStyles.inputLabel}>
          Your referral link
        </Typography>
        <Stack direction="row" alignItems="center" gap={15}>
          <CustomInput fullWidth={"90px"} />
          <Box>
            <Typography
              variant="body3"
              sx={{
                fontSize: "10px",
              }}
            >
              Share the link below with your friends{" "}
            </Typography>
             <Typography variant="h5" sx={{color : "#FF6421"}} >
          76913284
        </Typography>
          </Box>
        </Stack>
        <Typography
          variant="body3"
          sx={{
            fontSize: "8px",
          }}
        >
          Share the link below with your friends{" "}
        </Typography>
      </Box>
    </Box>
  );
}

export default Referrals;
