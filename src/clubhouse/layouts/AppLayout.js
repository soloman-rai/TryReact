import React from 'react';

import styled from 'styled-components';

const AppLayout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default AppLayout


const Container = styled.div`
    height: 100vh;
    position: relative;
    width: 100%;
    // max-width: 500px;
    margin: auto;
    overflow: hidden;
`