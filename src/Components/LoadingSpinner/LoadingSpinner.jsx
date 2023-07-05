import { Backdrop, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

const LoadingSpinner = ({ isLoading }) => {
  return (
    <Backdrop open={isLoading} style={{ zIndex: 10 }}>
      <CircularProgress style={{ color: "white" }} />
    </Backdrop>
  );
};

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoadingSpinner;
