import React, { useState } from 'react';
import {
  PracticeContainer,
  PracticeButton,
  PracticeModal
} from './PracticeStyles.js';
import {FaCloudSun} from 'react-icons/fa';

export const Practice = () => {
const [open, setOpen] = useState(false);

const handleOpen = () => {
    setOpen(!open);
    console.log(open)
}
  return (
    <PracticeContainer open={open}>
      <PracticeButton onClick={handleOpen}><FaCloudSun /></PracticeButton>
      <PracticeModal open={open} />
    </PracticeContainer>
  )
}
