import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        fontSize: "clamp(14px, 11.6px + 0.5vw, 18px)",
        lineHeight: 1.6,
      },
      "#__next": {
        height: "100%",
      },
      li: {
        paddingBottom: "0.35rem",
      },
    },
  },
});
