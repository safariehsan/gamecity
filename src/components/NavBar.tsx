import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="5" bg="darkorchid">
      <Image src={LogoImg} alt="logo" boxSize="60px" />
      <HStack>
        <Text fontSize="xl" fontWeight="bold" color="orange">
          ~
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          GameCity
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="orange">
          ~
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
