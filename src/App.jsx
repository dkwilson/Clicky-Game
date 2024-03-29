import React, { useState, useEffect } from 'react';
import Board from './components/board';

import initializeDeck from './deck.js'

export default function App() {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        resizeBoard()
        setCards(initializeDeck())
    }, [])

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('risze', resizeListener)

    })

    const handleClick = (id) => {
        setDisabled(true)
    }

    const sameCardClicked = (id) => flipped.includes(id)

    const resizeBoard = () => {
        setDimension(
            Math.min(
            document.documentElement.clientWidth,
            document.documentElement.clientHeight,
        ))
    }

    return (
        <div>
            <h2>Can you remember where the cards are?</h2>
            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
            />
            
        </div>
    )
}