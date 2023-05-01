import React from 'react';
import { GameCard } from './GameCard';
import { GameWrapperContainer } from './GameCenterStyles';
import {GameData} from './GameData';

export const GameWrapper = () => {
  return (
    <GameWrapperContainer> 
        {GameData.map((item, index) => 
            <GameCard key={index} item={item} index={index}/>
            )}
    </GameWrapperContainer>
  )
}
