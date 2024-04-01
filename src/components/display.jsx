import PropTypes from "prop-types";

export function Display({ displayText }) {
	return (
		<div className="w-4/5 flex flex-col items-center justify-center py-1 md:py-2 px-4 text-sm sm:text-md text-center bg-[#8D8D8D]">
			<p>{displayText ? displayText : <span>&nbsp;</span>}</p>
		</div>
	);
}

Display.propTypes = {
	displayText: PropTypes.string,
};
