import {
  Badge,
  Box,
  HStack,
  Link,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

const Conclude = () => {
  const toast = useToast();
  const handleClick = () => {
    navigator.clipboard
      .writeText("likith15600@gmail.com")
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "You have copied likith15600@gmail.com",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "An error occured while copying",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      data-scroll-section
      bgColor="#0e0d0d"
      color="white"
      className="end-section"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Text>
          Thanks for{" "}
          <Box display="inline" color="pink">
            visitng.
          </Box>{" "}
          Wanna build your{" "}
          <Box display="inline" color="blue.200">
            dream
          </Box>{" "}
          websites?.
        </Text>
        <Text textAlign="center" mb={5}>
          Connect with{" "}
          <Box display="inline" color="lightcoral">
            me!
          </Box>
        </Text>
        <HStack justifyContent="center" spacing={10}>
          <Tooltip label="Click to copy" hasArrow>
            <Link onClick={handleClick}>
              <Badge colorScheme="green">
                <Box className="conclude-badge">Email</Box>
              </Badge>
            </Link>
          </Tooltip>
          <Link href="https://www.linkedin.com/in/likhitsb156" isExternal>
            <Badge colorScheme="teal">
              <Box className="conclude-badge">LinkedIn</Box>
            </Badge>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Conclude;
