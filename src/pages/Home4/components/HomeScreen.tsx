import React, { useRef } from "react";
import { format, parseISO } from "date-fns";
import { km } from "date-fns/locale";
import { INVSAMPE, items } from "./data/sample";
import { toKhmerNumeral } from "../../../utils/validation";
import TimeLine from "./TimeLine";
import { Reveal } from "./AnimationWrapper";
import BentoGrid from "./BentoGrid";

const HomeScreen = () => {
  return (
    <div className="space-y-6">
      {/* First Content */}
      <Reveal>
        <section className="h-dvh z-10 space-y-6 w-full flex flex-col items-center justify-center px-6">
          <div className="space-y-2">
            {/* header */}
            <div>
              <h1 className="text-center text-3xl leading-loose moulpali-medium text-primary">
                {INVSAMPE.header.kh.main}
              </h1>
              <div className="text-center">Symbol</div>
            </div>
            {/* parent content */}
            <div className="grid grid-cols-2 gap-4">
              {INVSAMPE.parents.kh.map((p, i) => (
                <div key={i} className="mx-auto max-w-sm container">
                  <div className="grid grid-cols-3 items-center">
                    <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap">
                      {p.name1.label}
                    </span>
                    <p className=" text-primary text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2">
                      {p.name1.value}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap">
                      {p.name2.label}
                    </span>
                    <p className="text-primary text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2 ">
                      {p.name2.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Invitation message */}
          <div className="space-y-3 max-w-md">
            <div>
              <h1 className="text-center text-primary text-lg moulpali-regular leading-10">
                {INVSAMPE.header.kh.title}
              </h1>
              <div className="text-center">Symbol</div>
            </div>
            <p
              className="text-center text-[12px] text-white moulpali-regular leading-[2.5]"
              dangerouslySetInnerHTML={{ __html: INVSAMPE.header.kh.desc }}
            />
          </div>

          {/* Couple content */}
          <div className="grid grid-cols-3 w-full gap-4 max-w-sm">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
                {INVSAMPE.couple.kh.name1.label}
              </span>
              <p className="text-sm moulpali-medium text-primary leading-8 text-center whitespace-nowrap">
                {INVSAMPE.couple.kh.name1.value}
              </p>
            </div>
            <div className="text-center">symbol</div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
                {INVSAMPE.couple.kh.name2.label}
              </span>
              <p className="text-sm moulpali-medium  text-primary leading-8 text-center whitespace-nowrap">
                {INVSAMPE.couple.kh.name2.value}
              </p>
            </div>
          </div>
          {/* Event content */}
          <div className="grid grid-cols-3 w-full items-center text-primary max-w-sm">
            {/* left */}
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
              {format(parseISO(INVSAMPE.date), "ថ្ងៃ eeee", {
                locale: km,
              })}
            </p>
            {/* mid */}
            <div className="text-center">
              <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
                {format(parseISO(INVSAMPE.date), "ខែ MMMM", {
                  locale: km,
                })}
              </p>
              <p className="text-5xl moulpali-regular leading-normal text-center whitespace-nowrap">
                {toKhmerNumeral(
                  format(parseISO(INVSAMPE.date), "dd", {
                    locale: km,
                  })
                )}
              </p>
              <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
                {toKhmerNumeral(
                  format(parseISO(INVSAMPE.date), "yyyy", {
                    locale: km,
                  })
                )}
              </p>
            </div>
            {/* right */}
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
              {toKhmerNumeral(
                format(parseISO(INVSAMPE.date), "ម៉ោង HH:mm ល្ងាច", {
                  locale: km,
                })
              )}
            </p>
          </div>
        </section>
      </Reveal>
      {/* Map Section */}
      <Reveal>
        <div className="flex flex-col items-center gap-4 justify-center max-w-md mx-auto">
          <p
            className="text-[12px] text-white moulpali-regular leading-[2.5] text-center"
            dangerouslySetInnerHTML={{ __html: INVSAMPE.map.desc }}
          />

          <p className="text-[12px] moulpali-regular text-white leading-normal">
            សូមស្កេន <span className="font-sans">QR</span>{" "}
            ខាងក្រោមដើម្បីមើលទីតាំង
          </p>
          <button className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all">
            ឬចុចទីនេះ
          </button>
        </div>
      </Reveal>
      <Reveal>
        <section className="h-dvh space-y-6 w-full flex flex-col items-center justify-center px-6">
          <div className="space-y-2">
            {/* header */}
            <div>
              <h1 className="text-center text-3xl leading-loose moulpali-medium text-primary">
                {INVSAMPE.header.en.main}
              </h1>
              <div className="text-center">Symbol</div>
            </div>
            {/* parent content */}
            <div className="grid grid-cols-2 gap-4">
              {INVSAMPE.parents.en.map((p, i) => (
                <div key={i} className="mx-auto max-w-sm container">
                  <div className="grid grid-cols-3 items-center">
                    <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap">
                      {p.name1.label}
                    </span>
                    <p className=" text-primary text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2">
                      {p.name1.value}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap">
                      {p.name2.label}
                    </span>
                    <p className="text-primary text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2 ">
                      {p.name2.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Invitation message */}
          <div className="space-y-3">
            <div>
              <h1 className="text-center text-primary text-lg moulpali-regular leading-10">
                {INVSAMPE.header.en.title}
              </h1>
              <div className="text-center">Symbol</div>
            </div>
            <p
              className="text-center text-[12px] text-white moulpali-regular leading-[2.5] max-w-md"
              dangerouslySetInnerHTML={{ __html: INVSAMPE.header.en.desc }}
            />
          </div>

          {/* Couple content */}
          <div className="grid grid-cols-3 w-full gap-4 max-w-sm">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
                {INVSAMPE.couple.en.name1.label}
              </span>
              <p className="text-sm moulpali-medium text-primary leading-8 text-center whitespace-nowrap">
                {INVSAMPE.couple.en.name1.value}
              </p>
            </div>
            <div className="text-center">symbol</div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
                {INVSAMPE.couple.en.name2.label}
              </span>
              <p className="text-sm moulpali-medium  text-primary leading-8 text-center whitespace-nowrap">
                {INVSAMPE.couple.en.name2.value}
              </p>
            </div>
          </div>
          {/* Event content */}
          <div className="grid grid-cols-3 w-full items-center text-primary max-w-sm">
            {/* left */}
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
              {format(parseISO(INVSAMPE.date), "ថ្ងៃ eeee", {
                locale: km,
              })}
            </p>
            {/* mid */}
            <div className="text-center">
              <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
                {format(parseISO(INVSAMPE.date), "ខែ MMMM", {
                  locale: km,
                })}
              </p>
              <p className="text-5xl moulpali-regular leading-normal text-center whitespace-nowrap">
                {toKhmerNumeral(
                  format(parseISO(INVSAMPE.date), "dd", {
                    locale: km,
                  })
                )}
              </p>
              <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
                {toKhmerNumeral(
                  format(parseISO(INVSAMPE.date), "yyyy", {
                    locale: km,
                  })
                )}
              </p>
            </div>
            {/* right */}
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
              {toKhmerNumeral(
                format(parseISO(INVSAMPE.date), "ម៉ោង HH:mm ល្ងាច", {
                  locale: km,
                })
              )}
            </p>
          </div>
        </section>
      </Reveal>
      {/* Aniversary content */}
      <Reveal>
        <div className="flex flex-col items-center gap-4 pt-2">
          <p className="moulpali-medium text-primary">
            កម្រងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង
          </p>
          <BentoGrid />
        </div>
      </Reveal>
      <TimeLine />
    </div>
  );
};

export default HomeScreen;
