import useData from "./useData";

export interface IPlatform {
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
  platforms: IPlatform[];
  metacritic: number;
}

const useGame = () => useData<IGame>("/games");

export default useGame;
