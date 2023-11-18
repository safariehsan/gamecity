import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
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
  metacritic: number;
}

export interface IGameResponse {
  count: number;
  results: IGame[];
}

const useGame = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<IGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, loading };
};

export default useGame;
