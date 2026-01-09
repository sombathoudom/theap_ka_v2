import { Pause, Play } from "lucide-react";
import { useMusic } from "../../../context/MusicContext";

export const PlayMusicButton = ({ audioUrl }: { audioUrl: string }) => {
  const { playTrack, pauseTrack, isPlaying, currentTrack } = useMusic();

  const isCurrent = currentTrack === audioUrl;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() =>
          isCurrent && isPlaying ? pauseTrack() : playTrack(audioUrl)
        }
        className="p-3 bg-[#f9c20c] rounded-full text-white animate-spin-slow"
      >
        {isCurrent && isPlaying ? (
          <Pause className="size-4 " />
        ) : (
          <Play className="size-4" />
        )}
      </button>
    </div>
  );
};
