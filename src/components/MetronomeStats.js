import React from 'react';

const MetronomeStats = ({bpm, beatsPerMeasure, beatNumber}) => (
	<div className="batidas mt20 clearfix">
		<div className="pull-left"><b><span className="verde">{bpm}</span> beats per minute</b></div>
		<div className="pull-right text-right"><b><span className="verde">{beatNumber}/{beatsPerMeasure}</span></b></div>
	</div>
);

export default MetronomeStats;