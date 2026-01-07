import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import Song from "../assets/mp3/yung kai - Blue Piano Cover Sheet Music.mp3";

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      const audio = audioRef.current;
      if (audio) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };

    tryPlay();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={Song} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="bg-sand text-white p-2 rounded-full shadow transition"
      >
        <div className={`${isPlaying ? "animate-spin-slow" : ""}`}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </div>
      </button>
    </div>
  );
}

export default MusicPlayer;
