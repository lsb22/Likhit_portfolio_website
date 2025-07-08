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
                Collaborative whiteboard to show your creativity.
              </Text>
              <Text color="gray.300" className="card-desc">
                A simple collaborative whiteboard to draw shapes and images with
                ease.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={1}>
          <ProjectCard index={1}>
            <VStack>
              <Text className="cardHeading">
                <Link href="https://github.com/lsb22/CampusConnect" isExternal>
                  Chat anonymously without any concern.
                </Link>
              </Text>
              <Text color="gray.300" className="card-desc">
                An anonymous chatting app that lets you chat with people without
                revealing your identity.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
        <GridItem key={2}>
          <ProjectCard index={2}>
            <VStack textAlign="left">
              <Text className="cardHeading">
                <Link
                  href="https://github.com/lsb22/cs_tech_project"
                  isExternal
                >
                  Too many tasks? Not a problem anymore
                </Link>
              </Text>
              <Text color="gray.300" className="card-desc">
                Modern and user friendly automated task assignment app for all
                your day to day task management.
              </Text>
            </VStack>
          </ProjectCard>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
