import { Box, HStack, Link, Text, Tooltip, useToast } from "@chakra-ui/react";

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
        <Text>Thanks for visitng. Wanna build your dream websites?.</Text>
        <Text textAlign="center" mb={5}>
          Connect with me!!!
        </Text>
        <HStack justifyContent="center" spacing={10}>
          <Tooltip label="Click to copy" hasArrow>
            <Link onClick={handleClick}>Email</Link>
          </Tooltip>
          <Link href="https://www.linkedin.com/in/likhitsb156" isExternal>
            LinkedIn
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Conclude;
