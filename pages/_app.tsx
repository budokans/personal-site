import { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";

const App = ({Component, pageProps}: AppProps): React.ReactNode => {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default App;