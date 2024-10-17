import { Box, HStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      data-scroll-section
      bgColor="black"
      width="100%"
      minHeight="100vh"
      border="1px solid blue"
    >
      <Text
        color="white"
        fontSize="210px"
        fontWeight="500"
        data-scroll
        data-scroll-speed="-6"
        data-scroll-direction="horizontal"
      >
        Know
      </Text>
      <Text
        fontSize="210px"
        fontWeight="500"
        data-scroll
        data-scroll-speed="6"
        data-scroll-direction="horizontal"
      >
        About Me
      </Text>
      <hr className="animate-hr" data-scroll data-scroll-offset="18" />
      {/* data-scroll-offset="bottom of viewPort,top of viewPort" */}

      <Box className="about-name" id="name">
        <HStack className="t1">
          <Box data-scroll data-scroll-repeat data-scroll-speed="5" mr={5}>
            I'm
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="2">
            L
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="3">
            I
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="5">
            K
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="4">
            H
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="2">
            I
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="3" mr={5}>
            T
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="5">
            S
          </Box>
          <Box data-scroll data-scroll-repeat data-scroll-speed="4">
            B
          </Box>
        </HStack>
        <Box className="skewsec">
          <Box
            bgColor="white"
            color="black"
            fontSize="3.8rem"
            mt="70px"
            data-scroll
            data-scroll-speed="20"
            data-scroll-direction="horizontal"
            data-scroll-target="#name"
          >
            3rd Year Engineering Student At JSSATEB
          </Box>
        </Box>

        <Box className="skewsec">
          <Box
            bgColor="white"
            color="black"
            fontSize="3.8rem"
            data-scroll
            data-scroll-speed="-20"
            data-scroll-direction="horizontal"
            data-scroll-target="#name"
          >
            3rd Year Engineering Student At JSSATEB
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
