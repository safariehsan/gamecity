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

const PlatformDropDown = ({ onSelectPlatform, activePlatform }: IProps) => {
  const { data, loading, error } = usePlatform();
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        {activePlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropDown;
