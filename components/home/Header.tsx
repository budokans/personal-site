import { Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Tooltip, useClipboard } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
}

interface Compound {
  Text: React.FC;
  Links: React.FC;
  Link: React.FC<ButtonProps>;
  Tooltip: React.FC<ButtonProps>;
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

Header.Links = ({ children }) => {
  return <Wrap spacing="3">{children}</Wrap>;
};

Header.Link = ({ href, children }) => {
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
      >
        {children}
      </Button>
    </WrapItem>
  );
};

Header.Tooltip = ({ href, children }) => {
  const { hasCopied, onCopy } = useClipboard(href);

  return (
    <Tooltip
      placement="bottom"
      borderRadius="lg"
      py="1.5"
      closeDelay={1000}
      label={hasCopied ? "Copied!" : "Click to Copy!"}
    >
      <Button borderRadius="2xl" h="7" fontSize="sm" onClick={onCopy}>
        {children}
      </Button>
    </Tooltip>
  );
};
