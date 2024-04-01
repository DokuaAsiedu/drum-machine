import { useMemo, useRef, useState } from "react";
import { drumData, kitName } from "./config";
import { DrumPad, Toggle, Volume, Display } from "./components";

export default function App() {
	const [power, setPower] = useState(true);
	const [bank, setBank] = useState(false);
	const [displayText, setDisplayText] = useState("");
	const [volume, setVolume] = useState(50);
	const audioRef = useRef([]);
	const volumeRef = useRef(null);

	const handleDisplay = (text) => {
		setDisplayText(text);
	};

	const handlePower = () => {
		const newPower = !power;
		setPower(newPower);
		handleDisplay("");
		if (newPower) {
			volumeRef.current.disabled = false;
		} else {
			volumeRef.current.disabled = true;
		}
	};

	const kit = useMemo(() => {
		return !bank ? 0 : 1;
	}, [bank]);

	const handleBank = () => {
		if (power) {
			const newBank = !bank;
			const newKit = !newBank ? 0 : 1;
			setBank(newBank);
			setDisplayText(kitName[newKit]);
		}
	};

	const handleVolume = (event) => {
		const vol = event.target.value;
		setVolume(vol);
		handleDisplay(`Volume: ${vol}`);
	};

	const assignRef = (el, index) => {
		audioRef.current[index] = el;
	};

	const playAudio = (index) => {
		// console.log("playing")
		// console.log(index, audioRef.current[index])
		const audio = audioRef.current[index];
		if (power) {
			handleDisplay(drumData[index].audioName[kit]);
			// console.log(drumData[index].audioName)
			audio.volume = volume / 100;
			audio.play();
		}
	};

	return (
		<div className="h-full min-h-screen py-12 flex flex-col items-center justify-center relative bg-[#8D8D8D] text-black font-bold">
			<div className="w-11/12 sm:w-1/2 max-w-[1000px] grid grid-cols-[60%_40%] bg-[#B3B3B3] border-4 border-[#FFA501] p-4">
				<div className="h-full grid grid-rows-[1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] place-items-center gap-2 sm:gap-4">
					{drumData.map((item, index) => {
						return (
							<DrumPad
								ref={(el) => {
									assignRef(el, index);
								}}
								key={`item-${index}`}
								audioSrc={item.audioSrc[kit]}
								letter={item.letter}
								handlePlay={() => playAudio(index)}
							/>
						);
					})}
				</div>
				<div className="h-full flex flex-col items-center justify-center gap-1 sm:gap-4">
					<Toggle name="Power" handleClick={handlePower} toggle={power} />
					<Display displayText={displayText} />
					<Volume volume={volume} handleChange={handleVolume} ref={volumeRef} />
					<Toggle name="Bank" handleClick={handleBank} toggle={bank} />
				</div>
			</div>
		</div>
	);
}
