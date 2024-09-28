import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      p={5}
      justifyContent="space-between"
      bgColor="#1a202c"
      // backdropFilter="blur(10px)"
      // bgGradient="linear(to-l,#56B3FA, #00BFFF, #C9E4CA)"

      // bgGradient="linear(to-l,#02AEED,#85EBE7,#E3E6DF)"
    >
      <Text ml={8} fontWeight="bold" fontSize={30}>
        LIKHIT S B
      </Text>
      <HStack>
        <Text mr={5}>About</Text>
        <Text mr={5}>Skills</Text>
        <Text mr={5}>Contact</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
