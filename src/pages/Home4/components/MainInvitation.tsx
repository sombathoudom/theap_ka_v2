import React from "react";
import { InvType, Lang } from "./data/sample";
import { Svg10, Svg4 } from "./SvgFrame";
import { format, parseISO } from "date-fns";
import { km, enUS } from "date-fns/locale";
import { toKhmerNumeral } from "../../../utils/validation";

const MainInvitation = ({ data, lang }: { data: InvType; lang: Lang }) => {
  return (
    <section className="h-dvh z-10 space-y-6 w-full flex flex-col items-center justify-center">
      <div className="space-y-6">
        {/* header */}
        <div>
          <h1
            className={`text-center  leading-loose ${
              lang === "kh"
                ? "text-2xl moulpali-medium"
                : "text-4xl fleur-de-leah-regular "
            } text-primary`}
          >
            {data.header[lang].main}
          </h1>
          <div className="flex items-center justify-center">
            <Svg10 className="h-6 w-full" />
          </div>
        </div>
        {/* parent content */}
        <div className="grid grid-cols-2 gap-4">
          {data.parents[lang].map((p, i) => (
            <div key={i} className="mx-auto max-w-sm container">
              <div className="grid grid-cols-3 items-center">
                <span
                  className={`text-[12px] text-white ${
                    lang === "kh" ? "metal-regular" : "dm-serif-text-regular"
                  } leading-8 whitespace-nowrap`}
                >
                  {p.name1.label}
                </span>
                <p
                  className={`text-primary text-sm ${
                    lang === "kh" ? "moul-regular" : "dm-serif-text-regular"
                  } leading-8 text-center whitespace-nowrap col-span-2 `}
                >
                  {p.name1.value}
                </p>
              </div>
              <div className="grid grid-cols-3 items-center">
                <span
                  className={`text-[12px] text-white ${
                    lang === "kh" ? "metal-regular" : "dm-serif-text-regular"
                  } leading-8 whitespace-nowrap`}
                >
                  {p.name2.label}
                </span>
                <p
                  className={`text-primary text-sm ${
                    lang === "kh" ? "moul-regular" : "dm-serif-text-regular"
                  } leading-8 text-center whitespace-nowrap col-span-2 `}
                >
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
          <h1
            className={`text-center text-primary  ${
              lang == "kh" ? "text-sm" : "text-xl"
            } moul-regular  leading-10`}
          >
            {data.header[lang].title}
          </h1>
          <div className="flex items-center justify-center">
            <Svg4 className="h-4 w-full" />
          </div>
        </div>
        <p
          className={`text-center  text-white ${
            lang === "kh"
              ? "text-[12px] moulpali-regular leading-6"
              : "tangerine-regular text-2xl leading-10"
          } `}
          dangerouslySetInnerHTML={{ __html: data.header[lang].desc }}
        />
      </div>

      {/* Couple content */}
      <div className="grid grid-cols-3 w-full  max-w-sm">
        <div className="flex flex-col justify-center items-center">
          <span
            className={` text-white ${
              lang === "kh"
                ? "text-[12px] moulpali-regular"
                : "text-2xl tangerine-bold"
            } leading-8 whitespace-nowrap text-center`}
          >
            {data.couple[lang].name1.label}
          </span>
          <p
            className={`text-sm ${
              lang === "kh"
                ? "text-[12px] moul-regular whitespace-nowrap"
                : "dm-serif-text-regular whitespace-prewrap"
            }   text-primary leading-2 text-center `}
          >
            {data.couple[lang].name1.value}
          </p>
        </div>
        <div className="text-center">
          <img src="/dl-symbol.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span
            className={`text-white ${
              lang === "kh"
                ? "text-[12px] moulpali-regular"
                : "text-2xl tangerine-bold"
            } leading-8 whitespace-nowrap text-center`}
          >
            {data.couple[lang].name2.label}
          </span>
          <p
            className={`text-sm  ${
              lang === "kh" ? "moul-regular" : "dm-serif-text-regular"
            }  text-primary leading-8 text-center whitespace-nowrap`}
          >
            {data.couple[lang].name2.value}
          </p>
        </div>
      </div>
      {/* Event content */}
      <div className="grid grid-cols-3 w-full items-center text-primary max-w-sm">
        {/* left */}
        <p
          className={` ${
            lang === "kh" ? "text-sm moul-regular" : "tangerine-bold text-2xl"
          } leading-8 text-center whitespace-nowrap border-primary border-y py-2`}
        >
          {format(parseISO(data.date), lang === "kh" ? "ថ្ងៃ eeee" : "eeee", {
            locale: lang === "kh" ? km : enUS,
          })}
        </p>
        {/* mid */}
        <div className="text-center">
          <p
            className={` ${
              lang === "kh" ? "text-lg moul-regular" : "tangerine-bold text-2xl"
            } leading-8 text-center whitespace-nowrap`}
          >
            {format(parseISO(data.date), lang === "kh" ? "ខែ MMMM" : "MMMM", {
              locale: lang === "kh" ? km : enUS,
            })}
          </p>
          <p
            className={` text-5xl ${
              lang === "kh" ? " moul-regular" : "tangerine-bold"
            } leading-normal text-center whitespace-nowrap`}
          >
            {lang === "kh"
              ? toKhmerNumeral(
                  format(parseISO(data.date), "dd", {
                    locale: km,
                  })
                )
              : format(parseISO(data.date), "dd", {
                  locale: enUS,
                })}
          </p>
          <p
            className={` ${
              lang === "kh" ? "text-lg moul-regular" : "text-5xl tangerine-bold"
            } leading-8 text-center whitespace-nowrap`}
          >
            {lang === "kh"
              ? toKhmerNumeral(
                  format(parseISO(data.date), "yyyy", {
                    locale: km,
                  })
                )
              : format(parseISO(data.date), "yyyy", {
                  locale: enUS,
                })}
          </p>
        </div>
        {/* right */}
        <p
          className={` ${
            lang === "kh" ? "text-sm moul-regular" : "text-2xl tangerine-bold"
          } leading-8 text-center whitespace-nowrap border-primary border-y py-2`}
        >
          {lang === "kh"
            ? toKhmerNumeral(
                format(parseISO(data.date), "ម៉ោង h:mm ល្ងាច", {
                  locale: km,
                })
              )
            : format(parseISO(data.date), "h:mm a", {
                locale: enUS,
              })}
        </p>
      </div>
    </section>
  );
};

export default MainInvitation;
