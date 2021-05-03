import { Button } from "@chakra-ui/button";
import { Heading, Stack, Wrap, WrapItem  } from "@chakra-ui/layout";
import { Tooltip, useClipboard } from "@chakra-ui/react"

export default function Header() {
  const {hasCopied, onCopy} = useClipboard("contact@stevenwebster.co");

  return (
    <Stack w={['100%', '90%', '80%', '900px']}>
      <Heading fontSize={["2xl", "4xl"]} fontWeight="normal" lineHeight={["1.2", "1.4"]}>Steven Webster is a full-stack engineer who cares about elegant, intuitive UIs, SEO and performance. Working remotely from Auckland, New Zealand.</Heading>

       <Wrap spacing="3" mt={["4", "5"]}>
        <WrapItem>
          <Tooltip placement="bottom" closeDelay={1500} label={hasCopied ? "Copied!" : "Click to Copy!"}>
            <Button borderRadius="2xl" h="9" fontSize="sm" onClick={onCopy}>Email</Button>
          </Tooltip>
        </WrapItem>
        <WrapItem>
          <a className="chakra-button css-16bj6lo" href="https://github.com/budokans" target="_blank" rel="noopener noreferrer">GitHub</a>
        </WrapItem>
        <WrapItem>
          <a className="chakra-button css-16bj6lo" href="https://www.linkedin.com/in/steven-webster-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </WrapItem>
      </Wrap>

    </Stack>
  )
}

