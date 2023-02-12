import React from 'react';
import './NewsStyling.css';

export const NewsComp = ({ loading, error, setTopic, news, searchTopic, handleAutoTopic }) => {
    return (
        <div className='news_container'>
            <input
                type="text"
                onChange={e => setTopic(e.target.value)}
                placeholder="Search News"
                onKeyPress={(e) => { if (e.key === "Enter") { searchTopic() } }}
            ></input>
            <button
                type="submit"
                onClick={searchTopic}>
                Search
            </button>
            <button
            onClick={handleAutoTopic}>
                Set as Auto
            </button>
            <div>
                {loading ?
                <h3>Loading...</h3>
                :
                error ?
                <h3>We ran into an error.. Please search something else.</h3>
                :
                news.totalResults > 0 ?
                    <div>
                        <h2>{news.totalResults > 0 ? news.articles[0].title : null}</h2>
                        <h2>{news.totalResults > 1 ? news.articles[1].title : null}</h2>
                        <h2>{news.totalResults > 2 ? news.articles[2].title : null}</h2>
                    </div>
                    :
                    <h3>Oops..Nothing Found..Search something else!</h3>
                }
        </div>
            </div>
    )
}
