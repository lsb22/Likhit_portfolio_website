import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav" padding={5}>
          <Navbar />
        </GridItem>
        <GridItem area="main" bgColor="skyblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
