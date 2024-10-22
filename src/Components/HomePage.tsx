import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import profileImg from "../assets/images/lsb-img-5.png";
import { Box, GridItem, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";

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
          scale: 1.3,
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

    mm.add("(max-width:1121.55px) and (min-width:1045px)", () => {
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
            y: 180,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .fromTo(
          nameRef.current,
          {
            y: -280,
            x: -50,
            position: "absolute", // this is what making scaling work and holding the text in the same place
            scale: 9,
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

    mm.add("(max-width:1045px) and (min-width:992px)", () => {
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
            y: 190,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .fromTo(
          nameRef.current,
          {
            y: -300,
            x: -50,
            position: "absolute", // this is what making scaling work and holding the text in the same place
            scale: 7,
            wordSpacing: 10,
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

    mm.add("(max-width:992px) and (min-width:873px)", () => {
      // don't forget to add pixel at the end i.e max-width: 11px
      let timeLine = gsap.timeline();
      timeLine
        .fromTo(
          profileRef.current,
          {
            x: 10,
            y: 850,
            borderRadius: "20px",
          },
          {
            y: 160,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .fromTo(
          nameRef.current,
          {
            y: -580,
            x: 430,
            position: "absolute", // this is what making scaling work and holding the text in the same place
            scale: 6,
          },
          {
            duration: 0.5,
            opacity: 1,
            ease: "power4.inOut",
            color: "whitesomke",
            fontWeight: "bold",
            wordSpacing: 50,
          }
        );
    });

    mm.add("(max-width:872px) and (min-width:421px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -5,
            y: 850,
            borderRadius: "20px",
            height: "220px",
            width: "220px",
          },
          {
            y: 120,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
            scale: 1.2,
          }
        )
        .to(nameRef.current, {
          opacity: 0,
        });
    });

    mm.add("(max-width:420.77px) and (min-width: 375px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: 0,
            y: 850,
            borderRadius: "20px",
            height: "180px",
            width: "180px",
          },
          {
            y: 120,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
            scale: 1.2,
          }
        )
        .to(nameRef.current, {
          opacity: 0,
        });
    });

    mm.add("(max-width:374.77px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: 0,
            y: 850,
            borderRadius: "20px",
            height: "180px",
            width: "180px",
          },
          {
            y: 120,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
            scale: 1.2,
          }
        )
        .to(nameRef.current, {
          opacity: 0,
        });
    });
  }, []);

  const handleMouseEnter = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.add("hovering2");
    ele.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.remove("hovering2");
    ele.style.backgroundColor = "black";
  };

  return (
    <SimpleGrid
      bgColor="black"
      columns={{ base: 1, lg: 2 }}
      className="homePage"
      data-scroll-section
      position="relative"
    >
      <GridItem display="flex" justifyContent="center">
        <Image
          id="profile_img"
          src={profileImg}
          border="none"
          ref={profileRef}
          objectFit="cover"
          pointerEvents="none"
        />
      </GridItem>
      <GridItem>
        <Box
          className="info-text home-text"
          fontWeight="bold"
          opacity="0"
          ref={infoRef}
          display="inline-block"
        >
          <span className="info-text home-5">Hi there, this is</span>
          <br />{" "}
          <Text
            as="i"
            className="info-text home-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            LIKHIT S B
          </Text>
          <br />
          <span className="info-text home-4">I'm a</span>
          <Text as="i" className="info-text home-2">
            FullStack
          </Text>{" "}
          <br />
          <Text
            as="em"
            className="info-text home-3"
            // data-scroll
            // data-scroll-speed="-10"
            // data-scroll-direction="horizontal"
          >
            Web Developer
          </Text>
        </Box>
        <Box className="namastae" ref={nameRef} opacity="0">
          {/*for gsap to work refer elements through div or box, not directly to something like text */}
          <Text as="i">Namastae</Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default HomePage;
