import useData from "./useData";

export interface IGenre {
  id: number;
  name: string;
}

const useGenre = () => useData<IGenre>("genres");

export default useGenre;
