import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImg from "../services/image-url";

const GenreList = () => {
  const { data, error, loading } = useGenre();
  if (loading) return <Spinner marginY={10} />;
  if (error) return null;
  return (
    <List marginY={10}>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack key={genre.id} marginY={2}>
              <Image
                src={getCroppedImg(genre.image_background, 600, 400)}
                borderRadius={8}
                boxSize="32px"
              />
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
