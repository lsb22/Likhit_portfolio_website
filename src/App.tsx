import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
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
