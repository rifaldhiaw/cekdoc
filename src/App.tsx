import { Flex } from "@chakra-ui/react";
import { FiCalendar, FiHome, FiUser } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Browse } from "./pages/Browse";
import { Doctor } from "./pages/Doctor";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Register } from "./pages/Register";
import { User } from "./pages/User";
import { RequireAuth } from "./plugin/RequireAuth";
import { useAuth, useAuthStore } from "./store/appStore";
import { BottomNavButton } from "./ui/BottomNavButton";

function App() {
  useAuth();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const navigate = useNavigate();

  return (
    <Flex w="full" h="full" flexDir="column">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Browse />} />
        <Route path="app">
          <Route
            path="home"
            element={
              <RequireAuth>
                <Home />
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
        </Route>
        <Route path=":doctorId" element={<Doctor />} />
      </Routes>
      {isLoggedIn && <BottomNavigation />}
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
        onClick={() => navigate("/app/home")}
      />
      <BottomNavButton
        label={"Cari Dokter"}
        icon={FiCalendar}
        onClick={() => navigate("/")}
      />
      <BottomNavButton
        label={"Pengguna"}
        icon={FiUser}
        onClick={() => navigate("/app/user")}
      />
    </Flex>
  );
};

export default App;
