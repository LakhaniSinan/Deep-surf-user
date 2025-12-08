import { Box } from "@mui/material";
import PerPerietaryImage from "../../../assets/images/proprietaryTech.png";

const ProPerietaryTech = () => {
  return (
    <Box mt={2}>
      <Box
        component="img"
        src={PerPerietaryImage}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "78%",
          },
          display: "block",
          margin: "0 auto",
        }}
      />
    </Box>
  );
};

export default ProPerietaryTech;
