import { FadeIn } from "./AnimationWrapper";
import CountdownTimer from "./CountdownTimer";
import { INVSAMPE } from "./data/sample";

const SplashScreen = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  //   console.log(search);
  return (
    <div className="relative h-screen">
      <img
        src="/splash-screen.jpeg"
        alt="dn"
        className="z-0 h-full w-full object-cover sm:object-contain aspect-auto mx-auto transition-all delay-300 ease-in-out"
      />

      <div className="flex flex-col items-center justify-between h-full w-full z-10 inset-0 absolute">
        {/* header content */}
        <div className="w-full pt-12">
          <FadeIn direction="down">
            <h1 className="text-center text-white text-2xl leading-9 moulpali-medium">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </h1>
          </FadeIn>
          <FadeIn>
            <h1 className="text-center text-white text-2xl leading-9 imperial-script-regular ">
              The Wedding Invitation
            </h1>
          </FadeIn>
        </div>

        {/* Content */}
        <FadeIn className="w-full">
          <div className="w-full flex flex-col items-center gap-4 relative pb-12">
            <CountdownTimer targetDate={INVSAMPE.date} />
            <p className="text-center z-10 text-lg moulpali-medium text-white">
              សូមគោរពអញ្ចើញ
            </p>
            <div className="z-10 p-3 max-w-sm mx-3 backdrop-blur-sm relative">
              <img
                src="/2.svg"
                alt="frame"
                className="h-full absolute inset-0 w-full"
              />
              <p className="text-center text-yellow-400 text-sm moulpali-medium leading-7">
                {name}
              </p>
            </div>
            <button
              className="bg-white/90 z-10 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all w-1/2 mx-auto"
              onClick={onClick}
            >
              ចុចបើកធៀប
            </button>
            <div className="absolute bottom-0 z-0 left-0 h-full w-full bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SplashScreen;
