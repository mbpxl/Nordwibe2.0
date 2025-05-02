/* eslint-disable react-hooks/exhaustive-deps */
import { createFileRoute, useNavigate } from "@tanstack/react-router";
// import AuthPage from "../../pages/AuthPage";
import useUserStore from "../../store/UserStore";
import { useEffect } from "react";
import AuthPage from "../../pages/AuthPage";

export const Route = createFileRoute("/auth/")({
  component: Auth,
});

function Auth() {
  const isAuth = useUserStore((state) => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate({ to: "/" });
  }, [isAuth]);

  return (
    <div className="">
      <AuthPage />
    </div>
  );
}
