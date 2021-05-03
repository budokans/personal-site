import { Button } from "@chakra-ui/button";
import { Heading, Link, Stack, Wrap, WrapItem  } from "@chakra-ui/layout";

export default function Header() {
  return (
    <Stack w={['100%', '90%', '80%', '900px']}>
      <Heading fontSize={["2xl", "4xl"]} fontWeight="normal" lineHeight={["1.2", "1.4"]}>Steven Webster is a full-stack engineer who cares about elegant, intuitive UIs, SEO and performance. Working remotely from Auckland, New Zealand.</Heading>

       <Wrap spacing="3" mt={["4", "5"]}>
        <WrapItem>
          <Button borderRadius="2xl" h="9" fontSize="sm">Email</Button>
        </WrapItem>
        <WrapItem>
          <a className="chakra-button css-16bj6lo" href="https://github.com/budokans" target="_blank" rel="noopener noreferrer">GitHub</a>
        </WrapItem>
        <WrapItem>
          <a className="chakra-button css-16bj6lo" href="https://www.linkedin.com/in/steven-webster-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </WrapItem>
        <WrapItem>
          
        </WrapItem>
      </Wrap>

    </Stack>
  )
}

