import {
  Avatar,
  Box,
  Circle,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { FiCommand, FiEdit2, FiPhone, FiPower } from "react-icons/fi";

export const User = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="column" overflowX="auto" py="4">
      <Box
        my="4"
        bgGradient="linear(to-tl, brand.400, brand.200)"
        rounded="3xl"
        shadow="lg"
        mx="6"
        textAlign="center"
      >
        <Flex justify="center" flexDir="column" align="center">
          <Circle mt="10" bg="bg.0" p="1">
            <Avatar size="lg" />
          </Circle>
          <Text mt="3" color="white" fontSize="xl" fontWeight="semibold">
            Rifaldhi Ardhi Wiyanto
          </Text>
        </Flex>

        <Stack mt="6" spacing={2} bg="#00000010" px="8" py="8">
          <BioInfo label={"No Telephone"} value={"081366778811"} />
          <BioInfo label={"Alamat"} value={"Rukti Sediyo, Kec. Raman Utara"} />
          <BioInfo
            label={"Tanggal Lahir"}
            value={"Rukti Sediyo, 1 Januari 1980"}
          />
        </Stack>
      </Box>

      <Flex flex={1} overflowY="auto" px="6" mt="4" flexDir="column">
        <Stack spacing={4} w="full" flex={1}>
          <Menu label={"Rubah data diri"} icon={FiEdit2} />
          <Menu label={"Rubah nomor telephone"} icon={FiPhone} />
          <Divider />
          <Menu label={"Tentang Aplikasi"} icon={FiCommand} />
          <Menu
            label={"Keluar dari aplikasi"}
            icon={FiPower}
            iconColor="red.400"
          />
        </Stack>
      </Flex>

      <Box h="80px" />
    </Flex>
  );
};

export const Menu: FC<{ label: string; icon: IconType; iconColor?: string }> = (
  props
) => {
  return (
    <Flex h="56px" px="4" align="center">
      <Icon
        as={props.icon}
        color={props.iconColor ?? "text.normal"}
        w="6"
        h="6"
      />
      <Text fontSize="xl" ml="8">
        {props.label}
      </Text>
    </Flex>
  );
};

export const BioInfo: FC<{ label: string; value: string }> = (props) => {
  return (
    <Flex>
      <Text
        color="text.invert"
        fontWeight="semibold"
        fontSize="sm"
        w="100px"
        textAlign="left"
      >
        {props.label}
      </Text>
      <Text
        fontWeight="semibold"
        fontSize="sm"
        color="text.invert"
        ml="4"
        flex="1"
        textAlign="left"
      >
        {props.value}
      </Text>
    </Flex>
  );
};
