import { Grid, GridItem } from "@chakra-ui/react";

export function App() {
  return (
    <Grid
      h="100vh"
      gridTemplateColumns={"80px 1fr 668px"}
      gridTemplateRows={"80px 1fr 160px"}
      gridTemplateAreas={`
      'sidebar appbar appbar' 
      'sidebar main main' 
      'sidebar footer footer'
      `}
    >
      <GridItem bg="green" area="sidebar"></GridItem>
      <GridItem bg="violet" area="appbar"></GridItem>
      <GridItem bg="blue" area="main"></GridItem>
      <GridItem bg="yellow" area="footer"></GridItem>
    </Grid>
  );
}
