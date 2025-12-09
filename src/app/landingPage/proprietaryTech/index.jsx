import { Box } from "@mui/material";
import PerPerietaryImage from "../../../assets/images/proprietaryTech.png";

const ProPerietaryTech = () => {
  return (
    <Box
      mt={2}
      data-aos="zoom-in-up"
      overflow={"hidden"}
      data-aos-duration="600"
      data-aos-delay="600"
    >
      <Box
        component="img"
        src={PerPerietaryImage}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "100%",
          },
          display: "block",
          margin: "0 auto",
        }}
        alt="Proprietary Technology"
      />
    </Box>
  )
};

export default ProPerietaryTech;
