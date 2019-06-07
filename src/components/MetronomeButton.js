import React from 'react';

const MetronomeButton = ({children, isPlaying, handleClick, ...otherProps}) => 

    <button onClick={handleClick} className="btn btn1 center-block btn-success" id="play" {...otherProps}>
        { isPlaying ? 'Stop' : 'Start' }
    </button>
;

export default MetronomeButton;