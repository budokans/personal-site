import { ReactElement } from "react";
import { Stack } from "@chakra-ui/react";
import { ChildrenProps } from "types";

export const Links = ({ children }: ChildrenProps): ReactElement => (
  <Stack
    px={[4, 9]}
    marginBottom={100}
    direction={["column", "row"]}
    alignItems={["center", "flex-start"]}
    spacing={4}
  >
    {children}
  </Stack>
);
