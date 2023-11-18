import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGenre } from "../hooks/useGenre";

interface Props {
  selectedGenre: IGenre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, loading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
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
        spacing={5}
      >
        {loading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
