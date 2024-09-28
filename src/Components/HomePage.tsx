import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
// import profileImg from "../assets/images/lsb-img-2.png";
import profileImg from "../assets/images/lsb-6.png";

const HomePage = () => {
  const profileRef = useRef(null);
  const infoRef = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width:1122px)", () => {
      // don't forget to add pixel at the end i.e max-width: 11px
      let timeLine = gsap.timeline();
      timeLine
        .fromTo(
          profileRef.current,
          {
            x: "24vw",
            y: "100vh",
          },
          {
            y: 120,
            ease: "power3.in",
            border: "1px solid white",
            borderRadius: "20%",
            duration: 0.7,
            opacity: 1,
          }
        )
        .to(profileRef.current, {
          x: 40,
          ease: "power4.inOut",
          duration: 1,
          borderWidth: "2px",
          borderRadius: "100%",
          scale: 1.2,
        })
        .fromTo(
          infoRef.current,
          {
            x: -350,
            y: 80,
          },
          {
            x: 10,
            y: 60,
            duration: 1,
            ease: "power4.inOut",
            scale: 1.1,
            opacity: 1,
          }
        );
    });

    mm.add("(max-width:1121.55px) and (min-width:992px)", () => {
      // don't forget to add pixel at the end i.e max-width: 11px
      let timeLine = gsap.timeline();
      timeLine
        .fromTo(
          profileRef.current,
          {
            x: 250,
            y: 850,
            borderRadius: "20px",
          },
          {
            y: 160,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
          }
        )
        .fromTo(
          nameRef.current,
          {
            y: -280,
            x: -50,
            position: "absolute", // this is what making scaling work and holding the text in the same place
            scale: 10,
          },
          {
            duration: 0.5,
            opacity: 1,
            ease: "power4.inOut",
            color: "whitesomke",
            fontWeight: "bold",
          }
        );
    });
  }, []);

  return (
    <SimpleGrid
      // height="40%"
      // bgGradient="linear(to-l,#56B3FA, #00BFFF, #C9E4CA)"
      // bgGradient="linear(to-l,#02AEED,#85EBE7,#E3E6DF)"
      bgColor="#1a202c"
      columns={{ base: 1, lg: 2 }}
      className="homePage"
    >
      <GridItem display="flex" justifyContent="center">
        <Image
          // opacity="0"
          id="profile_img"
          src={profileImg}
          border="none"
          height="300px"
          ref={profileRef}
          objectFit="cover"
        />
      </GridItem>
      <GridItem>
        <Box
          className="info-text"
          fontWeight="bold"
          fontSize="xx-large"
          opacity="0"
          ref={infoRef}
          display="inline-block"
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
          <Text
            as="em"
            pl={40}
            fontSize="50px"
            className="info-text"
            // bgGradient="linear(to-r,#F5DEB3,#4CAF50)"
            // bgGradient="linear(to-l, #34A8FF, #00CFFF, #FFD700)"
            // color="#1a202c"
          >
            Web Developer
          </Text>
        </Box>
        <Box ref={nameRef} opacity="0">
          {/*for gsap to work refer elements through div or box, not directly to something like text */}
          <Text as="i">Namastae</Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default HomePage;
