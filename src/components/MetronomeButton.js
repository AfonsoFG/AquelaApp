import React from 'react';

const MetronomeButton = ({children, isPlaying, handleClick, ...otherProps}) =>
    <button onClick={handleClick}  className="btn btn1 btn-success center-block" id="play" {...otherProps}>
        { isPlaying ? 'Stop' : 'Start' }
    </button>;

export default MetronomeButton;