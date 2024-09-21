import { Box, Image, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import profileImg from "../assets/images/lsb-img-2.png";

const HomePage = () => {
  const profileRef = useRef(null);
  const infoRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    gsap.set(profileRef.current, {
      // to set initial positions for the elements
      xPercent: -50,
      yPercent: -50,
      x: "50vw",
      y: "50vh",
    });

    gsap.set(infoRef.current, {
      xPercent: -50,
      yPercent: -50,
      x: "45vw",
      y: "35vh",
    });

    mm.add(
      "(min-width:1053px)",
      () => {
        if (!profileRef.current || !infoRef.current) return;
        let timeLine = gsap.timeline();

        timeLine
          .fromTo(
            profileRef.current,
            {
              y: "100vh",
              borderRadius: "20%",
            },
            {
              y: "35vh",
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
            }
          )
          .to(profileRef.current, {
            xPercent: -150,
            border: "2px solid white",
            borderRadius: "100%",
            duration: 1,
            scale: 1.2,
            ease: "power2.out",
          });

        timeLine.fromTo(
          infoRef.current,
          {
            x: "25vw",
            // y: "vh",
          },
          {
            x: "45vw",
            y: "35vh",
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",
          }
        );
        return () => timeLine.kill();
      },
      { invalidateOnRefresh: true }
    );

    mm.add(
      "(max-width:1053px)",
      () => {
        if (!profileRef.current || !infoRef.current) return;
        let timeLine = gsap.timeline();
        timeLine.fromTo(
          profileRef.current,
          {
            borderRadius: "20%",
          },
          {
            y: "35vh",
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
          }
        );

        return () => timeLine.kill();
      },
      { invalidateOnRefresh: true }
    );
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Box pb={200}>
      {/* <GridItem> */}
      <Box display="inline-block">
        <Image
          opacity="0"
          id="profile_img"
          src={profileImg}
          border="none"
          height="300px"
          ref={profileRef}
        />
      </Box>
      {/* </GridItem> */}
      {/* <GridItem> */}
      <Box
        className="info-text"
        fontWeight="bold"
        fontSize="xx-large"
        /*pt={6}*/
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
        <Text as="em" pl={40} fontSize="50px" className="info-text">
          Web Developer
        </Text>
      </Box>
      {/* </GridItem> */}
    </Box>
  );
};

export default HomePage;
