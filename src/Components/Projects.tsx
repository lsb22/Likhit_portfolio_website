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
    <Box
      key={10}
      // border="1px solid blue"
      position="relative"
      className="projects"
    >
      {" "}
      {/*added key attribute to avoid error*/}
      <Flex
        justifyContent="center"
        alignItems="center"
        // pt={30}
      >
        <Text as="b" fontFamily="sans-serif" fontSize="100px">
          My projects.
        </Text>
      </Flex>
      <SimpleGrid
        // className="projects"
        // columns={{ base: 1, md: 2, lg: 3 }}
        columns={1}
        spacing={5}
        padding={{ lg: 10 }}
      >
        <GridItem key={0}>
          <ProjectCard index={0}>
            <VStack>
              <Text fontSize="50px" fontWeight="600" pt="130px">
                <Link href="https://game-hub-swart-five.vercel.app/" isExternal>
                  Search your favourite games right away.
                </Link>
              </Text>
              <Text fontSize="25px" color="gray.300">
                A simple and responsive platform to find games according to
                genre and platform. I bet you'll never get bored.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={1}>
          <ProjectCard index={1}>
            <VStack>
              <Text fontSize="50px" fontWeight="600" pt="130px">
                Student data management made simple.
              </Text>
              <Text fontSize="25px" color="gray.300">
                Create classrooms and group students with several dynamic
                functionalities along with seperate views for each classrooms.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={2}>
          <ProjectCard index={2}>
            <VStack textAlign="left">
              <Text fontSize="50px" fontWeight="600" pt="130px">
                <Link href="https://github.com/lsb22/ToDoListApp" isExternal>
                  Too many tasks?, one todolist is the answer
                </Link>
              </Text>
              <Text fontSize="25px" color="gray.300">
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
