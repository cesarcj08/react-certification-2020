import React from 'react';
import styled from 'styled-components';
import defaultuserimage from '../NavigationBar/userlogo.jpg';
import SideMenu from '../SideMenu/SideMenu';
import './NavigationBar.styles.css';

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


function NavigationBar({ setSearchValue, searchValue, searchVideoEvent }){
    const handleSearchEvent = (event) => searchVideoEvent(event)
    const handleSearchValue = (value) => setSearchValue(value);
    return(
        <div>
            <SideMenu />
            <SearchContainer className="divinline">
                <Input id="txtSearch" onChange={(event) => handleSearchValue(event.currentTarget.value)} type="text" value={searchValue} placeholder="Search.." />
                <Input type="submit" onClick={(event) => handleSearchEvent(event)} value="Search" />
                <InlineDiv>
                    <UserImg src={defaultuserimage} alt="...image" />
                </InlineDiv>
            </SearchContainer>
        </ div>
    )
}


export default NavigationBar;
