import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, loading } = useGenre();
  return (
    <div>
      {genres.map((genre) => {
        return <div key={genre.id}>{genre.name}</div>;
      })}
    </div>
  );
};

export default GenreList;
