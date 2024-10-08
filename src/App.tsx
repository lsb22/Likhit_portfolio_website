import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"` }}
        // bgGradient="linear(to-b, #00CFFF, #00BFFF, #00AFFF)" // don't delete
        // bgGradient="linear(to-l, #00CFFF, #00BFFF, #F5DEB3)" // ----||----
        // bgGradient="linear(to-l,#56B3FA, #00BFFF, #C9E4CA)"
        color="whitesmoke"
      >
        <GridItem
          area="nav"
          // position="sticky"
          // top="0"
          // backdropFilter="blur(100px)"
          // zIndex="1000"
        >
          <Navbar />
        </GridItem>
        <GridItem area="main">
          <HomePage />
          <Projects />
          <About />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
