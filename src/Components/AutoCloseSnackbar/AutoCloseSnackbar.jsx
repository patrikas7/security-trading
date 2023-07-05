import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

const AutoCloseSnackbar = ({
  isOpen,
  onClose,
  message,
  duration = 3000,
  severity = "success",
}) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

AutoCloseSnackbar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  severity: PropTypes.string,
};

export default AutoCloseSnackbar;
