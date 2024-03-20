import { HiSpeakerWave } from "react-icons/hi2";
interface Props {
    name: string;
}

export default function PronounceBreed({ name }: Props) {
  const speak = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = name;
    window.speechSynthesis.speak(msg);
  };

  return (
    <button className="text-3xl" onClick={speak}>
      <HiSpeakerWave />
    </button>
  );
}
