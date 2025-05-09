import { Children, ReactNode, useState } from "react";
import arrow from "../../../assets/icons/arrow-right.svg";
import { Link } from "@tanstack/react-router";

interface SliderProps {
  children: ReactNode;
  onSkip?: () => void;
}

const Slider = ({ children: slides, onSkip }: SliderProps) => {
  const [current, setCurrent] = useState<number>(0);
  const slidesArray = Children.toArray(slides);
  const slidesCount = slidesArray.length;

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? slidesCount - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === slidesCount - 1 ? 0 : curr + 1));
  };

  return (
    <div className="relative w-full h-80 bg-white rounded-xl shadow-md flex flex-col items-center justify-between p-6">
      <div className="w-full h-full relative">
        {slidesArray.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === current
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center w-full mt-4">
        <button
          onClick={prev}
          className="text-sm text-gray-600 hover:text-black transition"
        >
          <img src={arrow} alt="Назад" className="rotate-180" />
        </button>

        <div className="flex gap-2">
          {slidesArray.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-sm text-gray-600 hover:text-black transition"
        >
          <img src={arrow} alt="Вперёд" />
        </button>
      </div>

      <Link onClick={onSkip} to={"/auth"}>
        <p className="absolute top-2 right-4 text-sm text-blue-500 hover:text-blue-900">
          Пропустить
        </p>
      </Link>
    </div>
  );
};

export default Slider;
