import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

const WithProviders: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: WithProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
