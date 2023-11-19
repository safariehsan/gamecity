import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/logo-small.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack paddingX="5" marginTop={2}>
      <Image src={LogoImg} alt="logo" width="50px" />
      <Text
        fontSize="xl"
        fontWeight="bold"
        display={{ base: "none", md: "block" }}
      >
        GameCity
      </Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
