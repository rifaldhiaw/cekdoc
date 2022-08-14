import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const DoctorCard: FC<{}> = () => {
  return (
    <Flex
      align="center"
      border="1px"
      borderColor="bg.200"
      px="8"
      py="6"
      rounded="xl"
      bg="bg.0"
    >
      <Avatar />
      <Box ml="6" flex={1}>
        <Text fontSize="xl">Dr. Apriyanto</Text>
        <Text fontSize="sm">Ahli saraf</Text>
      </Box>
    </Flex>
  );
};
