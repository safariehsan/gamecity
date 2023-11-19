import { IPlatformParent } from "../hooks/useGame";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IPlatforms {
  platforms: IPlatformParent[];
}

const PlatformIconList = ({ platforms }: IPlatforms) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack justifyContent="start">
      {platforms.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
