import React from 'react';
import { WelcomeContainer } from './WelcomeStyles';
import { WelcomeTime } from './WelcomeTime';
import WelcomeLogo from './WelcomeLogo';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeLogo />
      <WelcomeTime></WelcomeTime>
    </WelcomeContainer>
  )
}
