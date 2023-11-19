import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { IGenre } from "../hooks/useGenre";
import getCroppedImg from "../services/image-url";

interface Props {
  onSelectGenre: (genre: IGenre) => void;
  activeGenre: IGenre | null;
}

const GenreList = ({ activeGenre, onSelectGenre }: Props) => {
  const { data, error, loading } = useGenre();
  if (loading) return <Spinner marginY={10} />;
  if (error) return null;
  return (
    <>
      <Heading marginTop={10}>Genres</Heading>
      <List marginY={10}>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id}>
              <HStack key={genre.id} marginY={2}>
                <Image
                  objectFit="cover"
                  src={getCroppedImg(genre.image_background, 600, 400)}
                  borderRadius={8}
                  boxSize="32px"
                />
                <Button
                  whiteSpace="normal"
                  variant="link"
                  textAlign="left"
                  fontSize="large"
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={activeGenre?.id === genre.id ? "bold" : "normal"}
                  color={activeGenre?.id === genre.id ? "darkorchid" : "light"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
