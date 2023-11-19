import { IGameQuery } from "../App";
import useData from "./useData";

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
  rating_top: number;
}

const useGame = (gameQuery: IGameQuery) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortBy,
        search: gameQuery.searchTerm,
      },
    },
    [gameQuery]
  );

export default useGame;
