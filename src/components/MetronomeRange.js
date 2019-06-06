import React from 'react';

const MetronomeRange = ({handleExit, handleChange, ...otherProps}) => (
	<input
	type="range"
	min="60"
	max="240"
	onChange={(e) => handleChange(e.currentTarget.value)}
	className="slider"
	id="slider"
	{...otherProps} />
);

export default MetronomeRange;