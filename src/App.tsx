import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import { useEffect } from "react";
import Conclude from "./Components/Conclude";

function App() {
  const { scrollRef, locomotiveScroll } = useLocomotiveScroll();

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.update();
    }
  }, [locomotiveScroll]);

  return (
    <Box className="scrollContainer" data-scroll-container ref={scrollRef}>
      <Grid templateAreas={{ base: `"nav" "main"` }} color="whitesmoke">
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main">
          <HomePage />
          <Projects />
          <Contact />
          <About />
          <Conclude />
        </GridItem>
      </Grid>
    </Box>
  );
}
export default App;
