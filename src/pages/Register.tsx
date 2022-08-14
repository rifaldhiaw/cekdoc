import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiPhone, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {};

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Heading size="xl" fontWeight="semibold">
        Daftar
      </Heading>
      <Box h="24" />

      <Flex flexDir="column" w="80%">
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiUser} color="bg.300" />}
          />
          <Input type="name" placeholder="Name" rounded="full" />
        </InputGroup>
        <InputGroup mt="2" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiPhone} color="bg.300" />}
          />
          <Input type="tel" placeholder="Nomor Handphone" rounded="full" />
        </InputGroup>
        <Button
          mt="6"
          onClick={handleRegister}
          size="lg"
          rounded="full"
          colorScheme="brand"
          bgGradient="linear(to-tl, brand.400, brand.300)"
        >
          Daftar
        </Button>

        <Stack mt="8">
          <Text textAlign="center">Sudah mempunyai akun?</Text>
          <Button
            rounded="full"
            onClick={() => navigate("/login")}
            variant="outline"
          >
            Masuk
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
