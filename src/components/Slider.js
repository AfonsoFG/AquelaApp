import React from 'react';

const Slider = ({var1, var2, ...otherProps}) => <input type="range" min="60" max="240" value={var1} onChange={(e) => var2(e.target.value)} className="slider" id="slider" />;

export default Slider;