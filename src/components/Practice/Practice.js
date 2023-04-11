import React from 'react';
import {
  PracticeContainer,
  PracticeModal,
  ButtonWrapper,
  ButtonText
} from './PracticeStyles.js';

export const Practice = ({handleModal, practiceModal, hover, open}) => {

  return (
    <PracticeContainer hover={hover} open={open} practiceModal={practiceModal}>
      <ButtonWrapper>
      <ButtonText hover={hover}>Practice</ButtonText>
      </ButtonWrapper>
      <PracticeModal/>
    </PracticeContainer>
  )
}
