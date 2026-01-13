import { format, parseISO } from "date-fns";
import { km } from "date-fns/locale";
import { INVSAMPE, items } from "./data/sample";
import { toKhmerNumeral } from "../../../utils/validation";
import TimeLine from "./TimeLine";
import { Reveal } from "./AnimationWrapper";
import BentoGrid from "./BentoGrid";
import { Svg10, Svg4 } from "./SvgFrame";
import MainInvitation from "./MainInvitation";
import { PlayMusicButton } from "./PlayMusicButton";
import { audioUlr } from "..";
import { useState } from "react";
import GalaxyBackground from "./GalaxyBg";

const HomeScreen = () => {
  return (
    <GalaxyBackground>
      <div className="space-y-4 mx-auto overflow-auto h-full">
        <PlayMusicButton audioUrl={audioUlr} />
        {/* Khmer */}
        <Reveal>
          <MainInvitation data={INVSAMPE} lang="kh" />
        </Reveal>
        {/* Map Section */}
        <Reveal>
          <div className="flex flex-col items-center gap-4 justify-center max-w-sm mx-auto">
            <p
              className="text-[12px] text-white moulpali-regular leading-[2.5] text-center"
              dangerouslySetInnerHTML={{ __html: INVSAMPE.map.desc }}
            />
            <p className="text-[12px] moulpali-regular text-white leading-normal">
              សូមចុចបូតុងខាងក្រោមដើម្បីមើលទីតាំង
            </p>
            <img
              src="/location_scale.webp"
              alt="location"
              className="w-full h-auto object-cover"
            />
            <a
              href="https://maps.app.goo.gl/MnBCj8c3JM6Qo6dVA"
              target="_blank"
              className="bg-white/90 hover:bg-white px-4 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all"
            >
              បើកមើលក្នុង Google Map
            </a>
          </div>
        </Reveal>
        {/* ENGlish */}
        <Reveal>
          <MainInvitation data={INVSAMPE} lang="en" />
        </Reveal>
        {/* Aniversary content */}
        <Reveal>
          <div className="flex flex-col items-center gap-4 pt-2">
            <span className="moulpali-medium text-primary">
              កម្រងរូបភាព
              <span className="dm-serif-text-regular text-2xl font-bold">
                Pre-Wedding
              </span>
            </span>
            <BentoGrid />
          </div>
        </Reveal>
        <Reveal>
          <TimeLine />
        </Reveal>
      </div>
    </GalaxyBackground>
  );
};

export default HomeScreen;
