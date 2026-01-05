import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home2() {
  const [videoSrc, setVideoSrc] = useState("/video_three.mp4");

  useEffect(() => {
    const handleResize = () => {
      // iPhone 14 Pro Max: 430px, iPhone 14/13: 390px, iPhone 13 mini: 375px
      if (window.innerWidth <= 430) {
        setVideoSrc("/video_three.mp4");
      } else {
        setVideoSrc("/video_first.mp4");
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex justify-center items-center flex-col h-screen w-full max-w-lg md:max-w-2xl mx-auto relative">
      <div className="absolute inset-0 w-full h-full">
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={videoSrc}
          className="w-full h-full object-cover"
        ></video>
        {/* <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full max-w-sm">
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-white text-lg font-semibold moulpali-medium drop-shadow-lg">
              សូមគោរពអញ្ចើញ
            </p>
            <div className="relative w-full max-w-sm">
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-[#ebeb02]  moul-regular  drop-shadow-lg w-full">
                លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និង ភរិយា
              </p>
              <img
                src="https://theapka.com/storage/templates/chhay/images/frame_1.png"
                className="w-full h-[50px] max-w-xl mx-auto"
              />
            </div>
          </div>
          <Link
            to="/dw"
            className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all"
          >
            ចុចបើកធៀប
          </Link>
        </div> */}
      </div>
    </section>
  );
}
