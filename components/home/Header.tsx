import { ReactElement } from "react";
import {
  Heading as ChakraHeading,
  Stack,
  Wrap,
  WrapItem,
  Button,
  Tooltip,
  useClipboard,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { ChildrenProps, ContactMethod } from "types";

export const Header = ({ children }: ChildrenProps): ReactElement => (
  <Stack
    w={["full", "90%", "80%", "900px"]}
    spacing={[8, 10]}
    mb={["auto", 20]}
    as="header"
  >
    {children}
  </Stack>
);

export const Heading = ({ children }: ChildrenProps): ReactElement => (
  <ChakraHeading
    fontSize="clamp(24px, calc(14.40px + 2.00vw), 40px)"
    fontWeight="normal"
    lineHeight={1.3}
    as="h1"
  >
    {children}
  </ChakraHeading>
);

export const Contact = ({ children }: ChildrenProps): ReactElement => (
  <Flex direction={["column", "row-reverse"]} gap={["1rem"]}>
    {children}
  </Flex>
);

export const Location = ({ children }: ChildrenProps): ReactElement => (
  <ChakraHeading
    fontSize="17px"
    fontWeight="normal"
    lineHeight={1.3}
    as="h2"
    ml={[null, "auto"]}
  >
    {children}
  </ChakraHeading>
);

interface LinksProps {
  readonly contacts: readonly ContactMethod[];
}

export const Links = ({ contacts }: LinksProps): ReactElement => {
  const [is930OrWider] = useMediaQuery("(min-width: 930px)");

  return (
    <Wrap spacing="3">
      {contacts.map((contact, idx) => {
        switch (contact.type) {
          case "email":
            return is930OrWider ? (
              <TooltipBtn text={contact.address} key={-1}>
                Email
              </TooltipBtn>
            ) : (
              <Link href={contact.url} key={idx}>
                Email
              </Link>
            );
          case "website":
            return (
              <Link href={contact.url} key={idx}>
                {contact.name}
              </Link>
            );
        }
      })}
    </Wrap>
  );
};

interface LinkProps {
  readonly href: string;
}

export const Link = ({
  href,
  children,
}: LinkProps & ChildrenProps): ReactElement => (
  <WrapItem>
    <Button
      as="a"
      borderRadius="2xl"
      h="7"
      fontSize="sm"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={href}
    >
      {children}
    </Button>
  </WrapItem>
);

interface TooltipBtnProps {
  readonly text?: string;
}

export const TooltipBtn = ({
  text,
  children,
}: TooltipBtnProps & ChildrenProps): ReactElement => {
  const { hasCopied, onCopy } = useClipboard(text ?? "");

  return (
    <WrapItem>
      <Tooltip
        placement="bottom"
        borderRadius="lg"
        py="1.5"
        closeDelay={1000}
        label={hasCopied ? "Copied!" : "Click to copy!"}
        aria-label="Copy email"
      >
        <Button
          borderRadius="2xl"
          h="7"
          fontSize="sm"
          onClick={onCopy}
          data-testid="Tooltip"
        >
          {children}
        </Button>
      </Tooltip>
    </WrapItem>
  );
};
