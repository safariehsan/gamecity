import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { IGameResponse } from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 4,
        }}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
