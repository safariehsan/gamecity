import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGenre } from "../hooks/useGenre";
import { IPlatform } from "../hooks/usePlatform";
import { IGameQuery } from "../App";

interface Props {
  gameQuery: IGameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;
  return (
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
  );
};

export default GameGrid;
