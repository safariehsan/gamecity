import useData from "./useData";
import { IGenre } from "./useGenre";
import { IPlatform } from "./usePlatform";

export interface IPlatformParent {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
export interface IGame {
  id: number;
  name: string;
  background_image: string;
  platforms: IPlatformParent[];
  metacritic: number;
}

const useGame = (
  selectedGenre: IGenre | null,
  selectedPlatform: IPlatform | null
) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGame;
