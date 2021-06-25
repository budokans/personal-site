import { Button } from "@chakra-ui/button";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Tooltip, useClipboard, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MetadataInterface } from "../interfaces";

interface LinksProps {
  metadata: MetadataInterface;
}

interface ButtonProps {
  href: string;
}

const Links: React.FC<LinksProps> = ({ metadata }) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeDevice(true) : setIsLargeDevice(false);
  }, [isLargerThan930]);

  return (
    <Wrap spacing="3">
      {isLargeDevice ? (
        <LinksTooltip href={metadata.contact.email}>Email</LinksTooltip>
      ) : (
        <LinksButton href={`mailto:${metadata.contact.email}`}>
          Email
        </LinksButton>
      )}

      <LinksButton href={metadata.contact.github}>Github</LinksButton>

      <LinksButton href={metadata.contact.linkedIn}>LinkedIn</LinksButton>
    </Wrap>
  );
};

const LinksButton: React.FC<ButtonProps> = ({ href, children }) => {
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

const LinksTooltip: React.FC<ButtonProps> = ({ href, children }) => {
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

export default Links;
