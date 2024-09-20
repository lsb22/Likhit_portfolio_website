import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Text ml={8} fontWeight="bold" fontSize={22}>
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
