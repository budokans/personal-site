import { Heading, Stack } from "@chakra-ui/layout";
import { MetadataInterface } from "../interfaces";
import Links from "./Links";

interface HeaderProps {
  metadata: MetadataInterface;
}

const Header: React.FC<HeaderProps> = ({ metadata, children }) => {
  return (
    <Stack w={["full", "90%", "80%", "900px"]} spacing={5}>
      {children}

      <Links metadata={metadata} />
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

export { Header, HeaderText };
