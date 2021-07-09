import React from 'react';

import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import styled from 'styled-components';
import StartRoom from './sheets/StartRoom';
import NewRoom from './sheets/NewRoom';


const BottomSheet = (props) => {
    return (
        <SwipeableBottomSheet
            open={props.sheetVisible}
            onChange={() => {
                props.setSheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)
            }}  
            fullscreen = {props.sheetTitle === 'room detail' ? true : false}
        >
            <BottomSheetContainer style={{backgroundColor: props.sheetTitle === 'profile' ? 'transparent' : ''}}>
                {
                    props.sheetTitle === 'new room' ?
                        (<NewRoom
                            cardDetail={props.cardDetail}
                            setSheetVisible={item => {
                                props.setSheetVisible(item)
                                props.setItemsVisible(true);
                            }}
                        />)
                        : props.sheetTitle === 'start room' ?
                        (<StartRoom
                            setSheetCreateRoom={props.setSheetCreateRoom}
                            setSheetVisible={item => {
                                props.setSheetVisible(item);
                                props.setItemsVisible(true);
                            }}
                            />)
                        : ''
                }
            </BottomSheetContainer>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet


const BottomSheetContainer = styled.div`
    background-color: #ffffff;
    border-radius: 1.5em 1.5em 0 0;
    padding: 1.5em 1em;
    position: relative;
    height: 100%;
`