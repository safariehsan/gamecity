import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";

interface IGameCard {
  game: IGame;
}

const GameCard = ({ game }: IGameCard) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="x-large" marginBottom={5}>
          {game.name}
        </Heading>
        <PlatformIconList platforms={game.platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
