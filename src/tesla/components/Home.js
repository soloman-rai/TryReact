import React from 'react';

import styled from 'styled-components';
import ProductTab from './ProductTab';


const Home = () => {
    return (
        <Container>
            <ProductTab
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="https://images.unsplash.com/photo-1538592116845-119a3974c958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <ProductTab
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <ProductTab
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            {/* Solar Panels Section */}
            <ProductTab
                title="Lowest Cost Solar Panels in USA"
                description="Money-back Guarantee"
                backgroundImg="https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <ProductTab
                title="Solar for New Roofs"
                description="Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="https://images.unsplash.com/photo-1583345237708-add35a664d77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            {/* Accessories Section */}
            <ProductTab
                title="Accessories"
                backgroundImg="https://images.unsplash.com/photo-1610501693690-64414e727fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`
