import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"` }}
        bgGradient="linear(to-b, #00CFFF, #00BFFF, #00AFFF)"
        color="whitesmoke"
        height="100vh"
        width="100%"
      >
        <GridItem area="nav" padding={5}>
          <Navbar />
        </GridItem>
        <GridItem area="main">
          <HomePage />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
