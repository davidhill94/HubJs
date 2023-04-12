import React from 'react';
import { ArticleTitle, ButtonText, ErrorMessage, LoadingText, NewsContainer, NewsInnerContainer, NewsModal, NewsModalWrapper, NoResultText, ResultsDiv, SearchInput, SearchSubmit, SetAutoButton} from './NewsStyles.js';

export const NewsComp = ({ loading, error, setTopic, news, searchTopic, handleAutoTopic, handleModal, newsModal, open, hover }) => {

    return (
        <NewsContainer open={open} hover={hover} newsModal={newsModal}>
            <ButtonText newsModal={newsModal} hover={hover}>News</ButtonText>
            <NewsModal newsModal={newsModal}>
                <NewsModalWrapper newsModal={newsModal}>
                <SearchInput
                type="text"
                onChange={e => setTopic(e.target.value)}
                placeholder="Search News"
                onKeyPress={(e) => { if (e.key === "Enter") { searchTopic() } }}
            ></SearchInput>
            <SearchSubmit
                type="submit"
                onClick={searchTopic}>
                Search
            </SearchSubmit>
            <SetAutoButton
            onClick={handleAutoTopic}>
                Set as Auto
            </SetAutoButton>
            <NewsInnerContainer>
                {loading ?
                <LoadingText>Loading...</LoadingText>
                :
                error ?
                <ErrorMessage>We ran into an error.. Please search something else.</ErrorMessage>
                :
                news.totalResults > 0 ?
                    <ResultsDiv>
                        <ArticleTitle>{news.totalResults > 0 ? news.articles[0].title : null}</ArticleTitle>
                        <ArticleTitle>{news.totalResults > 1 ? news.articles[1].title : null}</ArticleTitle>
                        <ArticleTitle>{news.totalResults > 2 ? news.articles[2].title : null}</ArticleTitle>
                    </ResultsDiv>
                    :
                    <NoResultText>Oops..Nothing Found..Search something else!</NoResultText>
                }
        </NewsInnerContainer>
                </NewsModalWrapper>
            </NewsModal>
            </NewsContainer>
    )
}
