import { ReactNode, useEffect, useState } from "react";
import taskImg from "../assets/images/task_assignment_app2.webp";
import chattingImg from "../assets/images/anonymous_chatting_app.webp";
import drawingImg from "../assets/images/drawing_app.webp";
import { Box, Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  index: number;
  children: ReactNode;
}

const images = [drawingImg, chattingImg, taskImg];

const ProjectCard = ({ index, children }: Props) => {
  const img = images[index];
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Box className="project-card">
      <Card
        backgroundColor="#0e0d0d"
        color="white"
        // borderRadius={{ sm: 10, xl: 14 }}
        borderColor="white"
        borderStyle="solid"
        // borderWidth={{ sm: 2, xl: 4 }}
        overflow="hidden"
        direction={
          width > 502 ? (index % 2 == 0 ? "row" : "row-reverse") : "column"
        }
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
