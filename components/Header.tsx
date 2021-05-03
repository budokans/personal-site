import { Button } from "@chakra-ui/button";
import { Heading, Stack, Wrap, WrapItem  } from "@chakra-ui/layout";
import { Tooltip, useClipboard, useMediaQuery } from "@chakra-ui/react"

export default function Header() {
  const {hasCopied, onCopy} = useClipboard("contact@stevenwebster.co");
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)")

  return (
    <Stack w={['100%', '90%', '80%', '900px']} spacing="4">
      <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="normal" lineHeight={["1.2", "1.4"]}>Steven Webster is a full-stack engineer who cares about elegant, intuitive UIs, SEO and performance. Working remotely from Auckland, New Zealand.</Heading>

      <Wrap spacing="3">

        <WrapItem d={isLargerThan930 ? "inline-flex" : "none"}>
          <Tooltip placement="bottom" closeDelay={1500} label={hasCopied ? "Copied!" : "Click to Copy!"}>
            <Button borderRadius="2xl" h="9" fontSize="sm" onClick={onCopy}>Email</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem d={isLargerThan930 ? "none" : "inline-flex"}>
          <a href="mailto:contact@stevenwebster.co" className="chakra-button css-16bj6lo" target="_blank" rel="noopener noreferrer">Email</a>
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

