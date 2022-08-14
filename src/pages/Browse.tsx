import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { FiSearch, FiSliders, FiUser } from "react-icons/fi";
import { DoctorCard } from "../ui/DoctorCard";

export const Browse = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bgGradient="linear(to-tl, brand.400, brand.300)"
      flexDir="column"
    >
      <Box px="8">
        <Box h="48px" />
        <SearchSection />
        <Box h="12px" />
        <Flex align="center" px="3" py="3" rounded={"xl"}>
          <Icon as={FiSliders} w="24px" h="24px" color="text.invert" />
          <HStack flex={1} ml="4">
            <Button
              rounded="2xl"
              variant="ghost"
              colorScheme="whiteAlpha"
              color="text.invert"
              border="1px"
              borderColor="bg.100"
              size="sm"
            >
              Semua wilayah
            </Button>
            <Button
              rounded="2xl"
              variant="ghost"
              colorScheme="whiteAlpha"
              color="text.invert"
              border="1px"
              borderColor="bg.100"
              size="sm"
            >
              Semua Ahli
            </Button>
          </HStack>
        </Flex>
        <Box h="24px" />
      </Box>

      <Box bg="white" px="8" flex="1" roundedTop="24px">
        <Box h="36px" />
        <Stack spacing={3}>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </Stack>
      </Box>
    </Flex>
  );
};

export const SearchSection = () => {
  return (
    <Flex align="center">
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiUser} />}
        />
        <Input type="tel" placeholder="Nama Dokter" rounded="xl" bg="bg.0" />
      </InputGroup>

      <Box w="16px" />
      <IconButton
        size="lg"
        bg="bg.0"
        rounded="2xl"
        aria-label={"Filter"}
        icon={<Icon as={FiSearch} />}
        variant="outline"
      />
    </Flex>
  );
};
