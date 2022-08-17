import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/appStore";
import { AppointmentCard } from "../ui/AppointmentCard";
import { DoctorCard } from "../ui/DoctorCard";
import { ProfileSection } from "../ui/ProfileSection";

export const Home = () => {
  const navigate = useNavigate();
  const user = useAppStore((s) => s.user);

  const bg = (
    <Box
      bg="brand.400"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      h="360px"
      zIndex={-1}
      roundedBottom="24px"
      bgGradient="linear(to-tl, brand.400, brand.300)"
    />
  );

  return (
    <Flex w="100vw" h="100vh" flexDir="column" overflowX="auto" py="4">
      {bg}
      <Box px="8">
        <Box h="36px" />
        <ProfileSection />
        <Box h="36px" />
      </Box>

      <Box
        bg="white"
        px="5"
        rounded="24px"
        mx="6"
        py="8"
        border="1px"
        borderColor="bg.300"
        shadow="md"
      >
        <Flex justify="space-between">
          <Text fontWeight="semibold" textAlign="center">
            Janji Temu
          </Text>
          <Text textAlign="center" color="brand.400">
            Lihat semua
          </Text>
        </Flex>
        <Box h="20px" />
        <Stack spacing="4">
          <AppointmentCard />
          <AppointmentCard />
          <Center
            py="1"
            bg="bg.50"
            rounded="md"
            border="1px"
            borderColor="bg.200"
          >
            <Text color="brand.400" fontSize="sm">
              7 janji temu lagi...
            </Text>
          </Center>
        </Stack>
      </Box>

      <Box mx="6">
        <Box h="36px" />
        <Flex justify="space-between" px="2">
          <Text fontWeight="semibold" fontSize="lg" textAlign="center">
            Terakahir dilihat
          </Text>
        </Flex>
        <Box h="16px" />
        <Stack spacing={3}>
          <DoctorCard onClick={() => navigate("/123")} />
          <DoctorCard onClick={() => navigate("/111")} />
          <DoctorCard onClick={() => navigate("/333")} />
        </Stack>
        <Box h="80px" />
      </Box>
    </Flex>
  );
};
