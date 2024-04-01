import PropTypes from "prop-types";
import { forwardRef } from "react";

export const DrumPad = forwardRef(({ audioSrc, letter, handlePlay }, ref) => {
	return (
		<button
			className="w-full aspect-square flex flex-col items-center justify-center bg-[#8D8D8D] rounded-md cursor-default shadow-[1px_2px_5px_0px_#000000] active:shadow-[1px_1px_3px_1px_#000000]"
			onClick={handlePlay}
		>
			<audio src={audioSrc} ref={ref}></audio>
			<span>{letter}</span>
		</button>
	);
});

DrumPad.displayName = "DrumPad";

DrumPad.propTypes = {
	audioSrc: PropTypes.string,
	letter: PropTypes.string,
	handlePlay: PropTypes.func,
};
