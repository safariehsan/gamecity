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
    <Card>
      <Image src={getCroppedImg(game.background_image, 600, 400)} />
      <CardBody>
        <Heading fontSize="medium" marginBottom={5}>
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
