import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGame";

interface IGameCard {
  game: IGame;
}

const GameCard = ({ game }: IGameCard) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="x-large">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
