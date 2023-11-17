import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="purple">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
