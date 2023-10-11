import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactElement } from "react";
import { setMedia } from "mock-match-media";
import { ChildrenProps } from "types";

export const setDeviceWidth = (width: number): void =>
  setMedia({
    width: `${width}px`,
    type: "screen",
  });

const withProviders = ({ children }: ChildrenProps): ReactElement => (
  <ChakraProvider>{children}</ChakraProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: withProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
