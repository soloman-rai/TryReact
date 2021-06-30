import React from 'react';

import styled from 'styled-components';


const SideBarOption = ({ title, Icon }) => {

    return (
        <Container>
            {Icon && <IconBox> <Icon /> </IconBox>}
            {Icon ? <TitleH4>{title}</TitleH4> : <Title>{title}</Title>}
        </Container>
    )
}

export default SideBarOption


const Container = styled.div`
    display: flex;
    color: lightgray;
    height: 40px;
    cursor: pointer;
    transition: 200ms color ease-in;
    align-items: center;

    &:hover {
        color: white;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`

const Title = styled.p`
    margin: 10px;
`

const TitleH4 = styled.h4`
    @media (max-width: 768px) {
        display: none;
    }
`

const IconBox = styled.div`
    padding: 10px 0px;
    margin-right: 10px;
`