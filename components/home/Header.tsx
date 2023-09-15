import { ReactElement, useEffect, useState } from "react";
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
import { ChildrenProps, Contact } from "../../types";

interface HeaderLinksProps {
  readonly contacts: readonly Contact[];
}

interface HeaderLinkProps {
  readonly href: string;
}

interface TooltipBtnProps {
  readonly text?: string;
}

export const Header = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Stack
      w={["full", "90%", "80%", "900px"]}
      spacing={[8, 10]}
      mb={["auto", 20]}
    >
      {children}
    </Stack>
  );
};

export const Heading = ({ children }: ChildrenProps): ReactElement => {
  return (
    <ChakraHeading
      fontSize="clamp(24px, calc(14.40px + 2.00vw), 40px)"
      fontWeight="normal"
      lineHeight={1.3}
      as="h1"
    >
      {children}
    </ChakraHeading>
  );
};

export const HeaderContact = ({ children }: ChildrenProps): ReactElement => (
  <Flex direction={["column", "row-reverse"]} gap={["1rem"]}>
    {children}
  </Flex>
);

export const HeaderLocation = ({ children }: ChildrenProps): ReactElement => {
  return (
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
};

export const HeaderLinks = ({ contacts }: HeaderLinksProps): ReactElement => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeViewport, setIsLargeViewport] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeViewport(true) : setIsLargeViewport(false);
  }, [isLargerThan930]);

  return (
    <Wrap spacing="3">
      {contacts.map((contact, idx) => {
        switch (contact.type) {
          case "email":
            return isLargeViewport ? (
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

export const Link = ({
  href,
  children,
}: HeaderLinkProps & ChildrenProps): ReactElement => {
  return (
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
};

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
