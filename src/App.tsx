import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { FiCalendar, FiHome } from "react-icons/fi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Register } from "./pages/Register";
import { Schedule } from "./pages/Schedule";
import { User } from "./pages/User";
import { RequireAuth } from "./plugin/RequireAuth";
import { useAuth } from "./store/appStore";

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
      bottom="16px"
      left="24px"
      right="24px"
      h="48px"
      bg="gray.100"
      rounded="full"
      overflow="hidden"
    >
      <BottomNavButton
        label={"Home"}
        icon={FiHome}
        onClick={() => navigate("/")}
      />
      <BottomNavButton
        label={"Schedule"}
        icon={FiCalendar}
        onClick={() => navigate("/schedule")}
      />
    </Flex>
  );
};

export const BottomNavButton: FC<{
  label: string;
  icon: IconType;
  onClick: () => void;
}> = (props) => {
  return (
    <IconButton
      h="full"
      rounded="0"
      flex={1}
      size="lg"
      aria-label={props.label}
      icon={<Icon as={props.icon} />}
      onClick={props.onClick}
    />
  );
};

export default App;
