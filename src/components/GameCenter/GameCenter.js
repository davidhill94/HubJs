import React from 'react';
import {
  ButtonWrapper,
  ButtonText,
  GameCenterModal,
  GameCenterContainer
} from './GameCenterStyles.js';

export const GameCenter = ({ gameModal, hover, open }) => {

  return (
    <GameCenterContainer hover={hover} open={open} gameModal={gameModal}>
      <ButtonWrapper>
      <ButtonText gameModal={gameModal} hover={hover}>Game Center</ButtonText>
      </ButtonWrapper>
      <GameCenterModal/>
    </GameCenterContainer>
  )
}
