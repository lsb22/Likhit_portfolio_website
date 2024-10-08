import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import gamehub from "../assets/images/gameHub.png";
import studentapp from "../assets/images/studentManagement.png";
import todo from "../assets/images/todoList.avif";
import { ReactNode } from "react";

interface Props {
  index: number;
  children: ReactNode;
}

const images = [gamehub, studentapp, todo];

const ProjectCard = ({ index, children }: Props) => {
  const img = images[index];

  return (
    <Card
      backgroundColor="#0e0d0d"
      color="white"
      border="2px solid white"
      borderRadius="10px"
      overflow="hidden"
      direction={index % 2 == 0 ? "row" : "row-reverse"}
      // textAlign="left"
      mb={20}
    >
      {/* <CardHeader>
        <Text as="b" fontSize="xl">
          {title}
        </Text>
      </CardHeader> */}
      <Box>
        <Image
          src={img}
          width="600px"
          height="600px"
          objectFit="cover"
          mt={-1}
        />
      </Box>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ProjectCard;
