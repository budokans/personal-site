import { Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";

interface LinkProps {
  readonly url: string;
}

const Container = ({ children }: ChildrenProps): ReactElement => {
  const [isGreaterThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack
      px={[4, 9]}
      marginBottom={100}
      direction={isGreaterThan768 ? "row" : "column"}
      alignItems={isGreaterThan768 ? "flex-start" : "center"}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export const Links = ({ children }: ChildrenProps): ReactElement => {
  return <Container>{children}</Container>;
};

export const Link = ({
  url,
  children,
}: LinkProps & ChildrenProps): ReactElement => {
  return (
    <Button
      as="a"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      fontSize="sm"
      h={10}
      px={8}
      borderRadius="xl"
      width={48}
    >
      {children}
    </Button>
  );
};
