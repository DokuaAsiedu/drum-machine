import PropTypes from "prop-types";

export function Toggle({ name, handleClick, toggle }) {
	return (
		<div
			className="flex flex-col items-center justify-start gap-1"
			onClick={handleClick}
		>
			<p>{name}</p>
			<div className="w-12 h-6 bg-black p-1">
				<div
					className={`w-1/2 h-full bg-[#2200FF] ${
						toggle ? "translate-x-full" : ""
					}`}
				></div>
			</div>
		</div>
	);
}

Toggle.propTypes = {
	name: PropTypes.string,
	handleClick: PropTypes.func,
	toggle: PropTypes.bool,
};
