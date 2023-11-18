import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { IGame } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/image-url";

interface IGameCard {
  game: IGame;
}

const GameCard = ({ game }: IGameCard) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImg(game.background_image)} />
      <CardBody>
        <Heading fontSize="x-large" marginBottom={5}>
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
