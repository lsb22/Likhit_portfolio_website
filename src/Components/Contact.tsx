import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import email from "../assets/images/email-img-1.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Contact = () => {
  useGSAP(() => {
    const card = document.querySelector(".emailCard");

    card?.addEventListener("mouseenter", () => {
      gsap.to(".email-slider", {
        x: 629,
        border: "2px solid black",
        color: "black",
        duration: 0.7,
      });
    });

    card?.addEventListener("mouseleave", () => {
      gsap.to(".email-slider", {
        x: 0,
        y: 0,
        duration: 0.7,
      });
    });
  }, []);

  return (
    <Box className="contact" backgroundColor="black">
      <Flex as="b" fontSize="70px" fontStyle="600" justifyContent="center">
        Contact me
      </Flex>
      <SimpleGrid columns={2} spacing={10} p={30}>
        <GridItem>
          <Card
            className="emailCard"
            backgroundColor="black"
            border="2px solid white"
            borderRadius="10px"
            position="relative"
          >
            <Flex justifyContent="center">
              <Image src={email} width="300px" height="300px" />
            </Flex>
            <Box
              className="email-slider"
              position="absolute"
              // opacity="0"
              borderRadius="10px"
              height="300px"
              width="580px"
              backgroundColor="white"
              left="-630"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize="50px"
                fontWeight="600"
                bgGradient="linear(to-r,black 0%,gray 100%)"
                bgClip="text"
              >
                likith15600@gmail.com
              </Text>
            </Box>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            className="contactCard"
            backgroundColor="black"
            border="2px solid white"
            borderRadius="10px"
            py="56px"
          >
            <Flex justifyContent="center">
              <Link
                href="www.linkedin.com/in/likhitsb156"
                _hover={{ textDecoration: "none" }}
              >
                {/* <Image src={linkedin} width="300px" height="300px" />
                 */}
                <Text fontSize="125px" fontWeight="600">
                  Linked{" "}
                  <Box display="inline" bgColor="blue.600" bgClip="text">
                    in
                  </Box>
                </Text>
              </Link>
            </Flex>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;