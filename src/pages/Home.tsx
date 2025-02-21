import { UserLeaderBoard } from "@/components/common/UserLeaderBoard";
import useWindowDimensions from "@/hooks/useWindowDimension";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import HeatMap from "@uiw/react-heat-map";
import { useEffect } from "react";
import { Heatmap } from "@/components/common/Heatmap";

export const Home = () => {
  //   const [emblaRef] = useEmblaCarousel();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  useEffect(() => {
    console.log(new Date());
  }, []);
  const windowSize = useWindowDimensions();
  return (
    <div className="w-full space-y-4 min-h-full h-fit">
      <div className="text-3xl font-semibold px-12 pt-16 text-primary italic">
        Hello 22PT19!
      </div>
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
        <div className="w-full">
          <div className="flex justify-evenly gap-x-10 px-10 w-full">
            <div className="w-1/3">
              <UserLeaderBoard position={1} leaderBoard="BATCH"/>
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
      <div className=" mx-10 mt-10">
        <hr className="border-1 border-awhite" />
      </div>
      <div className="w-full md:h-1/3">
        <div className="flex gap-10 mx-10 justify-between md:flex-row flex-col">
          <div className="md:w-1/3">
            <div
              className="min-w-fit min-h-72 
            px-10 pt-10 flex flex-col 
            items-center justify-center 
            bg-awhite rounded-[35px] 
            drop-shadow-light"
            >
              <span className="text-md font-medium text-primary">
                Leaderboard
              </span>
            </div>
          </div>
          <div className="md:w-2/3">
            <Heatmap />
          </div>
        </div>
      </div>

      {/* <div className="flex gap-y-10 justify-between md:flex-row flex-col">
        <div className="md:w-1/3">
          <div
            className="min-w-fit min-h-72 
            px-10 pt-10 mx-10 flex flex-col 
            items-center justify-center 
            bg-awhite rounded-[35px] 
            drop-shadow-light"
          >
            <span className="text-md font-medium text-primary">
              Leaderboard
            </span>
          </div>
        </div>
        <div className="md:w-2/3">
          <Heatmap />
      </div>
        </div> */}
    </div>
  );
};
