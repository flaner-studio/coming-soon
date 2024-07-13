"use client";

import { useEffect, useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Stack, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
  const [linkText, setLinkText] = useState("walk with us");

  const fontSize = useBreakpointValue({ base: "24px", md: "28px", lg: "36px" });
  const textFontSize = useBreakpointValue({
    base: "22px",
    md: "26px",
    lg: "28px",
  });
  const imageWidth = useBreakpointValue({ base: "50%", md: "60%", lg: "30%" });
  const textSpacing = useBreakpointValue({ base: 4, md: 6 });

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
        justifyContent="center"
        alignItems="center"
        px={4}
        overflow="hidden"
        // mt="-10dvh"
        mb="-5dvh"
      >
        <Stack maxW="100%" alignItems="center" spacing={textSpacing} mb="5dvh">
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
            observing what's around you,
            <br />
            and questioning, pondering, considering the world and your place in
            it."
          </Text>
          <br />

          <Text fontSize={fontSize} textAlign="center" mt="-2dvh">
            flâner.studio coming soon
          </Text>
        </Stack>
      </Flex>

      <Flex justifyContent="center" mb="5dvh">
        <Image src="assets/logo.png" alt="flaner man" w={imageWidth} />
      </Flex>
    </Flex>
  );
};

export default Home;
