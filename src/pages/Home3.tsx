import { useState, useEffect, useRef } from "react";
import MusicPlayer from "../components/MusicPlayer";
export default function Home3() {
  const [videoSrc, setVideoSrc] = useState("/video_second.mp4");
  const [currentVideo, setCurrentVideo] = useState("first");
  const videoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const [openInvitation, setOpenInvitation] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  const handleOpenInvitation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setOpenInvitation(true);
      setIsTransitioning(false);
    }, 500);
  };
  useEffect(() => {
    const handleResize = () => {
      // iPhone 14 Pro Max: 430px, iPhone 14/13: 390px, iPhone 13 mini: 375px
      if (window.innerWidth <= 430) {
        setVideoSrc(
          currentVideo === "first"
            ? "/video_second_2_webm.webm"
            : "/video_three.mp4"
        );
      } else {
        setVideoSrc(
          currentVideo === "first"
            ? "/video_second_webm.webm"
            : "/video_first.mp4"
        );
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentVideo]);

  useEffect(() => {
    // Preload and prepare second video
    if (secondVideoRef.current && currentVideo === "first") {
      secondVideoRef.current.currentTime = 0;
      secondVideoRef.current.load();
    }

    // Preload first video on mobile to avoid delay
    if (videoRef.current && currentVideo === "first") {
      videoRef.current.load();
    }
  }, [currentVideo, videoSrc]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && currentVideo === "first") {
      const video = videoRef.current;
      // Start second video 1 second before first video ends
      if (video.duration - video.currentTime <= 1.0 && !showSecondVideo) {
        if (secondVideoRef.current) {
          secondVideoRef.current.currentTime = 0;
          secondVideoRef.current.play();
          // Start crossfade slightly early
          setTimeout(() => {
            setShowSecondVideo(true);
          }, 200);
        }
      }
    }
  };

  const handleVideoEnd = () => {
    if (currentVideo === "first" && !showSecondVideo) {
      setCurrentVideo("second");
      setShowSecondVideo(true);
    }
  };

  return (
    <section className="flex justify-center items-center flex-col h-screen w-full max-w-lg md:max-w-2xl mx-auto relative overflow-hidden">
      <MusicPlayer />
      <div className="absolute inset-0 w-full h-full">
        {!openInvitation ? (
          <>
            {/* Black background to prevent any flash */}
            <div className="absolute inset-0 bg-black"></div>

            {/* First Video */}
            <video
              ref={videoRef}
              key={videoSrc}
              autoPlay
              muted
              playsInline
              preload="metadata"
              src={videoSrc}
              onEnded={handleVideoEnd}
              onTimeUpdate={handleVideoTimeUpdate}
              onCanPlay={() => {
                // Ensure video plays immediately when ready
                if (videoRef.current && currentVideo === "first") {
                  videoRef.current.play().catch(console.log);
                }
              }}
              className={`w-full h-full object-cover relative z-10 transition-opacity duration-200 ${
                isTransitioning || showSecondVideo ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* <source src={videoSrc} type="video/mp4" /> */}
            </video>

            {/* Second Video - Preloaded and ready */}
            <video
              ref={secondVideoRef}
              loop
              muted
              playsInline
              preload="auto"
              src={
                window.innerWidth <= 430
                  ? "/video_three.mp4"
                  : "/video_first.mp4"
              }
              className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-200 ${
                showSecondVideo ? "opacity-100" : "opacity-0"
              }`}
            >
              <source
                src={
                  window.innerWidth <= 430
                    ? "/video_three.mp4"
                    : "/video_first.mp4"
                }
                type="video/mp4"
              />
            </video>
            <div
              className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full max-w-sm z-20 transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col items-center gap-2 w-full">
                <p className="text-white text-lg font-semibold moulpali-medium drop-shadow-lg">
                  សូមគោរពអញ្ចើញ
                </p>
                <div className="relative w-full max-w-sm">
                  <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-sm text-[#f9c20c]  moul-regular  drop-shadow-lg w-full">
                    លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និងភរិយា (កុលាប)
                  </p>
                  <img
                    src="https://theapka.com/storage/templates/chhay/images/frame_1.png"
                    className="w-full h-[50px] max-w-xl mx-auto"
                  />
                </div>
              </div>
              <button
                onClick={handleOpenInvitation}
                disabled={isTransitioning}
                className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all"
              >
                ចុចបើកធៀប
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              src="/background_paper.png"
              className="w-full h-full object-cover fixed inset-0"
            ></img>
            <div className="relative w-full h-full overflow-y-auto">
              <div className="flex items-center justify-center pt-28">
                <img
                  loading="eager"
                  src="/paper_1.png"
                  alt=""
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center ">
                <button
                  onClick={handleOpenInvitation}
                  disabled={isTransitioning}
                  className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg font-semibold moulpali-medium shadow-lg transition-all"
                >
                  រឺចុចទីនេះដើម្បីមើលទីតាំង
                </button>
              </div>
              <div className="flex items-center justify-center pt-12">
                <img
                  src="/paper_2_eng.png"
                  alt=""
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
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
              <div className="flex flex-col items-center justify-center pt-12">
                <img
                  src="/program_1.png"
                  alt=""
                  className="w-full max-w-2xl h-auto object-contain"
                />
                <img
                  src="/program_2.png"
                  alt=""
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
              {/* Add more scrollable content here */}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
