import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import I_Icon from "../assets/images/star-shape-2.png";
import profileImg from "../assets/images/profile-config.png";
import { Box, Text, Image, HStack, VStack, Flex } from "@chakra-ui/react";
import leetcode from "../assets/images/Screenshot 2024-09-30 193303.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=1500px",
        scrub: 1,
        pin: true,
      },
    });

    timeLine
      .fromTo(
        ".card1",
        { opacity: 0, yPercent: 100, rotationX: 45, z: -100 },
        {
          opacity: 1,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          duration: 2,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".card2",
        { opacity: 0, yPercent: 180, rotationX: 45, z: -100 },
        {
          opacity: 1,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".card3",
        { opacity: 0, yPercent: 260, rotationX: 45, z: -100 },
        {
          opacity: 1,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".card4",
        { opacity: 0, yPercent: 340, rotationX: 45, z: -100 },
        {
          opacity: 1,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <Box className="about" bgColor="white">
      <Box className="container">
        <Text color="#1a202c">Know About me</Text>
        <Box className="blackCard card1">
          <Box>
            <HStack justifyContent="space-between">
              <Text fontSize="10rem">I am</Text>
              <Image src={I_Icon} boxSize="300px" />
            </HStack>
            <Text as="i" fontSize="15rem" fontWeight="bold" pl={10}>
              Likhit{" "}
              <Box
                bgGradient="linear(to-r,#50C878,green)"
                display="inline"
                bgClip="text"
              >
                SB
              </Box>
            </Text>
          </Box>
        </Box>
        <Box className="whiteCard card2" py="110px">
          <VStack fontSize="4rem">
            <Box border="8px solid black" mb={55} borderRadius="10px">
              <Text>
                <Box
                  display="inline"
                  bgGradient="linear(to-r,green,yellow)"
                  bgClip="text"
                >
                  <em style={{ fontWeight: "600" }}>3rd year</em>
                </Box>{" "}
                Engineering student at JSSATEB
              </Text>
            </Box>
            <Box border="8px solid black" mb={55} borderRadius="10px">
              <Text>
                3rd year{" "}
                <Box
                  display="inline"
                  bgGradient="linear(135deg, #6A0DAD, #FFD700)"
                  bgClip="text"
                >
                  <em style={{ fontWeight: "600" }}>Engineering student</em>
                </Box>{" "}
                at JSSATEB
              </Text>
            </Box>
            <Box border="8px solid black" mb={55} borderRadius="10px">
              <Text>
                3rd year Engineering student{" "}
                <Box
                  display="inline"
                  bgGradient="linear(135deg, #DC143C, #F7E7CE)"
                  bgClip="text"
                >
                  <em style={{ fontWeight: "600" }}>at JSSATEB</em>
                </Box>
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box className="blackCard card3">
          <Flex>
            <Box fontWeight="bold" pl={3}>
              <Text fontSize="3.6rem" width="50%">
                I Love
              </Text>
              <Text fontSize="4.6rem">Coding</Text>
              <Text fontSize="5.6rem">and</Text>
              <Text
                as="i"
                fontSize="6.6rem"
                bgGradient="linear(to right, #66d9ef, #f1c40f)"
                bgClip="text"
              >
                Solving{" "}
              </Text>
              <Text fontSize="7.6rem">Problems</Text>
            </Box>
            <Box>
              <Image src={profileImg} boxSize="450px" m={20} />
            </Box>
          </Flex>
        </Box>
        <Box className="whiteCard card4" p={5}>
          <Text fontSize="3rem">
            I'm a{" "}
            <Box
              fontWeight="bold"
              display="inline"
              bgGradient="linear(to-r,green,yellow)"
              bgClip="text"
              fontSize="6rem"
              as="i"
              ml={10}
            >
              Leetcoder!
            </Box>
            <Image
              src={leetcode}
              height="500px"
              width="100%"
              overflow="hidden"
              borderRadius="10px"
            />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
