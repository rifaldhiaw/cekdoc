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
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { signInAnonymously } from "firebase/auth";
import { FiPhone } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/appStore";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // @ts-ignore
  const from = location.state?.from?.pathname || "/";

  const [isLoading, isLoadingState] = useBoolean();

  const fireAuth = useAppStore((s) => s.fireAuth);
  const toast = useToast();

  const handleLogin = () => {
    isLoadingState.on();
    signInAnonymously(fireAuth)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast({
          status: "error",
          title: "Gagal melakukan login",
          description: errorMessage,
        });
      })
      .finally(() => {
        isLoadingState.off();
      });
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Heading size="xl" fontWeight="semibold">
        Masuk
      </Heading>

      <Box h="24" />

      <Flex flexDir="column" w="80%">
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiPhone} color="bg.300" />}
          />
          <Input type="tel" placeholder="Nomor Telephone" rounded="full" />
        </InputGroup>
        <Button
          mt="6"
          size="lg"
          rounded="full"
          colorScheme="brand"
          bgGradient="linear(to-tl, brand.400, brand.300)"
          onClick={handleLogin}
          isLoading={isLoading}
        >
          Masuk
        </Button>

        <Stack mt="8">
          <Text textAlign="center">Belum mempunyai akun?</Text>
          <Button
            onClick={() => navigate("/register")}
            variant="outline"
            rounded="full"
          >
            Daftar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
