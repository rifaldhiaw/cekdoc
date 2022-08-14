import { Flex } from "@chakra-ui/react";
import { FiCalendar, FiHome, FiUser } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Register } from "./pages/Register";
import { Schedule } from "./pages/Schedule";
import { User } from "./pages/User";
import { RequireAuth } from "./plugin/RequireAuth";
import { useAuth } from "./store/appStore";
import { BottomNavButton } from "./ui/BottomNavButton";

function App() {
  useAuth();

  return (
    <Flex w="full" h="full" flexDir="column">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Home />} />
        <Route
          path="schedule"
          element={
            <RequireAuth>
              <Schedule />
            </RequireAuth>
          }
        />
        <Route
          path="user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
      </Routes>
      <BottomNavigation />
    </Flex>
  );
}

export const BottomNavigation = () => {
  const navigate = useNavigate();
  return (
    <Flex
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      h="56px"
      px="6"
      bg="white"
      shadow="xl"
      roundedTop="xl"
      borderTop="1px"
      borderTopColor="bg.300"
      overflow="hidden"
    >
      <BottomNavButton
        label={"Beranda"}
        icon={FiHome}
        onClick={() => navigate("/")}
      />
      <BottomNavButton
        label={"Buat janji"}
        icon={FiCalendar}
        onClick={() => navigate("/schedule")}
      />
      <BottomNavButton
        label={"Pengguna"}
        icon={FiUser}
        onClick={() => navigate("/user")}
      />
    </Flex>
  );
};

export default App;
