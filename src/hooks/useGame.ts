import { IGameQuery } from "../App";
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

const useGame = (gameQuery: IGameQuery) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGame;
