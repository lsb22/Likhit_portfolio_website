import { Text, GridItem, Image, SimpleGrid, Show } from "@chakra-ui/react";
import profileImg from "../assets/images/profile_img2.png";

const HomePage = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <GridItem>
        <Image src={profileImg} border="none" />
      </GridItem>
      <Show above="lg">
        <GridItem>
          <Text fontWeight="bold" fontSize="xxx-large">
            Hi there, this is LIKHIT S B<br />
            I'm a FullStack Web Developer
          </Text>
        </GridItem>
      </Show>
    </SimpleGrid>
  );
};

export default HomePage;
