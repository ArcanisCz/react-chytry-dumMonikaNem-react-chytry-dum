import React, { useState } from 'react';
import './style.css';
import '../style.css';
import LightOn from './images/light-on.svg';
import LightOff from './images/light-off.svg';

const Light = ({ name, state }) => {

    const [lightOn, turnLightOn] = useState(state);

    return (
        <div className="light">
            <div className="light__icon">
                <img 
                    onClick={() => lightOn=="on" ? turnLightOn('off') : turnLightOn('on')}
                    src={lightOn=="on" ? LightOn : LightOff}
                />
            </div>
            <div className="light__name">{name}</div>
        </div>
    );
}

export default Light;