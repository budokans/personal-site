import { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import { FeatureContextProvider } from "../lib/featureContext";

const App = ({Component, pageProps}: AppProps): React.ReactNode => {
  return (
    <FeatureContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </FeatureContextProvider>
  )
}

export default App;