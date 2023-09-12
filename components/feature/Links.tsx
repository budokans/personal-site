import { Button, Stack } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";

interface LinkProps {
  readonly url: string;
}

const Container = ({ children }: ChildrenProps): ReactElement => {
  return (
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

export const TextLink = ({
  url,
  children,
}: LinkProps & ChildrenProps): ReactElement => (
  <a
    href={url}
    rel="noreferrer noopener"
    target="_blank"
    style={{ fontWeight: 500 }}
  >
    {children}
  </a>
);
