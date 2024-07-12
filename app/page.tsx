"use client";

import { useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Stack, Box, Text, Image } from "@chakra-ui/react";

const Home = () => {
  const [linkText, setLinkText] = useState("walk with us");

  return (
    <>
      <Flex
        justifyContent="flex-end" // This will push the Link to the right
        alignItems="flex-start"
        maxW="100%"
        bgColor="#B89797"
      >
        <Link
          href="mailto:hi@flaner.studio"
          fontSize="32"
          mr="3vh"
          _hover={{ textDecoration: "none" }}
          onMouseEnter={() => setLinkText("hi@flaner.studio")}
          onMouseLeave={() => setLinkText("walk with us")}
        >
          {linkText}
        </Link>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        maxW="100%"
        bgColor="#B89797"
      >
        <Stack maxW="100%" alignItems="center" mt="-5vh">
          <Text
            fontSize="28"
            p={2}
            alignItems={"center"}
            textAlign="center"
            textColor={"black"}
            fontFamily={""}
          >
            French people walk everywhere, and they enjoy it.
            <br />
            There is a word for this in French.
            <br />
            <br />
            It’s called flâner.
            <br />
            <br />
            Flâner means “to sort of stroll, but without a destination,
            observing what’s
            <br />
            around you, and questioning, pondering, considering the world and
            your place in it.”
            <br /> <br /> <br />
            <Text fontSize="32">flâner.studio coming soon</Text>
          </Text>

          <Box boxSize="sm" mt="4vh" ml="3vh">
            <Image src="assets/logo.png" alt="flaner man" w="80%" />
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Home;
