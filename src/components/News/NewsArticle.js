import React, { useState } from 'react';
import { ArticleTitle, ArticleWrapper, ArticleImg, LinkWrapper, ArticleImgEmpty } from './NewsStyles';
import { FaRegImage } from 'react-icons/fa';


const NewsArticle = ({ item, index }) => {

  const [opacity, setOpacity] = useState(false);

  const handleHover = (value) => {
    setOpacity(value);
  }

  return (
    <ArticleWrapper key={index} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      <LinkWrapper href={item.url} target="_blank">
        {item.urlToImage ?
        <ArticleImg src={item.urlToImage} alt="No image available" opacity={opacity ? 1 : 0}></ArticleImg>
        :
        <ArticleImgEmpty><FaRegImage /></ArticleImgEmpty>
      }
        <ArticleTitle>{item.title}</ArticleTitle>
      </LinkWrapper>
    </ArticleWrapper>
  )
}

export default NewsArticle