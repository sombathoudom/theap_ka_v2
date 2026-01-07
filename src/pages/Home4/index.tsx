import { useState, useTransition } from "react";
import SplashScreen from "./components/SplashScreen";
import { useParams } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CountdownTimer from "./components/CountdownTimer";
import { INVSAMPE } from "./components/data/sample";

const Home4 = () => {
  const { id } = useParams();
  const [openInvitation, setOpenInvitation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // this should filter from api for use data mock up
  const sample = {
    id: id,
    name: "លោក ចាំង សុវណ្ណរិទ្ធីឌីរតនះ​ និងភរិយា (កុលាប)",
  };

  // handle open door
  const handleOpenDoor = () => {
    setIsLoading(true);

    // Simulate loading for 2 seconds (2000ms)
    setTimeout(() => {
      setIsLoading(false);
      setOpenInvitation(true);
    }, 2000);
  };
  return (
    <div className="mx-auto container h-screen">
      {/* 1. Main Content (The Invitation) */}
      {openInvitation && <HomeScreen />}
      {/* 2. Splash Screen */}
      {!openInvitation && !isLoading && (
        <>
          <SplashScreen name={sample.name} onClick={handleOpenDoor} />
        </>
      )}

      {/* 3. Loading Overlay with Fade Backdrop */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-500">
          {/* Animated Spinner */}
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <p className="mt-4 text-white font-moulpali animate-pulse">
            សូមរង់ចាំបន្តិច...
          </p>
        </div>
      )}
    </div>
  );
};

export default Home4;
