import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";

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
}

export interface IGameResponse {
  count: number;
  results: IGame[];
}

const useGame = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<IGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGame;
