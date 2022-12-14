import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const AppointmentCard = () => {
  return (
    <Flex border="1px" borderColor="bg.200" rounded="xl" flexDir="column">
      <Flex px="4" mt="4">
        <Avatar />
        <Box ml="4" flex="1">
          <Text fontSize="md" fontWeight="semibold">
            Dr. Apriyanto
          </Text>
          <Text fontSize="sm">Ahli saraf</Text>
        </Box>
      </Flex>
      <Flex mt="4" bg="bg.50" px="4" py="1">
        <Text fontSize="sm" color="brand.400" flex="1">
          Senin, 12 Juni 2020
        </Text>
        <Text fontSize="sm" color="brand.400">
          15:30
        </Text>
      </Flex>
    </Flex>
  );
};
