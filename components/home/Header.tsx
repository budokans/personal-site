import { Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Tooltip, useClipboard } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
}

const Header: React.FC = ({ children }) => {
  return (
    <Stack w={["full", "90%", "80%", "900px"]} spacing={5}>
      {children}
    </Stack>
  );
};

const HeaderText: React.FC = ({ children }) => {
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

const HeaderLinks: React.FC = ({ children }) => {
  return <Wrap spacing="3">{children}</Wrap>;
};

const HeaderLinksButton: React.FC<ButtonProps> = ({ href, children }) => {
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

const HeaderLinksTooltip: React.FC<ButtonProps> = ({ href, children }) => {
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

export {
  Header,
  HeaderText,
  HeaderLinks,
  HeaderLinksButton,
  HeaderLinksTooltip,
};
