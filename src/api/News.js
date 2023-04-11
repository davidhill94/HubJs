import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsComp } from '../components/News/NewsComp';

export const News = ({handleModal, newsModal, open, hover}) => {
  const [news, setNews] = useState([]);
  const [topic, setTopic] = useState("");
  const [autoTopic, setAutoTopic] = useState("")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const NewsAPIKey = process.env.REACT_APP_NEWS_API_KEY;

  const newsURL = `https://newsapi.org/v2/everything?q=${topic}&language=en&apiKey=${NewsAPIKey}`


  const searchTopic = async () => {
    if(topic === ""){
      const res = await getAutoTopic()
    } else {
      try {
        setLoading(true)
        const response = await axios.get(newsURL).then((response) => {
          setNews(response.data)
          setError(false)
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    }
  }

  const handleAutoTopic = () => {
    localStorage.setItem("autoTopic", JSON.stringify(topic));
  }

  const getAutoTopic = () => {
    if (localStorage.getItem("autoTopic") === null) {
      localStorage.setItem("autoTopic", JSON.stringify("World"));
      setTopic("World");
      setAutoTopic("World");
    } else {
      let localTopic = JSON.parse(localStorage.getItem("autoTopic"));
      setTopic(localTopic);
      setAutoTopic(localTopic);
    }
  }

  useEffect(() => {
    searchTopic()
  }, [autoTopic])

  return (
    <NewsComp news={news} topic={topic} setTopic={setTopic} searchTopic={searchTopic} loading={loading} handleAutoTopic={handleAutoTopic} error={error} handleModal={handleModal} newsModal={newsModal} open={open} hover={hover}/>
  )
}
