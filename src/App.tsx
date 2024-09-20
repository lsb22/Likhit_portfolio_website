import { Grid, GridItem, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav" bgColor="green.500">
          Navbar
        </GridItem>
        <GridItem area="main" bgColor="skyblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
