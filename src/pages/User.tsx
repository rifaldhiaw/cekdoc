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
import { signOut } from "firebase/auth";
import { FC } from "react";
import { IconType } from "react-icons";
import { FiCommand, FiEdit2, FiPhone, FiPower } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/appStore";

export const User = () => {
  const fireAuth = useAppStore((s) => s.fireAuth);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    signOut(fireAuth).then(() => {
      navigate("/");
    });
  };

  const handleUpdateInfoClick = () => {};

  const handleUpdatePhoneClick = () => {};

  const handleAboutClick = () => {};

  return (
    <Flex w="100vw" h="100vh" flexDir="column" overflowY="auto" py="4">
      <Box
        my="2"
        bgGradient="linear(to-tl, brand.400, brand.200)"
        rounded="3xl"
        shadow="lg"
        mx="6"
        textAlign="center"
      >
        <Flex justify="center" flexDir="column" align="center">
          <Circle mt="8" bg="bg.0" p="1">
            <Avatar size="lg" />
          </Circle>
          <Text mt="3" color="white" fontSize="lg" fontWeight="semibold">
            Rifaldhi Ardhi Wiyanto
          </Text>
        </Flex>

        <Box overflow="hidden" rounded="3xl">
          <Stack mt="4" spacing={2} bg="#00000010" px="5" py="6">
            <BioInfo label={"No Telephone"} value={"081366778811"} />
            <BioInfo
              label={"Alamat"}
              value={"Rukti Sediyo, Kec. Raman Utara"}
            />
            <BioInfo
              label={"Tanggal Lahir"}
              value={"Rukti Sediyo, 1 Januari 1980"}
            />
          </Stack>
        </Box>
      </Box>

      <Flex flex={1} px="6" mt="4" flexDir="column">
        <Stack spacing={4} w="full" flex={1}>
          <Menu
            label={"Rubah data diri"}
            icon={FiEdit2}
            onClick={handleUpdateInfoClick}
          />
          <Menu
            label={"Rubah nomor telephone"}
            icon={FiPhone}
            onClick={handleUpdatePhoneClick}
          />
          <Divider />
          <Menu
            label={"Tentang Aplikasi"}
            icon={FiCommand}
            onClick={handleAboutClick}
          />
          <Menu
            label={"Keluar dari aplikasi"}
            icon={FiPower}
            iconColor="red.400"
            onClick={handleLogoutClick}
          />
        </Stack>
        <Box h="20" />
      </Flex>
    </Flex>
  );
};

export const Menu: FC<{
  label: string;
  icon: IconType;
  iconColor?: string;
  onClick: () => void;
}> = (props) => {
  return (
    <Flex h="36px" px="4" align="center" onClick={props.onClick}>
      <Icon
        as={props.icon}
        color={props.iconColor ?? "text.normal"}
        w="5"
        h="5"
      />
      <Text ml="8">{props.label}</Text>
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
