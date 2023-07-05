import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Text = styled(Typography)(
  ({
    fontSize = 16,
    fontWeight = "normal",
    variant = "body1",
    color = "white",
  }) => ({
    fontSize,
    fontWeight,
    color,
    variant,
  })
);

export default Text;
