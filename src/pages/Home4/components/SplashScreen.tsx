import { FadeIn } from "./AnimationWrapper";
import CountdownTimer from "./CountdownTimer";
import { INVSAMPE } from "./data/sample";
import { Svg7 } from "./SvgFrame";

const SplashScreen = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  //   console.log(search);
  return (
    <div className="relative h-full">
      <img
        src="/splash-screen.jpeg"
        alt="dn"
        className="z-10 absolute inset-0 h-full w-full object-cover aspect-auto mx-auto transition-all delay-300 ease-in-out"
      />

      <div className="flex flex-col items-center justify-between h-full w-full z-20 inset-0 absolute">
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
            <div className="z-10 p-3 relative w-full flex items-center justify-center">
              {/* SVG ជាផ្ទៃខាងក្រោយ */}
              <Svg7 className="w-full" />

              {/* អត្ថបទស្ថិតនៅចំកណ្តាល SVG ជានិច្ច */}
              <p className="absolute  text-center text-yellow-400 text-[12px] moul-regular leading-7 px-4 max-w-sm">
                {name}
              </p>
            </div>
            <button
              className="bg-white/90 z-10 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all w-1/2 mx-auto"
              onClick={onClick}
            >
              ចុចបើកធៀប
            </button>
            <div className="absolute bottom-0 z-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SplashScreen;
