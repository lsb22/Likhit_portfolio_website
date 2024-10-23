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
    <Box className="project-card">
      <Card
        backgroundColor="#0e0d0d"
        color="white"
        borderRadius={{ sm: 10, xl: 14 }}
        borderColor="white"
        borderStyle="solid"
        borderWidth={{ sm: 2, xl: 4 }}
        overflow="hidden"
        direction={index % 2 == 0 ? "row" : "row-reverse"}
      >
        <Box>
          <Image className="card-img" src={img} objectFit="cover" mt={-1} />
        </Box>
        <CardBody className="project-card-body">{children}</CardBody>
      </Card>
    </Box>
  );
};

export default ProjectCard;
