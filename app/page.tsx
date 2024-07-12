"use client";

import { useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Stack, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
  const [linkText, setLinkText] = useState("walk with us");

  const fontSize = useBreakpointValue({ base: "18px", md: "24px", lg: "32px" });
  const textFontSize = useBreakpointValue({
    base: "16px",
    md: "20px",
    lg: "28px",
  });
  const imageWidth = useBreakpointValue({ base: "60%", md: "70%", lg: "80%" });
  const stackMarginTop = useBreakpointValue({
    base: "-2vh",
    md: "-3vh",
    lg: "-5vh",
  });

  const imageMarginLeft = useBreakpointValue({
    base: "5vh",
    md: "3vh",
    lg: "4vh",
  });

  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      bgColor="#B89797"
      overflow="hidden"
    >
      <Flex justifyContent="flex-end" alignItems="flex-start" p={4}>
        <Link
          href="mailto:hi@flaner.studio"
          fontSize={fontSize}
          _hover={{ textDecoration: "none" }}
          onMouseEnter={() => setLinkText("hi@flaner.studio")}
          onMouseLeave={() => setLinkText("walk with us")}
        >
          {linkText}
        </Link>
      </Flex>

      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        px={4}
        overflow="hidden"
      >
        <Stack maxW="100%" alignItems="center" spacing={6}>
          <Text
            fontSize={textFontSize}
            p={2}
            textAlign="center"
            textColor="black"
            fontFamily=""
          >
            French people walk everywhere, and they enjoy it.
            <br />
            There is a word for this in French.
            <br />
            <br />
            It's called flâner.
            <br />
            <br />
            Flâner means "to sort of stroll, but without a destination,
            observing what's around you, and questioning, pondering, considering
            the world and your place in it."
          </Text>

          <Text fontSize={fontSize} textAlign="center">
            flâner.studio coming soon
          </Text>
        </Stack>
      </Flex>

      <Flex justifyContent="center" mb={8}>
        <Image src="assets/logo.png" alt="flaner man" w={imageWidth} />
      </Flex>
    </Flex>
  );
};

export default Home;
