import {
  Box,
  Card,
  Flex,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import email from "../assets/images/email-img-1.jpg";

const Contact = () => {
  const toast = useToast();

  const handleClick = () => {
    navigator.clipboard
      .writeText("likith15600@gmail.com")
      .then(() =>
        toast({
          title: "Copied to clipboard!",
          description: "You have copied likith15600@gmail.com",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      )
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "An error occured while copying",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

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
    <Box className="contact" backgroundColor="black" data-scroll-section>
      <Flex
        as="b"
        fontStyle="600"
        justifyContent="center"
        className="contact-text"
      >
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Contact me
        </Box>
      </Flex>
      <SimpleGrid
        className="contact-grid"
        columns={{ md: 1, lg: 2 }}
        spacing={10}
      >
        <GridItem>
          <Tooltip label="click to copy email" hasArrow>
            <Card
              className="emailCard "
              backgroundColor="black"
              border="2px solid white"
              borderRadius="10px"
              position="relative"
              onClick={handleClick}
            >
              <Flex
                justifyContent="center"
                _hover={{
                  boxShadow: "0 0 30px",
                  cursor: "pointer",
                }}
              >
                <Image className="contact-1" src={email} />
              </Flex>
            </Card>
          </Tooltip>
        </GridItem>
        <GridItem>
          <Card
            className="contactCard"
            backgroundColor="black"
            border="2px solid white"
            borderRadius="10px"
            py="56px"
            _hover={{
              boxShadow: "0 0 30px",
              cursor: "pointer",
            }}
          >
            <Flex justifyContent="center">
              <Link
                href="https://www.linkedin.com/in/likhitsb156"
                _hover={{ textDecoration: "none" }}
              >
                <Text className="contact-2" fontWeight="600">
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
