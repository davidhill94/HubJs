import React from 'react'
import { HomeModalContainer } from './NewsStyles'

const SetHomeModal = ({ newsTag, topic, newsModal }) => {
  return (
    newsModal ?
    <HomeModalContainer newsTag={newsTag}>"{topic}" set as default search</HomeModalContainer>
    : 
    <></>
  )
}

export default SetHomeModal