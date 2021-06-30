import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "simplebar/dist/simplebar.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
