import React from 'react';
import './Home.css';
import { News } from '../api/News';
import { Weather } from '../api/Weather';
import { ToDo } from '../components/ToDo/ToDoIndex';
import { Practice } from '../components/Practice/Practice';

export const Home = () => {
  return (
    <div className='grid'>
     <Weather className='top-left'></Weather>
     <ToDo className='top-right'></ToDo>
     <News className='bottom-left'></News>
     <Practice className='bottom-right'></Practice>
     <div className='centerDiv'></div>
    </div>
  )
}
