import {
  Avatar,
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Doctor = () => {
  const navigate = useNavigate();

  const bg = (
    <Box
      bg="brand.400"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      h="240px"
      zIndex={-1}
      roundedBottom="24px"
      bgGradient="linear(to-tl, brand.400, brand.300)"
    />
  );

  const [selectedTab, setSelectedTab] = useState<"info" | "schedule">("info");

  const activeTab = {
    rounded: "full",
    color: "text.invert",
    bgGradient: "linear(to-tl, brand.400, brand.300)",
    fontWeight: "semibold",
    mx: "1",
  };

  const inactiveTab = {
    rounded: "full",
    color: "text.normal",
    bgColor: "bg.100",
    fontWeight: "semibold",
    mx: "1",
  };

  return (
    <Flex w="100vw" h="100vh" flexDir="column" overflowX="auto" py="4">
      {bg}

      <Flex
        flexDir="column"
        bg="white"
        px="8"
        rounded="24px"
        mx="6"
        py="8"
        mt="8"
        border="1px"
        borderColor="bg.300"
        shadow="md"
        align="center"
      >
        <Avatar size="xl" mt="4" />
        <Text fontSize="xl" fontWeight="semibold" mt="4">
          Dr. Apriyanto
        </Text>
        <Text mt="1" fontWeight="semibold">
          Ahli saraf
        </Text>

        <Box h="4" />
        <Flex>
          <Text fontWeight="semibold">Metro</Text>
          <Text mx="1">-</Text>
          <Text color="text.muted" fontWeight="semibold">
            Lampung
          </Text>
        </Flex>
      </Flex>

      <Box h="6" />
      <Tabs
        isFitted
        colorScheme="brand"
        mx="6"
        size="lg"
        variant="unstyled"
        onChange={(idx) => {
          if (idx === 0) {
            setSelectedTab("info");
          }
          if (idx === 1) {
            setSelectedTab("schedule");
          }
        }}
      >
        <TabList>
          {selectedTab === "info" && (
            <>
              <Tab {...activeTab}>Info</Tab>
              <Tab {...inactiveTab}>Jadwal</Tab>
            </>
          )}
          {selectedTab === "schedule" && (
            <>
              <Tab {...inactiveTab}>Info</Tab>
              <Tab {...activeTab}>Jadwal</Tab>
            </>
          )}
        </TabList>
        <TabPanels>
          <TabPanel p={4}>Info</TabPanel>
          <TabPanel p={4}>
            <Box h="6" />
            <Text fontWeight="semibold" fontSize="lg">
              Janji dibuat
            </Text>
            <Flex
              mt="4"
              rounded="xl"
              bgGradient="linear(to-tl, brand.400, brand.300)"
              justify="space-between"
              px="6"
              py="4"
              shadow="md"
            >
              <Text color="text.invert" fontWeight="bold">
                Senin, 12 Juni 2024
              </Text>
              <Text color="text.invert" fontWeight="bold">
                14:30
              </Text>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
