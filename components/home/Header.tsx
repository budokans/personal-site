import { useEffect, useState } from "react";
import { Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Tooltip, useClipboard, useMediaQuery } from "@chakra-ui/react";
import { ContactInterface } from "../../interfaces";

interface ButtonProps {
  href: string;
}

interface LinksProps {
  contacts: ContactInterface[];
}

interface Compound {
  Text: React.FC;
  Links: React.FC<LinksProps>;
}

type HeaderCC = React.FC & Compound;

export const Header: HeaderCC = ({ children }) => {
  return (
    <Stack w={["full", "90%", "80%", "900px"]} spacing={5}>
      {children}
    </Stack>
  );
};

Header.Text = ({ children }) => {
  return (
    <Heading
      fontSize="clamp(24px, calc(14.40px + 2.00vw), 40px)"
      fontWeight="normal"
      lineHeight={1.3}
    >
      {children}
    </Heading>
  );
};

Header.Links = ({ contacts }) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeViewport, setIsLargeViewport] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeViewport(true) : setIsLargeViewport(false);
  }, [isLargerThan930]);

  return (
    <Wrap spacing="3">
      {contacts.map((contact, idx) => {
        if (isLargeViewport && contact.type === "Email") {
          return (
            <TooltipBtn href={contact.value} key={-1}>
              {contact.type}
            </TooltipBtn>
          );
        } else {
          return (
            <Link
              href={
                contact.type === "Email"
                  ? `mailto:${contact.value}`
                  : contact.value
              }
              key={idx}
            >
              {contact.type}
            </Link>
          );
        }
      })}
    </Wrap>
  );
};

export const Link: React.FC<ButtonProps> = ({ href, children }) => {
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

export const TooltipBtn: React.FC<ButtonProps> = ({ href, children }) => {
  const { hasCopied, onCopy } = useClipboard(href);

  return (
    <WrapItem>
      <Tooltip
        placement="bottom"
        borderRadius="lg"
        py="1.5"
        closeDelay={1000}
        label={hasCopied ? "Copied!" : "Click to Copy!"}
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
