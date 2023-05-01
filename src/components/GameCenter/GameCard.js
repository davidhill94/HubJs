import React, { useState } from 'react'
import { GameCardWrapper, GameImg, GameLinkWrapper, GameText } from './GameCenterStyles';

export const GameCard = ({item, index}) => {

const [cardHover, setCardHover] = useState(false);

const handleCardHover = (value) => {
    setCardHover(value)
};

  return (
    <GameCardWrapper onMouseEnter={() => handleCardHover(true)} onMouseLeave={() => handleCardHover(false)}>
        <GameLinkWrapper href={item.link} target="_blank">
            <GameText>{item.name}</GameText>
            <GameImg src={item.img} alt="Game Logo" cardHover={cardHover}/>
        </GameLinkWrapper>
    </GameCardWrapper>
  )
}
