import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ChildrenProps } from "types";

interface LinkProps {
  readonly url: string;
}

export const ButtonLink = ({
  url,
  children,
}: LinkProps & ChildrenProps): ReactElement => (
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

export const TextLink = ({
  url,
  children,
}: LinkProps & ChildrenProps): ReactElement => (
  <a
    href={url}
    rel="noreferrer noopener"
    target="_blank"
    style={{ fontWeight: 600 }}
  >
    {children}
  </a>
);
