import React from 'react';
import {
  ButtonWrapper,
  ButtonText,
  GameCenterModal,
  GameCenterContainer
} from './GameCenterStyles.js';
import { GameWrapper } from './GameWrapper.js';

export const GameCenter = ({ gameModal, hover, open }) => {

  return (
    <GameCenterContainer hover={hover} open={open} gameModal={gameModal}>
      <ButtonWrapper>
      <ButtonText gameModal={gameModal} hover={hover}>Game Center</ButtonText>
      </ButtonWrapper>
      <GameCenterModal gameModal={gameModal}>
        <GameWrapper />
      </GameCenterModal>
    </GameCenterContainer>
  )
}
