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
      <Text
        ml={{ lg: 8 }}
        fontWeight="bold"
        className="header"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        LIKHIT S B
      </Text>
      <Text
        className="nav-text"
        mr={{ lg: 8 }}
        fontFamily="Kaushan Script"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Swaagatha Sus-Swaagatha
      </Text>
    </HStack>
  );
};

export default Navbar;
