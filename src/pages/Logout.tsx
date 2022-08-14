import { signOut } from "firebase/auth";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/appStore";

export const Logout: FC<{}> = () => {
  const fireAuth = useAppStore((s) => s.fireAuth);
  const navigate = useNavigate();

  useEffect(() => {
    signOut(fireAuth).then(() => {
      navigate("/");
    });
  }, []);

  return null;
};
