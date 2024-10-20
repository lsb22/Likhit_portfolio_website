import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  const handleMouseEnter = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.add("hovering");
    ele.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    const ele: HTMLDivElement = document.querySelector(".cursor-outline")!;
    ele.classList.remove("hovering");
    ele.style.backgroundColor = "black";
  };

  return (
    <HStack
      p={5}
      justifyContent="space-between"
      bgColor="black"
      data-scroll-section
    >
      {/* <Box className=""> */}
      <Text
        ml={8}
        fontWeight="bold"
        fontSize={30}
        className="header"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        LIKHIT S B
      </Text>
      {/* </Box> */}
      <HStack>
        <Text
          mr={5}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
        </Text>
        <Text
          mr={5}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Projects
        </Text>
        <Text
          mr={5}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact
        </Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
