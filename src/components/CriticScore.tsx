import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score >= 90 ? "green" : score >= 80 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="medium" borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
