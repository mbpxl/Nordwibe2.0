import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Onboarding/Slider/Slider";
import useUserStore from "./store/UserStore";
import Profile from "./components/Profile/Profile";

const slides = [
  "Добро пожаловать в приложение Nordwibe!",
  "Знакомьтесь с новыми людьми рядом с вами.",
  "Создайте свой профиль и начинайте искать друзей.",
  "Начните своё путешествие уже сегодня 🚀",
];

function App() {
  const isAuth = useUserStore((state) => state.isAuth);
  const [showSlider, setShowSlider] = useState<boolean>(false);

  useEffect(() => {
    // Получаем из localStorage значение. Если оно false, то показываем онбординг слайдер.
    const onboardingShown = localStorage.getItem("onboardingShown");
    if (!onboardingShown) {
      setShowSlider(true);
    }
  }, []);

  // Функция, которая отработает при нажатии кноки "пропустить" в самом слайдере.
  const handleFinishOnboarding = () => {
    localStorage.setItem("onboardingShown", "true");
    setShowSlider(false);
  };

  return (
    <div className="overflow-hidden min-h-screen bg-gray-50">
      <NavBar />
      <Profile />
      <div className="max-w-lg mx-auto mt-10 px-4">
        {showSlider && !isAuth ? (
          <Slider onSkip={handleFinishOnboarding}>
            {slides.map((text, idx) => (
              <div
                key={idx}
                className="text-center text-xl font-medium text-gray-700"
              >
                {text}
              </div>
            ))}
          </Slider>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
