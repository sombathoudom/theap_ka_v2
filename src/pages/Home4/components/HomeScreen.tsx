import React from "react";
import { format, parseISO } from "date-fns";
import { km } from "date-fns/locale";
import { INVSAMPE, toKhmerNumeral } from "./data/sample";

const HomeScreen = () => {
  const formattedKhmer = format(
    parseISO("2026-02-22T05:00:00"),
    "eeee ថ្ងៃទី dd ខែ MMMM ឆ្នាំ yyyy",
    {
      locale: km,
    }
  );

  console.log(toKhmerNumeral(formattedKhmer));
  return (
    <div>
      <section className="h-screen space-y-6 w-full flex flex-col items-center justify-center px-4">
        <div className="space-y-2">
          {/* header */}
          <h1 className="text-center text-3xl leading-loose moulpali-medium">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h1>
          {/* parent content */}
          <div className="grid grid-cols-2 gap-4">
            {INVSAMPE.parents.map((p, i) => (
              <div key={i} className="mx-auto max-w-sm container">
                <div className="grid grid-cols-3 items-center">
                  <span className="text-[12px] moulpali-regular leading-8 whitespace-nowrap">
                    លោក
                  </span>
                  <p className="text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2">
                    {p.name1}
                  </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <span className="text-[12px] moulpali-regular leading-8 whitespace-nowrap">
                    លោកស្រី
                  </span>
                  <p className="text-sm moulpali-medium leading-8 text-center whitespace-nowrap col-span-2 ">
                    {p.name2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invitation message */}
        <div className="space-y-1">
          <h1 className="text-center text-lg moulpali-regular leading-10">
            {INVSAMPE.header.title}
          </h1>
          <p className="text-center">{INVSAMPE.header.desc}</p>
        </div>

        {/* Couple content */}
        <div className="grid grid-cols-3 w-full gap-4">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[12px] moulpali-regular leading-8 whitespace-nowrap text-center">
              កូនប្រុសនាម
            </span>
            <p className="text-sm moulpali-medium leading-8 text-center whitespace-nowrap">
              {INVSAMPE.couple.name1}
            </p>
          </div>
          <div className="text-center">symbol</div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-[12px] moulpali-regular leading-8 whitespace-nowrap text-center">
              កូនស្រីនាម
            </span>
            <p className="text-sm moulpali-medium leading-8 text-center whitespace-nowrap">
              {INVSAMPE.couple.name2}
            </p>
          </div>
        </div>
        {/* Event content */}
        <div className="grid grid-cols-3 w-full gap-4 items-center">
          {/* left */}
          <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-black border-y py-2">
            {format(parseISO(INVSAMPE.date), "ថ្ងៃ eeee", {
              locale: km,
            })}
          </p>
          {/* mid */}
          <div className="text-center">
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap">
              {format(parseISO(INVSAMPE.date), "ខែ MMMM", {
                locale: km,
              })}
            </p>
            <p className="text-3xl moulpali-regular leading-normal text-center whitespace-nowrap">
              {toKhmerNumeral(
                format(parseISO(INVSAMPE.date), "dd", {
                  locale: km,
                })
              )}
            </p>
            <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap">
              {toKhmerNumeral(
                format(parseISO(INVSAMPE.date), "yyyy", {
                  locale: km,
                })
              )}
            </p>
          </div>
          {/* right */}
          <p className="text-sm moulpali-regular leading-8 text-center whitespace-nowrap border-black border-y py-2">
            {format(parseISO(INVSAMPE.date), "ម៉ោង HH:mm ល្ងាច", {
              locale: km,
            })}
          </p>
        </div>
      </section>
      {/* Map Section */}

      {/* Aniversary content */}
      <div className="flex flex-col items-center justify-center pt-2">
        <p className="moulpali-medium text-[#f9c20c]">
          កម្រងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង
        </p>
        <div className="grid grid-cols-2 gap-4 p-4  ">
          <img
            src="/photo_album_1.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <img
            src="/photo_album_2.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <img
            src="/photo_album_3.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <img
            src="/photo_album_4.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <img
            src="/photo_album_5.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <img
            src="/photo_album_6.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
