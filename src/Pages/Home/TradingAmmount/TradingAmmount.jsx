import Text from "../../../Components/Typography/Text";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const TradingAmmount = ({ shares, price, security }) => {
  const getPrice = () => (price * shares).toFixed(2);

  return (
    <Box padding={1}>
      <Text color="grey">Estimated trading amount:</Text>
      <Text
        marginTop={1}
      >{`Buy ${shares}x$${price} ${security} ≈ $${getPrice()}`}</Text>
    </Box>
  );
};

TradingAmmount.propTypes = {
  shares: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  security: PropTypes.string.isRequired,
};

export default TradingAmmount;
