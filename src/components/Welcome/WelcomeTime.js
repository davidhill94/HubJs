import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { WelcomeDateDisplay, WelcomeHeader, WelcomeInfo, WelcomeTimeDisplay, WelcomeWrapper } from './WelcomeStyles';

export const WelcomeTime = () => {

    const [message, setMessage] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    const handleMessage = () => {
        const today = new Date();
        const hour = today.getHours();
        if (hour < 12){
            setMessage("Good Morning")
        } else if (hour < 17 && hour >= 12){
            setMessage("Good Afternoon")
        } else if (hour < 21 && hour >= 17){
            setMessage("Good Evening")
        } else {
            setMessage("Good Night")
        }
    }

    useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    }
    })
    
    useEffect(() => {
        handleMessage()
      }, []);

  return (
    <WelcomeWrapper>
        <WelcomeHeader>{message}</WelcomeHeader>
        <WelcomeInfo>
            <WelcomeTimeDisplay>{time}</WelcomeTimeDisplay>
            <WelcomeDateDisplay>{date}</WelcomeDateDisplay>
        </WelcomeInfo>
    </WelcomeWrapper>
  )
}
