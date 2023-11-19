import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/logo-small.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX={{ base: "10", lg: "5" }} marginTop={2}>
      <Image src={LogoImg} alt="logo" width="50px" />
      <Text
        fontSize="xl"
        fontWeight="bold"
        display={{ base: "none", md: "block" }}
      >
        GameCity
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
