import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

const PlatformDropDown = () => {
  const { data, loading, error } = usePlatform();
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropDown;
