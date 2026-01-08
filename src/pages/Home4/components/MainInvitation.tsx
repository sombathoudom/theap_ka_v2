import React from "react";
import { InvType, Lang } from "./data/sample";
import { Svg10, Svg4 } from "./SvgFrame";
import { format, parseISO } from "date-fns";
import { km } from "date-fns/locale";
import { toKhmerNumeral } from "../../../utils/validation";

const MainInvitation = ({ data, lang }: { data: InvType; lang: Lang }) => {
  return (
    <section className="h-dvh z-10 space-y-6 w-full flex flex-col items-center justify-center px-6">
      <div className="space-y-6">
        {/* header */}
        <div>
          <h1 className="text-center text-3xl leading-loose moulpali-medium text-primary">
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
            {data.header[lang].title}
          </h1>
          <div className="flex items-center justify-center">
            <Svg4 className="h-4 w-full" />
          </div>
        </div>
        <p
          className="text-center text-[12px] text-white moulpali-regular leading-[2.5]"
          dangerouslySetInnerHTML={{ __html: data.header[lang].desc }}
        />
      </div>

      {/* Couple content */}
      <div className="grid grid-cols-3 w-full gap-4 max-w-sm">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
            {data.couple[lang].name1.label}
          </span>
          <p className="text-sm moulpali-medium text-primary leading-8 text-center whitespace-nowrap">
            {data.couple[lang].name1.value}
          </p>
        </div>
        <div className="text-center">symbol</div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[12px] text-white moulpali-regular leading-8 whitespace-nowrap text-center">
            {data.couple[lang].name2.label}
          </span>
          <p className="text-sm moulpali-medium  text-primary leading-8 text-center whitespace-nowrap">
            {data.couple[lang].name2.value}
          </p>
        </div>
      </div>
      {/* Event content */}
      <div className="grid grid-cols-3 w-full items-center text-primary max-w-sm">
        {/* left */}
        <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
          {format(parseISO(data.date), "ថ្ងៃ eeee", {
            locale: km,
          })}
        </p>
        {/* mid */}
        <div className="text-center">
          <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
            {format(parseISO(data.date), "ខែ MMMM", {
              locale: km,
            })}
          </p>
          <p className="text-5xl moulpali-regular leading-normal text-center whitespace-nowrap">
            {toKhmerNumeral(
              format(parseISO(data.date), "dd", {
                locale: km,
              })
            )}
          </p>
          <p className="text-lg moulpali-regular leading-8 text-center whitespace-nowrap">
            {toKhmerNumeral(
              format(parseISO(data.date), "yyyy", {
                locale: km,
              })
            )}
          </p>
        </div>
        {/* right */}
        <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-primary border-y py-2">
          {toKhmerNumeral(
            format(parseISO(data.date), "ម៉ោង HH:mm ល្ងាច", {
              locale: km,
            })
          )}
        </p>
      </div>
    </section>
  );
};

export default MainInvitation;
