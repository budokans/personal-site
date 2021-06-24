import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { FeatureContextProvider } from "../lib/featureContext";
import "simplebar/dist/simplebar.min.css";
import "../style/image.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FeatureContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </FeatureContextProvider>
  );
};

export default App;
