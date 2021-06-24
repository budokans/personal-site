import { Heading, Stack } from "@chakra-ui/layout";
import { MetadataInterface } from "../interfaces";
import Links from "./Links";

interface HeaderProps {
  metadata: MetadataInterface;
}

const Header: React.FC<HeaderProps> = ({ metadata }) => {
  return (
    <Stack w={["full", "90%", "80%", "900px"]} spacing={5}>
      <Heading
        fontSize="clamp(24px, calc(14.40px + 2.00vw), 40px)"
        fontWeight="normal"
        lineHeight={1.3}
      >
        {metadata.description}
      </Heading>

      <Links metadata={metadata} />
    </Stack>
  );
};

export default Header;
