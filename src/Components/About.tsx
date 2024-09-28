import { Box, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    <Box
      /*bgColor="white"*/
      // backgroundImage="linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);"
      className="about"
      bgColor="white"
      // pt={10}
    >
      <Box className="container">
        <Text color="#1a202c">Know About me</Text>
        {/* <Box
          className="whiteCard card1"
          style={{ backgroundColor: "seagreen" }}
        >
          
        </Box> */}
        <Box className="blackCard card1">
          <Text>I'm Likhit Sb</Text>
        </Box>
        <Box className="whiteCard card2">
          <Text>3rd year Engineering student at JSSATEB</Text>
        </Box>
        <Box className="blackCard card3">
          <Text>I love coding and solving problems</Text>
        </Box>
        <Box className="whiteCard card4">
          <Text>I'm a Leetcoder!</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
