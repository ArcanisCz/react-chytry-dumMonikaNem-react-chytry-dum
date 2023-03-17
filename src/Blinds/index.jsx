import React, { useState } from 'react';
import './style.css';
import '../style.css';
import BlindsOpen from './images/blinds-open.svg';
import BlindsClosed from './images/blinds-closed.svg';

const Blinds = () => {

    const [blindsOpen, setBlindsOpen] = useState('open');

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsOpen=='open' ? BlindsOpen : BlindsClosed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={blindsOpen=='open' ? "button button--active" : "button"} onClick={() => setBlindsOpen('open')}>Otevřeno</button>
                <button className={blindsOpen=='closed' ? "button button--active" : "button"} onClick={() => setBlindsOpen('closed')}>Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;