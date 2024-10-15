import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import { Box, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Box className="scrollContainer">
      <Grid templateAreas={{ base: `"nav" "main"` }} color="whitesmoke">
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main">
          <HomePage />
          <Projects />
          <Contact />
          <About />
        </GridItem>
      </Grid>
    </Box>
  );
}
export default App;
