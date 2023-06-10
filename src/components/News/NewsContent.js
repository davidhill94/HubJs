import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import NewsArticle from './NewsArticle';
import { Arrow, NewsContentWrapper, InnerContentWrapper } from './NewsStyles';

const NewsContent = ({ news }) => {

    const [arrow, setArrow] = useState(false);

    useEffect(() => {
        var slider = document.getElementById("slider");
        slider.scrollLeft > 0 ? setArrow(true) : setArrow(false);
        console.log(arrow);
      }, []);

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        window.innerWidth > 525 ?
        slider.scrollLeft = slider.scrollLeft + 416
        :
        slider.scrollLeft = slider.scrollLeft + window.innerWidth
    }
    const slideRight = () => {
        var slider = document.getElementById("slider");
        window.innerWidth > 525 ?
        slider.scrollLeft = slider.scrollLeft - 416
        :
        slider.scrollLeft = slider.scrollLeft - window.innerWidth
    }

    return (
        <NewsContentWrapper>
            <Arrow position="left" onClick={slideRight} arrow={arrow}><FaArrowLeft /></Arrow>
            <InnerContentWrapper id="slider">
                {news.articles.slice(0, 8).map((item, index) => 
                <NewsArticle item={item} index={index} key={index}/>    
                )}
            </InnerContentWrapper>
            <Arrow position="right" onClick={slideLeft}><FaArrowRight /></Arrow>
        </NewsContentWrapper>
    )
}

export default NewsContent