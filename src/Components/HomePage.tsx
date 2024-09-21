import { Text, GridItem, Image, SimpleGrid, Box } from "@chakra-ui/react";
import profileImg from "../assets/images/lsb-img-2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HomePage = () => {
  const profileImgRef = useRef(null);
  const infoRef = useRef(null);
  const timeLine = gsap.timeline({ delay: 0.5 });
  useGSAP(() => {
    if (profileImgRef.current) {
      timeLine.fromTo(
        profileImgRef.current,
        {
          x: window.innerWidth / 2 - 160,
          scale: 0,
          borderRadius: "10%",
        },
        {
          opacity: 1,
          scale: 1,
          duration: 4,
          y: 50,
          border: "2px solid",
          borderColor: "white",
        }
      );

      timeLine.to(profileImgRef.current, {
        x: 90,
        borderRadius: "100%",
        duration: 0.7,
        ease: "power1.inOut",
        scale: 1.2,
      });
    }

    if (infoRef.current) {
      timeLine.fromTo(
        infoRef.current,
        {
          x: 390,
        },
        { opacity: 1, x: 0, ease: "power4.inOut" }
      );
    }
  }, []);

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} pb={200}>
      <GridItem>
        <Box /*pl={20} pt={6}*/>
          <Image
            opacity="0"
            id="profile_img"
            ref={profileImgRef}
            src={profileImg}
            border="none"
            height="300px"
            // borderRadius="full"
          />
        </Box>
      </GridItem>
      {/* <Show breakpoint="(min-width: 1050px)"> */}
      <GridItem>
        <Box
          className="info-text"
          ref={infoRef}
          fontWeight="bold"
          fontSize="xx-large"
          /*pt={6}*/
          opacity="0"
        >
          <span className="info-text">Hi there, this is</span>
          <br />{" "}
          <Text as="i" fontSize="90px" className="info-text">
            LIKHIT S B
          </Text>
          <br />
          <span className="info-text">I'm a</span>
          <Text as="i" fontSize="60px" ml={5} className="info-text">
            FullStack
          </Text>{" "}
          <br />
          <Text as="em" pl={40} fontSize="50px" className="info-text">
            Web Developer
          </Text>
        </Box>
      </GridItem>
      {/* </Show> */}
    </SimpleGrid>
  );
};

export default HomePage;
