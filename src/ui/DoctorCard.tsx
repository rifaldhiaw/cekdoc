import { Avatar, Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiBookOpen } from "react-icons/fi";

export const DoctorCard: FC<{ onBook: () => void }> = (props) => {
  return (
    <Flex
      align="center"
      border="1px"
      borderColor="bg.200"
      px="8"
      rounded="xl"
      py="4"
      bg="bg.0"
    >
      <Avatar />
      <Box ml="6" flex={1}>
        <Text fontSize="xl">Dr. Apriyanto</Text>
        <Text fontSize="sm">Neurologist</Text>
      </Box>
      <IconButton
        onClick={props.onBook}
        variant="outline"
        rounded="full"
        colorScheme="brand"
        aria-label={"buat janji"}
        icon={<Icon as={FiBookOpen} />}
      />
    </Flex>
  );
};
