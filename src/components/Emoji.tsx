import ThumsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import BullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojis: { [key: number]: ImageProps } = {
    // indexed signature
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojis[rating]} marginTop={2} />;
};

export default Emoji;
