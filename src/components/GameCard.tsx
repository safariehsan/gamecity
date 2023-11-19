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
    <Card variant="filled">
      <Image src={getCroppedImg(game.background_image, 600, 400)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="medium" marginBottom={5}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
