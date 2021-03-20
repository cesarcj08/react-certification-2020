import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    overflow: hidden;
    background-color: #e9e9e9;
    text-align:center;
    margin-top: 1px;
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


function NavigationBar(){
    return(
        <SearchContainer>
            <Input type="text" placeholder="Search.." />
            <Input type="submit" value="Search"></Input>
            <InlineDiv>
                <UserImg src="../../userlogo.jpg" alt="...image" />
            </InlineDiv>
        </SearchContainer>
    )
}


export default NavigationBar;
