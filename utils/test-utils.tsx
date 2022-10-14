import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";

const withProviders = ({ children }: ChildrenProps): ReactElement => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: withProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
