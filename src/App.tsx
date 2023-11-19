import { useState } from "react";
import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { IGenre } from "./hooks/useGenre";
import PlatformDropDown from "./components/PlatformDropDown";
import { IPlatform } from "./hooks/usePlatform";
import SortDropDown from "./components/SortDropDown";

export interface IGameQuery {
  genre: IGenre;
  platform: IPlatform;
  sortBy: string;
  searchTerm: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  const onSearchHandler = (searchTerm: string) => {
    console.log("term: ", searchTerm);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchTerm) => setGameQuery({ ...gameQuery, searchTerm })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            activeGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GridItem margin={10} marginBottom={0}>
          <Flex gap={2}>
            <PlatformDropDown
              activePlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortDropDown
              activeSorting={gameQuery.sortBy}
              onSelectSortOrder={(sortBy) =>
                setGameQuery({ ...gameQuery, sortBy })
              }
            />
          </Flex>
        </GridItem>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
