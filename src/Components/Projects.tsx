import {
  Box,
  Flex,
  GridItem,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Box key={10} position="relative" className="projects" data-scroll-section>
      {" "}
      {/*added key attribute to avoid error*/}
      <Flex justifyContent="center" alignItems="center" data-scroll>
        <Text
          className="my-projects"
          as="b"
          fontFamily="sans-serif"
          data-scroll
          data-scroll-speed="5"
        >
          My projects.
        </Text>
      </Flex>
      <hr className="animate-hr" data-scroll data-scroll-offset="18" />
      <SimpleGrid className="project-grid" columns={1} spacing={5}>
        <GridItem key={0}>
          <ProjectCard index={0}>
            <VStack>
              <Text className="cardHeading">
                <Link href="https://game-hub-swart-five.vercel.app/" isExternal>
                  Search your favourite games right away.
                </Link>
              </Text>
              <Text color="gray.300" className="card-desc">
                A simple and responsive platform to find games according to
                genre and platform. I bet you'll never get bored.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={1}>
          <ProjectCard index={1}>
            <VStack>
              <Text className="cardHeading">
                Student data management made simple.
              </Text>
              <Text color="gray.300" className="card-desc">
                Create classrooms and group students with several dynamic
                functionalities along with seperate views for each classrooms.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={2}>
          <ProjectCard index={2}>
            <VStack textAlign="left">
              <Text className="cardHeading">
                <Link href="https://github.com/lsb22/ToDoListApp" isExternal>
                  Too many tasks?, one todolist is the answer
                </Link>
              </Text>
              <Text color="gray.300" className="card-desc">
                Modern and user friendly ToDo list for all your day to day task
                management where you can categorize tasks based on priority and
                their type.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
