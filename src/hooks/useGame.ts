import useData from "./useData";
import { IGenre } from "./useGenre";

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

const useGame = (selectedGenre: IGenre | null) =>
  useData<IGame>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGame;
