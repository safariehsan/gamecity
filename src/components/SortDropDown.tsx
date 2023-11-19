import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { IPlatform } from "../hooks/usePlatform";

interface IProps {
  onSelectPlatform: (platform: any) => void;
  activePlatform: IPlatform | null;
}

const SortDropDown = ({ onSelectPlatform, activePlatform }: IProps) => {
  const { data, loading, error } = usePlatform();
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Order by Date
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rate</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortDropDown;
