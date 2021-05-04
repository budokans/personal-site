import { Heading, Stack } from "@chakra-ui/layout";
import Links from "./Links";

export default function Header() {
  return (
    <Stack w={['100%', '90%', '80%', '900px']} spacing="4">
      
      <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="normal" lineHeight={["1.2", "1.4"]}>Steven Webster is a full-stack engineer who cares about elegant, intuitive UIs, SEO and performance. Working remotely from Auckland, New Zealand.</Heading>

      <Links />

    </Stack>
  )
}

