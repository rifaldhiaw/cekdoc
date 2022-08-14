import { Box, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/appStore";

export const Home = () => {
  const navigate = useNavigate();
  const user = useAppStore((s) => s.user);

  const loginButton = user ? (
    <Button onClick={() => navigate("/logout")}>Logout</Button>
  ) : (
    <Button onClick={() => navigate("/login")}>Login</Button>
  );

  return (
    <Box w="100vw" h="100vh">
      <Center h="full">{loginButton}</Center>
    </Box>
  );
};
