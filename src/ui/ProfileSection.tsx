import { Avatar, Box, Circle, Flex, Text } from "@chakra-ui/react";

export const ProfileSection = () => {
  return (
    <Flex align="center">
      <Circle p={1} bg="white">
        <Avatar />
      </Circle>
      <Box ml="6" flex="1">
        <Text color="white" fontSize="xl" fontWeight="bold">
          Rifaldhi AW
        </Text>
        <Text color="white" fontSize="sm" lineHeight={1}>
          1 janji temu hari ini
        </Text>
      </Box>
    </Flex>
  );
};
