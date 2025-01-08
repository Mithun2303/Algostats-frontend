import Lottie from "lottie-react";
import LoaderAnimation from "@/assets/Animations/Loader.json";
export const Loader = () => {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center">
      <Lottie animationData={LoaderAnimation} loop={true} />
      <span className="text-2xl font-semibold text-primary italic">Loading!</span>
    </div>
  );
};
