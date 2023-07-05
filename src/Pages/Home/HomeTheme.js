import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "grey",
          },
          "& .MuiInputBase-input": {
            color: "grey",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
            "&:hover fieldset": {
              borderColor: "grey",
            },
            "&.Mui-focused fieldset": {
              borderColor: "grey",
            },
          },
        },
      },
    },
  },
});
