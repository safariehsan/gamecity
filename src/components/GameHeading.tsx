import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";
import { sortOrders } from "./SortDropDown";

interface Props {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const currentSortOrder = sortOrders.find(
    (sort) => sort.value === gameQuery.sortBy
  );
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games ${gameQuery.sortBy ? `(Sorted by: ${currentSortOrder?.label})` : ""}`;
  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
