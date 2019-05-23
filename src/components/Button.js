import React from 'react';

const Button = ({var1, var2}) => <button onClick={var1} className="btn btn1 btn-info" id="play">{ var2 ? 'Stop' : 'Start'}</button>;

export default Button;