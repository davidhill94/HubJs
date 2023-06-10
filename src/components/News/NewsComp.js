import React from 'react';
import NewsContent from './NewsContent.js';
import { ArticleTitle, ButtonText, ErrorMessage, LoadingText, NewsContainer, NewsInnerContainer, NewsModal, NewsModalWrapper, NoResultText, ResultsDiv, SearchInput, SearchSubmit, SetAutoButton} from './NewsStyles.js';
import { Search } from './Search.js';
import SetHomeModal from './SetHomeModal.js';

export const NewsComp = ({ loading, error, setTopic, topic, news, searchTopic, handleAutoTopic, handleModal, newsModal, open, hover, newsTag }) => {

    console.log("news:" + news.articles)


    return (
        <NewsContainer open={open} hover={hover} newsModal={newsModal}>
            <SetHomeModal newsTag={newsTag} topic={topic} newsModal={newsModal}/>
            <ButtonText newsModal={newsModal} hover={hover}>News</ButtonText>
            <NewsModal newsModal={newsModal}>
                <NewsModalWrapper newsModal={newsModal}>
               <Search searchTopic={searchTopic} setTopic={setTopic} handleAutoTopic={handleAutoTopic} />
            <NewsInnerContainer>
                {loading ?
                <LoadingText>Loading...</LoadingText>
                :
                error ?
                <ErrorMessage>We ran into an error.. Please search something else.</ErrorMessage>
                :
                news.totalArticles > 0 ?
                    <NewsContent news={news} />
                    :
                    <NoResultText>Oops..Nothing Found..Search something else!</NoResultText>
                }
        </NewsInnerContainer>
                </NewsModalWrapper>
            </NewsModal>
            </NewsContainer>
    )
}
