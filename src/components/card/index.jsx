import React from 'react';
import Proptypes from 'prop-types';

import './styles.css';

export default function Card ({ disabled, handleClick, id, type, flipped, height, width }) {
    return <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onClick={() => disabled ? null : handleClick(id)}
    >
        <div className='flipper'>
            <img
                alt='card'
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped ? `/img/${type}.png` : `/img/back.png`}
            />
        </div>

    </div>
}

Card.propTypes = {
    handleClick: Proptypes.func.isRequired,
    id: Proptypes.number.isRequired,
    flipped: Proptypes.bool.isRequired,
    type: Proptypes.string.isRequired,
    height: Proptypes.number.isRequired,
    width: Proptypes.number.isRequired,
    disabled: Proptypes.bool.isRequired
};