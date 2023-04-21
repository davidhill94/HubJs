import React from 'react';
import NewsContent from './NewsContent.js';
import { ArticleTitle, ButtonText, ErrorMessage, LoadingText, NewsContainer, NewsInnerContainer, NewsModal, NewsModalWrapper, NoResultText, ResultsDiv, SearchInput, SearchSubmit, SetAutoButton} from './NewsStyles.js';
import { Search } from './Search.js';

export const NewsComp = ({ loading, error, setTopic, news, searchTopic, handleAutoTopic, handleModal, newsModal, open, hover }) => {

    return (
        <NewsContainer open={open} hover={hover} newsModal={newsModal}>
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
                news.totalResults > 0 ?
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
