import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import profileImg from "../assets/images/lsb-img-5.png";
import { Box, GridItem, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";

const HomePage = () => {
  const profileRef = useRef(null);
  const infoRef = useRef(null);

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
          boxShadow: "0 0 5px white, 0 0 10px white, 0 0 15px gray",
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

    mm.add("(max-width:1121.55px) and (min-width:1034px)", () => {
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
            y: 100,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .to(profileRef.current, {
          x: 30,
          ease: "power4.inOut",
          duration: 1,
          borderWidth: "2px",
          borderRadius: "100%",
          width: "300px",
          height: "300px",
        })
        .fromTo(
          infoRef.current,
          {
            x: -350,
            y: 80,
          },
          {
            x: -50,
            y: 60,
            duration: 1,
            ease: "power4.inOut",
            scale: 0.9,
            opacity: 1,
          }
        );
    });

    mm.add("(max-width:1033.77px) and (min-width:992px)", () => {
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
            y: 120,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .to(profileRef.current, {
          x: 10,
          ease: "power4.inOut",
          duration: 1,
          borderWidth: "2px",
          borderRadius: "100%",
          width: "250px",
          height: "250px",
        })
        .fromTo(
          infoRef.current,
          {
            x: -350,
            y: 60,
          },
          {
            x: -100,
            y: 60,
            duration: 1,
            ease: "power4.inOut",
            scale: 0.8,
            opacity: 1,
            width: "600px",
          }
        );
    });

    mm.add("(max-width:991.77px) and (min-width:873px)", () => {
      let timeLine = gsap.timeline();
      timeLine
        .fromTo(
          profileRef.current,
          {
            x: -20,
            y: 850,
            borderRadius: "20px",
          },
          {
            y: 60,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .to(infoRef.current, {
          opacity: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        });
    });

    mm.add("(max-width:872px) and (min-width:719px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -10,
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
        .to(infoRef.current, {
          opacity: 1,
          x: -7,
          y: 60,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        });
    });

    mm.add("(max-width:718.77px) and (min-width: 640px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -20,
            y: 850,
            borderRadius: "20px",
            height: "200px",
            width: "200px",
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
        .to(infoRef.current, {
          opacity: 1,
          x: -15,
          y: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        });
    });

    mm.add("(max-width:639.77px) and (min-width:506px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -10,
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
        .to(infoRef.current, {
          opacity: 1,
          x: 0,
          y: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        });
    });

    mm.add("(max-width:505.77px) and (min-width:424px)", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -10,
            y: 850,
            borderRadius: "20px",
            height: "200px",
            width: "200px",
          },
          {
            y: 90,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .to(infoRef.current, {
          opacity: 1,
          x: 0,
          y: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        });
    });

    mm.add("(max-width:423.77px) ", () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          profileRef.current,
          {
            x: -4,
            y: 850,
            borderRadius: "20px",
            height: "200px",
            width: "200px",
          },
          {
            y: 90,
            duration: 1,
            ease: "power4.inOut",
            borderRadius: "100%",
            border: "2px solid white",
            boxShadow: "0 0 5px white, 0 0 10px coral, 0 0 15px white",
          }
        )
        .to(infoRef.current, {
          opacity: 1,
          x: 0,
          y: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          scale: 0.92,
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
        >
          <span className="info-text home-5">Hi there, this is</span>
          <Show above="lg">
            <br />{" "}
          </Show>
          <Text
            as="i"
            className="info-text home-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            LIKHIT S B
          </Text>
          <Show above="lg">
            <br />
          </Show>
          <span className="info-text home-4">I'm a</span>
          <Text as="i" className="info-text home-2">
            FullStack
          </Text>{" "}
          <Show above="lg">
            <br />
          </Show>
          <Text as="em" className="info-text home-3">
            Web Developer
          </Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default HomePage;
