import { Heading, Stack } from "@chakra-ui/layout";
import Links from "./Links";

export default function Header() {
  return (
    <Stack w={['full', '90%', '80%', '900px']} spacing={5}>
      
      <Heading fontSize={["2xl", "3xl", "40px"]} fontWeight="normal" lineHeight={[1.3, 1.2]}>Steven Webster is a full-stack engineer who cares about elegant, intuitive UIs, SEO and performance. Working remotely from Auckland, New Zealand.</Heading>

      <Links />

    </Stack>
  )
}

