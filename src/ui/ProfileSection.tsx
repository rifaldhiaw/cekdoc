import { Avatar, Box, Circle, Flex, Text } from "@chakra-ui/react";

export const ProfileSection = () => {
  return (
    <Flex align="center">
      <Circle p={1} bg="white">
        <Avatar />
      </Circle>
      <Box ml="4" flex="1">
        <Text color="white" fontSize="xl" fontWeight="bold" lineHeight={1.2}>
          Rifaldhi AW
        </Text>
        <Text color="white" fontSize="sm" lineHeight={1.2}>
          1 janji temu hari ini
        </Text>
      </Box>
      <Box mr="2">
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="xs"
          color="white"
        >
          Terdekat
        </Text>
        <Text
          fontWeight="semibold"
          fontSize="xl"
          color="white"
          lineHeight={1.2}
        >
          14:30
        </Text>
      </Box>
    </Flex>
  );
};
