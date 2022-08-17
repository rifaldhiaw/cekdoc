import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const DoctorCard: FC<{ onClick: () => void }> = (props) => {
  return (
    <Flex
      align="center"
      border="1px"
      borderColor="bg.200"
      px="5"
      py="4"
      rounded="xl"
      bg="bg.0"
      onClick={props.onClick}
    >
      <Avatar />
      <Box ml="4" flex={1}>
        <Text fontSize="md" fontWeight="semibold">
          Dr. Apriyanto
        </Text>
        <Text fontSize="sm">Ahli saraf</Text>
      </Box>
    </Flex>
  );
};
