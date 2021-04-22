import React from 'react';
import styled from 'styled-components';
import defaultuserimage from '../NavigationBar/userlogo.jpg';
import SideMenu from '../SideMenu/SideMenu';
import './NavigationBar.styles.css';
import getVideos  from '../../services/youtubeapi';
import { useVideoContext } from '../../state/VideosContext';
import { useThemeContext, defaultTheme, darkTheme } from '../../state/ThemeContext';

const SearchContainer = styled.div`
    overflow: hidden;
    text-align:center;
    margin-top: 10px;
    margin-left: 30px;
`;

const Input = styled.input`
    padding: 6px;
    font-size: 17px;
`;
const InlineDiv = styled.div`
    float: right;
    display: inline;
`;

const UserImg = styled.img`
    float: right;
    max-width: 40px;
    margin-right: 10px;
`;

const NavigationBarcontainer = styled.div`
    padding: 10px;
    border-bottom-style: solid;
    border-width: 2px;
`;

function NavigationBar(){
    const { searchValue, setSearchValue, setVideoList, dispatch } = useVideoContext();
    const handleSearchValue = (value) => setSearchValue(value);
    const { theme, setTheme } = useThemeContext();

    const handleSearchVideoEvent = async (event) => {
        event.preventDefault();
        const response = await getVideos(searchValue)
        setVideoList(response.data);
        dispatch({
            id: 0, 
            title: "", 
            description: ""
        });
    }

    return(
        <NavigationBarcontainer style={{ color: theme.fontcolor, backgroundColor: theme.navbarcolor }}>
            <SideMenu />
            <SearchContainer className="divinline">
                <Input id="txtSearch" onChange={(event) => handleSearchValue(event.currentTarget.value)} type="text" value={searchValue} placeholder="Search.." />
                <Input type="submit" onClick={(event) => handleSearchVideoEvent(event)} value="Search" />
                <InlineDiv>
                    <UserImg src={defaultuserimage} alt="...image" />
                    <label htmlFor="darkmode">Dark mode</label>
                    <input name="darkmode" type="checkbox" onChange={(event) => event.target.checked ? setTheme(darkTheme) : setTheme(defaultTheme) } />
                </InlineDiv>
                
            </SearchContainer>
        </NavigationBarcontainer>
    )
}


export default NavigationBar;
