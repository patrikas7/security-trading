import PropTypes from "prop-types";
import styles from "./_StockPrice.module.scss";
import Text from "../../../Components/Typography/Text";
import Stack from "@mui/material/Stack";

const StockPrice = ({ security, price }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={styles.stockPriceContainer}
      padding={2}
      marginY={2}
    >
      <div>
        <Text fontWeight="bold" fontSize={32} noWrap>
          {security}
        </Text>
      </div>
      <div>
        <Text fontWeight="bold" fontSize={32}>
          ${price}
        </Text>
      </div>
    </Stack>
  );
};

StockPrice.propTypes = {
  security: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default StockPrice;
