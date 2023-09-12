import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: "clamp(14px, 11.6px + 0.5vw, 18px)",
        lineHeight: 1.6,
      },
      li: {
        paddingBottom: "0.35rem",
      },
    },
  },
});
