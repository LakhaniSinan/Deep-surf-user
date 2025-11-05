import { useTheme } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const AppLoader = ({ isVisible }) => {
  const theme = useTheme();
  if (!isVisible) return null;

  return (
    <div style={styles.backdrop}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color={theme.palette.primary.main}
        strokeColor={theme.palette.primary.main}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

export default AppLoader;
