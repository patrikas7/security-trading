import { Box, Button } from "@mui/material";
import TradingAmmount from "../TradingAmmount/TradingAmmount";
import styles from "../_Home.module.scss";
import PropTypes from "prop-types";

const TradingSection = ({
  shares,
  price,
  security,
  tradeType,
  handleOnBuy,
}) => {
  return (
    <Box className={styles.tradingAmmountContainer}>
      <TradingAmmount shares={shares} price={price} security={security} />
      {tradeType && (
        <Box
          display="flex"
          justifyContent="flex-end"
          marginTop={8}
          className={styles.buttonContainer}
        >
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleOnBuy}
          >
            Buy
          </Button>
        </Box>
      )}
    </Box>
  );
};

TradingSection.propTypes = {
  shares: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  security: PropTypes.string.isRequired,
  tradeType: PropTypes.string.isRequired,
  handleOnBuy: PropTypes.func,
};

export default TradingSection;
