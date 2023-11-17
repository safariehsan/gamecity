import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImg from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={LogoImg} alt="logo" boxSize="60px" />
      <Text fontSize="xl" fontWeight="bold" as="mark">
        GameCity
      </Text>
    </HStack>
  );
};

export default NavBar;
