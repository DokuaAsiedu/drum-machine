import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Volume = forwardRef(({ volume, handleChange }, ref) => {
	return (
		<div className="w-5/6">
			<input
				type="range"
				min="0"
				max="max"
				value={volume}
				onChange={handleChange}
				ref={ref}
				className="w-full"
			/>
		</div>
	);
});

Volume.displayName = "Volume";

Volume.propTypes = {
	volume: PropTypes.number,
	handleChange: PropTypes.func,
};
