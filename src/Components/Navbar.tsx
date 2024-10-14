import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack p={5} justifyContent="space-between" bgColor="black">
      <Text ml={8} fontWeight="bold" fontSize={30} className="header">
        LIKHIT S B
      </Text>
      <HStack>
        <Text mr={5}>About</Text>
        <Text mr={5}>Projects</Text>
        <Text mr={5}>Contact</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
