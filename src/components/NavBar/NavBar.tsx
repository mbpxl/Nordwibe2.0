import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import useUserStore from "../../store/UserStore";

import logo from "../../assets/imgs/test_logo.svg";
import profile from "../../assets/icons/profile.svg";
import search from "../../assets/icons/search.svg";
import publish from "../../assets/icons/publish.svg";
import chat from "../../assets/icons/chat.svg";

const NavBar = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    // внешний div - для фона итд, внутренний - контейнер
    <>
      <nav className="bg-[#eae4ed] py-2 px-3">
        <div className="max-w-[71rem] m-auto flex gap-2 justify-between px-1 items-center">
          <div className="">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
            </Link>{" "}
          </div>
          <div className="">
            <Link to="/auth" className="[&.active]:font-[600]">
              {isAuth ? (
                <div className="flex gap-5">
                  <Link to={"/"}>
                    <button
                      className="border-2 border-solid p-1 rounded-[7px]"
                      title="Поиск пользователей"
                    >
                      <img
                        src={search}
                        alt="profile"
                        className="w-[35px] h-[35px]"
                      />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button
                      className="border-2 border-solid p-1 rounded-[7px]"
                      title="Создать публикацию"
                    >
                      <img
                        src={chat}
                        alt="profile"
                        className="w-[35px] h-[35px]"
                      />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button
                      className="border-2 border-solid p-1 rounded-[7px]"
                      title="Создать публикацию"
                    >
                      <img
                        src={publish}
                        alt="profile"
                        className="w-[35px] h-[35px]"
                      />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="border-2 border-solid p-1 rounded-[7px] hover">
                      <img
                        src={profile}
                        alt="profile"
                        className="w-[35px] h-[35px]"
                      />
                    </button>
                  </Link>
                </div>
              ) : (
                <button className="border-2 border-solid p-3 rounded-[7px] hover:bg-[#5e145f] hover:text-white">
                  Вход/Регистрация
                </button>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export default NavBar;
