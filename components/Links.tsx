import { Button } from "@chakra-ui/button";
import { Wrap, WrapItem  } from "@chakra-ui/layout";
import { Tooltip, useClipboard, useMediaQuery } from "@chakra-ui/react"

export default function Links() {
  const {hasCopied, onCopy} = useClipboard("contact@stevenwebster.co");
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)")

  return (
    <Wrap spacing="3">

      {/* Large Screens Email Link */}
      <WrapItem d={isLargerThan930 ? "inline-flex" : "none"}>
        <Tooltip placement="bottom" borderRadius="lg" py="1.5" closeDelay={1000} label={hasCopied ? "Copied!" : "Click to Copy!"}>
          <Button borderRadius="2xl" h="7" fontSize="sm" onClick={onCopy}>Email</Button>
        </Tooltip>
      </WrapItem>

      {/*  Small Screens Email Link */}
      <WrapItem d={isLargerThan930 ? "none" : "inline-flex"}>
        <a href="mailto:contact@stevenwebster.co" className="css-1infzl" target="_blank" rel="noopener noreferrer">Email</a>
      </WrapItem>

      <WrapItem>
        <a className="css-1infzl" href="https://github.com/budokans" target="_blank" rel="noopener noreferrer">GitHub</a>
      </WrapItem>

      <WrapItem>
        <a className="css-1infzl" href="https://www.linkedin.com/in/steven-webster-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </WrapItem>

    </Wrap>
  )
}