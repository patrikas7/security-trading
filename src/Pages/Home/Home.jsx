import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, TextField, Box } from "@mui/material";
import styles from "./_Home.module.scss";
import StockPrice from "./StockPrice/StockPrice";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import AutoCloseSnackbar from "../../Components/AutoCloseSnackbar/AutoCloseSnackbar";
import theme from "./HomeTheme";
import useDebounceHandler from "../../Hooks/useDebounceHandler";
import axios from "../../API/AxiosInstance";
import ChipGroup from "../../Components/ChipGroup/ChipGroup";
import TradingSection from "./TradingSection/TradingSection";

import {
  ENDPOINT_RESPONSE_KEY,
  ENDPOINT_RESPONSE_PRICE_KEY,
  TRADE_TYPES,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "./HomeContstants";

const Home = () => {
  const [security, setSecurity] = useState("");
  const [shares, setShares] = useState("");
  const [price, setPrice] = useState(null);
  const [tradeType, setTradeType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarState, setSnackbarState] = useState({
    isOpen: false,
    message: "",
  });
  const debouncedSecurity = useDebounceHandler(security);

  useEffect(() => {
    if (!debouncedSecurity) return;

    const fetchStock = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/query?function=GLOBAL_QUOTE&symbol=${debouncedSecurity}&apikey=${process.env.REACT_APP_API_KEY}`
        );

        const globalQuotePrice =
          data[ENDPOINT_RESPONSE_KEY][ENDPOINT_RESPONSE_PRICE_KEY];

        setPrice(globalQuotePrice || null);
      } catch (error) {
        setSnackbarState({
          isOpen: true,
          message: ERROR_MESSAGE,
          severity: "error",
        });
      }

      setIsLoading(false);
    };

    fetchStock();
  }, [debouncedSecurity]);

  const handleOnBuy = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSnackbarState({ isOpen: true, message: SUCCESS_MESSAGE });
    }, 2000);
  };

  const handleOnSecurityChange = (e) => {
    setPrice(null);
    setSecurity(e.target.value.toUpperCase());
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.homePage} padding={3}>
        <LoadingSpinner isLoading={isLoading} />
        <AutoCloseSnackbar
          onClose={() => setSnackbarState({ isOpen: false, message: "" })}
          {...snackBarState}
        />
        <Typography variant="h4" color="white">
          Stock Order
        </Typography>
        <Box marginTop={12}>
          <TextField
            label="Security"
            variant="outlined"
            fullWidth
            value={security}
            onChange={handleOnSecurityChange}
          />
          <Box marginTop={2} className={styles.sharesAndChipsContainer}>
            <TextField
              label="Shares"
              variant="outlined"
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
            />
            <ChipGroup chips={TRADE_TYPES} onSelect={setTradeType} />
          </Box>
          {price && (
            <>
              <StockPrice security={debouncedSecurity} price={price} />
              {shares && (
                <TradingSection
                  shares={shares}
                  price={price}
                  security={debouncedSecurity}
                  tradeType={tradeType}
                  handleOnBuy={handleOnBuy}
                />
              )}
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
