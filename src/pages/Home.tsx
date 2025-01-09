import { Navbar } from "@/components/common/Navbar";
import { UserLeaderBoard } from "@/components/common/UserLeaderBoard";
import useWindowDimensions from "@/hooks/useWindowDimension";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export const Home = () => {
  //   const [emblaRef] = useEmblaCarousel();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);
  const windowSize = useWindowDimensions();
  return (
    <div className="w-full">
      <div className="text-3xl font-semibold px-12 pt-16 text-primary italic">Hello 22PT19!</div>
      {windowSize.width < 768 ? (
        <div className="embla overflow-hidden py-8" ref={emblaRef}>
          <div className="embla__container  gap-y-10 flex">
            <div className="embla__slide ">
              <UserLeaderBoard position={1} leaderBoard="BATCH" />
            </div>
            <div className="embla__slide ">
              <UserLeaderBoard position={1} leaderBoard="OVERALL" />
            </div>
            <div className="embla__slide ">
              <UserLeaderBoard position={1} leaderBoard="CLASS" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full" >
          <div className="flex justify-between">
            <div className="w-1/3">
              <UserLeaderBoard position={1} leaderBoard="BATCH" />
            </div>
            <div className="w-1/3">
              <UserLeaderBoard position={1} leaderBoard="OVERALL" />
            </div>
            <div className="w-1/3">
              <UserLeaderBoard position={1} leaderBoard="CLASS" />
            </div>
          </div>
        </div>
      )}

      {/* <div className="absolute top-[80vh] flex justify-center w-dvw ">
      <Navbar />
      </div> */}
    </div>
  );
};
