import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface IProps {
  onSelectSortOrder: (sortBy: string) => void;
  activeSorting: string;
}

const SortDropDown = ({ onSelectSortOrder, activeSorting }: IProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rate" },
  ];
  const currentSortOrder = sortOrders.find(
    (sort) => sort.value === activeSorting
  );
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.label}
            value={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortDropDown;
