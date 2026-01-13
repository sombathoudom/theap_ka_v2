import { useEffect, useState, useRef } from "react";
import SplashScreen from "./components/SplashScreen";
import { useParams } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import { useMusic } from "../../context/MusicContext";
import { AnimatePresence, motion } from "framer-motion";

export const audioUlr = "/yung kai - Blue Piano Cover Sheet Music.mp3";
const Home4 = () => {
  const { id } = useParams();
  const [stage, setStage] = useState<"intro" | "splash" | "main">("intro");
  const videoRef = useRef<HTMLVideoElement>(null);
  // context
  const { playTrack } = useMusic();

  // this should filter from api for use data mock up
  const sample = {
    id: id,
    name: "លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និងភរិយា (កុលាប)",
  };

  // handle open door
  const handleOpenDoor = () => {
    setStage("main");
  };

  useEffect(() => {
    if (stage === "main") {
      playTrack(audioUlr);
    }
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.85;
    }
  }, [stage]);

  return (
    <div className="relative w-full h-screen overflow-hidden max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {/* ១. ដំណាក់កាល Video Intro */}
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={() => setStage("splash")} // នៅពេល Video ចប់ វានឹងដូរទៅ Splash
              className="w-full h-full object-cover"
            >
              <source src="/intro_video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}

        {/* ២. ដំណាក់កាល Splash Screen */}
        {stage === "splash" && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
          >
            <SplashScreen name={sample.name} onClick={handleOpenDoor} />
          </motion.div>
        )}

        {/* ៣. ដំណាក់កាល Main Content (គេហទំព័រដើម) */}
        {stage === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full"
          >
            <HomeScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home4;
