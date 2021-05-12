import { Button } from "@chakra-ui/button";
import { Wrap, WrapItem  } from "@chakra-ui/layout";
import { Tooltip, useClipboard, useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react";

const Links: React.FC = (): React.ReactElement => {
  const {hasCopied, onCopy} = useClipboard("contact@stevenwebster.co");
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)")
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeDevice(true) : setIsLargeDevice(false)
  }, [isLargerThan930])

  return (
    <Wrap spacing="3">

      {/* Large Screens Email Link */}
      <WrapItem d={isLargeDevice ? "inline-flex" : "none"}>

        <Tooltip 
          placement="bottom" 
          borderRadius="lg" 
          py="1.5" 
          closeDelay={1000} 
          label={hasCopied ? "Copied!" : "Click to Copy!"}
        >

          <Button 
            borderRadius="2xl" 
            h="7" 
            fontSize="sm" 
            onClick={onCopy}
          >
            Email
          </Button>

        </Tooltip>

      </WrapItem>

      {/*  Small Screens Email Link */}
      <WrapItem d={isLargeDevice ? "none" : "inline-flex"}>
        <Button 
          as="a" 
          borderRadius="2xl" 
          h="7" 
          fontSize="sm" 
          href="mailto:contact@stevenwebster.co" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Email
        </Button>
      </WrapItem>

      <WrapItem>
        <Button 
          as="a" 
          borderRadius="2xl" 
          h="7" 
          fontSize="sm" 
          href="https://github.com/budokans" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </WrapItem>

      <WrapItem>
        <Button 
          as="a" 
          borderRadius="2xl" 
          h="7" 
          fontSize="sm" 
          href="https://www.linkedin.com/in/steven-webster-developer/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </WrapItem>

    </Wrap>
  )
}

export default Links;