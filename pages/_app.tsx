import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "simplebar/dist/simplebar.min.css";
import { ReactElement } from "react";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
