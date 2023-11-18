import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error, loading } = useGenre();
  return (
    <div>
      {data.map((genre) => {
        return <div key={genre.id}>{genre.name}</div>;
      })}
    </div>
  );
};

export default GenreList;
