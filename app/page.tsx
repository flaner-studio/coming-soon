"use client";

import { Link } from "@chakra-ui/next-js";
import { Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [linkText, setLinkText] = useState("walk with us");

  const fontSize = useBreakpointValue({
    base: "24px",
    md: "28px",
    lg: "36px",
    xl: "48px",
  });
  const textFontSize = useBreakpointValue({
    base: "22px",
    md: "26px",
    lg: "28px",
    xl: "32px",
  });
  const imageWidth = useBreakpointValue(
    { base: "50%", md: "40%", lg: "20%", xl: "15%" },
    { fallback: "lg" }
  );
  const textSpacing = useBreakpointValue({ base: 4, md: 2 });

  const handleMouseEnter = () => setLinkText("hi@flaner.studio");
  const handleMouseLeave = () => setLinkText("walk with us");
  const handleTouchStart = () => setLinkText("hi@flaner.studio");
  const handleTouchEnd = () => setLinkText("walk with us");

  return (
    <Flex
      flexDirection="column"
      height="100dvh"
      bgColor="#B89797"
      overflow="hidden"
      pb={5}
    >
      <Flex justifyContent="flex-end" alignItems="flex-start" p={4}>
        <Link
          href="mailto:hi@flaner.studio"
          fontSize={fontSize}
          _hover={{ textDecoration: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            if (linkText === "walk with us") {
              e.preventDefault();
              setLinkText("hi@flaner.studio");
            }
          }}
        >
          {linkText}
        </Link>
      </Flex>

      <Flex
        flex={1}
        justifyContent="space-around"
        alignItems="center"
        px={4}
        overflow="hidden"
        flexDirection="column"
      >
        <Stack
          maxW="100%"
          alignItems="center"
          justifyContent="space-evenly"
          spacing={textSpacing}
        >
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
          </Text>
          <Text
            fontSize={textFontSize}
            p={2}
            textAlign="center"
            textColor="black"
            fontFamily=""
          >
            It's called flâner.
          </Text>
          <Text
            fontSize={textFontSize}
            p={2}
            textAlign="center"
            textColor="black"
            fontFamily=""
          >
            Flâner means "to sort of stroll, but without a destination,
            observing what's around you,
            <br />
            and questioning, pondering, considering the world and your place in
            it."
          </Text>
        </Stack>
        <Text fontSize={fontSize} textAlign="center">
          flâner.studio coming soon
        </Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image src="assets/logo.png" alt="flaner man" w={imageWidth} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
