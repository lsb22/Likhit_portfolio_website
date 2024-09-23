import { Box } from "@chakra-ui/react";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <Box
      bgColor="white"
      color="#00BFFF"
      height="600px"
      padding="200px"
      fontSize="xx-large"
      ref={aboutRef}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente veniam
      asperiores molestiae reprehenderit? Accusamus, dolorum. Dolorem optio amet
      quae unde repellat. Tempora, voluptatibus perspiciatis omnis assumenda a
      hic maxime pariatur.
    </Box>
  );
};

export default About;
