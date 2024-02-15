import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "simplebar-react/dist/simplebar.min.css";
import { ReactElement } from "react";
import { Analytics } from "@vercel/analytics/react";
import { theme } from "styles/theme";

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    <Analytics />
  </>
);

export default App;
