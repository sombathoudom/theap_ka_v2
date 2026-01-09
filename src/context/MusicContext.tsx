import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface MusicContextType {
  isPlaying: boolean;
  currentTrack: string | null;
  playTrack: (url: string) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  volume: number;
  setVolume: (value: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5);

  // ប្រើ useRef ដើម្បីរក្សាទុក HTMLAudioElement តែមួយគត់ក្នុង App
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    // នៅពេលចប់បទចម្រៀង ឱ្យដូរ status មក pause វិញ
    audioRef.current.onended = () => setIsPlaying(false);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playTrack = (url: string) => {
    if (audioRef.current) {
      if (currentTrack !== url) {
        audioRef.current.src = url;
        setCurrentTrack(url);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) pauseTrack();
    else if (currentTrack)
      audioRef.current?.play().then(() => setIsPlaying(true));
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTrack,
        playTrack,
        pauseTrack,
        togglePlay,
        volume,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook សម្រាប់ប្រើប្រាស់ងាយស្រួល
export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within a MusicProvider");
  return context;
};
