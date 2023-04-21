import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NewsSearchAuto, NewsSearchContainer, NewsSearchInput, NewsSearchSubmit } from './NewsStyles';

export const Search = ({ searchTopic, setTopic, handleAutoTopic }) => {
    return (
        <NewsSearchContainer>
            <NewsSearchInput
                type="text"
                onChange={e => setTopic(e.target.value)}
                placeholder="Search News"
                onKeyPress={(e) => { if (e.key === "Enter") { searchTopic() } }}
            />
            <NewsSearchSubmit
                type="submit"
                onClick={searchTopic}>
                Search
            </NewsSearchSubmit>
            <NewsSearchAuto
                onClick={handleAutoTopic}>
                <FaHome />
            </NewsSearchAuto>
        </NewsSearchContainer>
    )
}
