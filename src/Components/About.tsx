import { Box, HStack, Text } from "@chakra-ui/react";

const About = () => {
  const handleMouseEnter = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.add("hovering3");
    ele.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.remove("hovering3");
    ele.style.backgroundColor = "black";
  };

  return (
    <Box
      className="section-about"
      data-scroll-section
      bgColor="black"
      width="100%"
      minHeight="100vh"
      pb={100}
    >
      <Text
        className="about-text"
        color="white"
        data-scroll
        data-scroll-speed="-6"
        data-scroll-direction="horizontal"
      >
        Know
      </Text>
      <Text
        className="about-text"
        data-scroll
        data-scroll-speed="6"
        data-scroll-direction="horizontal"
      >
        About Me
      </Text>
      <hr className="animate-hr" data-scroll data-scroll-offset="18" />
      {/* data-scroll-offset="bottom of viewPort,top of viewPort" */}

      <Box className="about-name" id="name">
        <HStack
          className="t1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
            className="div-1"
            bgColor="white"
            color="black"
            mt="70px"
            data-scroll
            data-scroll-speed="20"
            data-scroll-direction="horizontal"
            data-scroll-target="#name"
            textAlign="center"
          >
            3rd Year Engineering Student At JSSATEB
          </Box>
        </Box>

        <Box className="skewsec">
          <Box
            className="div-2"
            bgColor="white"
            color="black"
            data-scroll
            data-scroll-speed="-20"
            data-scroll-direction="horizontal"
            data-scroll-target="#name"
            textAlign="center"
          >
            I Love coding and I am a cricket lover.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
