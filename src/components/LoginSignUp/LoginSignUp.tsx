import user_icon from "../../assets/icons/person.png";
import email_icon from "../../assets/icons/email.png";
import password_icon from "../../assets/icons/password.png";
import { useState } from "react";

const LoginSignUp = () => {
  const [action, setAction] = useState<string>("Регистрация");

  return (
    <div className="w-full">
      <div className="flex flex-col m-auto mt-25 bg-white pb-7 w-[600px] rounded-3xl">
        <div className="flex flex-col items-center gap-2 w-full mt-7">
          <div className="text-fuchsia-900 text-5xl font-bold pb-2">
            {action}
          </div>
          <div className="w-16 h-1.5 bg-fuchsia-900 rounded-xl"></div>
        </div>
        <div className="mt-14 flex flex-col gap-6">
          <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img src={user_icon} alt="user" className="mx-7" />
            <input
              type="text"
              className="h-12 w-1.6 bg-transparent text-xl text-[#797979]"
              placeholder="Имя"
            />
          </div>
          <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img src={email_icon} alt="email" className="mx-7" />
            <input
              type="email"
              className="h-12 w-1.6 bg-transparent text-xl text-[#797979]"
              placeholder="Почта"
            />
          </div>
          <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img src={password_icon} alt="password" className="mx-7" />
            <input
              type="password"
              className="h-12 w-1.6 bg-transparent text-xl text-[#797979]"
              placeholder="Пароль"
            />
          </div>
        </div>
        {action === "Регистрация" ? (
          <div className="pl-16 mt-7 text-lg text-[#797979]">
            Есть аккаунт?{" "}
            <span
              className="text-fuchsia-900 cursor-pointer"
              onClick={() => setAction("Войти")}
            >
              Войти
            </span>
          </div>
        ) : (
          <div className="pl-16 mt-7 text-lg text-[#797979]">
            Забыл пароль?{" "}
            <span className="text-fuchsia-900 cursor-pointer">Жми сюда</span>
          </div>
        )}

        <div className="flex gap-3 m-8 flex-col items-center">
          <div className="flex justify-center items-center w-[220px] h-[59px] text-white bg-fuchsia-900 rounded-[50px] text-xl font-bold cursor-pointer">
            {action === "Войти" ? "Войти" : "Регистрация"}
          </div>

          {action === "Войти" ? (
            <div className="mt-1 text-lg text-[#797979]">
              <span
                className="text-fuchsia-900 cursor-pointer"
                onClick={() => setAction("Регистрация")}
              >
                Зарегистрируйся
              </span>{" "}
              если у тебя ещё нет аккаунта
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
