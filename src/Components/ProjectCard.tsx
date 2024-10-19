import { ReactNode } from "react";
import todo from "../assets/images/todoList.avif";
import gamehub from "../assets/images/gameHub.png";
import { Box, Card, CardBody, Image } from "@chakra-ui/react";
import studentapp from "../assets/images/studentManagement.png";

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
      mb={20}
    >
      <Box>
        <Image className="card-img" src={img} objectFit="cover" mt={-1} />
      </Box>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ProjectCard;
