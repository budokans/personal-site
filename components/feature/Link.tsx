import { Button, Stack, useMediaQuery } from "@chakra-ui/react";

interface LinkProps {
  url: string;
}

interface Compound {
  Link: React.FC<LinkProps>;
}

type LinksCC = React.FC & Compound;

const Container: React.FC = ({ children }) => {
  const [isGreaterThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack
      px={[4, 9]}
      marginBottom={100}
      direction={isGreaterThan768 ? "row" : "column"}
      alignItems={isGreaterThan768 ? "flex-start" : "center"}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export const Links: LinksCC = ({ children }) => {
  return <Container>{children}</Container>;
};

Links.Link = ({ url, children }) => {
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
