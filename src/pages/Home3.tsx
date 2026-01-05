import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Home3() {
  const [videoSrc, setVideoSrc] = useState("/video_second.mp4");
  const [currentVideo, setCurrentVideo] = useState("first");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // iPhone 14 Pro Max: 430px, iPhone 14/13: 390px, iPhone 13 mini: 375px
      if (window.innerWidth <= 430) {
        setVideoSrc(
          currentVideo === "first" ? "/video_second_2.mp4" : "/video_three.mp4"
        );
      } else {
        setVideoSrc(
          currentVideo === "first" ? "/video_second.mp4" : "/video_first.mp4"
        );
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentVideo]);

  const handleVideoEnd = () => {
    if (currentVideo === "first") {
      setCurrentVideo("second");
      if (window.innerWidth <= 430) {
        setVideoSrc("/video_three.mp4");
      } else {
        setVideoSrc("/video_first.mp4");
      }
    }
  };

  return (
    <section className="flex justify-center items-center flex-col h-screen w-full max-w-lg md:max-w-2xl mx-auto relative">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop={currentVideo === "second"}
          muted
          playsInline
          preload="auto"
          src={videoSrc}
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full max-w-sm">
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-white text-lg font-semibold moulpali-medium drop-shadow-lg">
              សូមគោរពអញ្ចើញ
            </p>
            <div className="relative w-full max-w-sm">
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-sm text-[#ebeb02]  moul-regular  drop-shadow-lg w-full">
                លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និងភរិយា (កុលាប)
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
        </div>
      </div>
    </section>
  );
}
