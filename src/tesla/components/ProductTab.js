import React from 'react';

import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';


const HomeTab = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {

    return (
        <Wrap bg={backgroundImg}>
            <Fade bottom>
                <ProductInfo>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ProductInfo>
            </Fade>

            <Fade>
                <ProductAction>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&  
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <IconWrap>
                        <DownArrowI />
                    </IconWrap>
                </ProductAction>
            </Fade>
        </Wrap>
    )
}

export default HomeTab

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('${props.bg}')`};
    background-size: cover;
    background-position: center;
    backgroun-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  // for flex direction row -> horizontal alignment || for column -> vertical
    align-items: center;    // for flex direction row -> vertical alignment || for column -> horizontal
`

const ProductInfo = styled.div`
    padding-top: 15vh;
    text-align: center;

    p {
        margin-top: 0.5em;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.6em;
        }
        p {
            margin-top: 0.3em;
            font-size: 14px;
        }
    }
`

const ProductAction = styled.div`
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 1.5em;
    }
`

const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border: none;
    color: white;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 0.5em;
    font-weight: 600;

    @media (min-width: 768px) {
        font-size: 15px;
    }
`

const RightButton = styled(LeftButton)`
    background-color: lightgray;
    opacity: 0.65;
    color: #111;
`

const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DownArrowI = styled(KeyboardArrowDownIcon)`
    // margin-top: 20px;
    // overflow-x: hidden;
    height: 40px;
    font-size: 3em !important;
    fill: #fff !important;
    animation: animateDown infinite 1.5s;
`