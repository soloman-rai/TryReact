import React from 'react';

import styled from 'styled-components';
import { DownOutlined, FireOutlined, SearchOutlined } from '@ant-design/icons';
import data from '../data/explore.json';
import { Input } from 'antd';
import SubHeader from '../components/SubHeader';


const Explore = () => {
    const { people, conversation } = data;

    return (
        <ExploreContainer>
            <Header>
                <SubHeader pageTitle="Explore" />
                <Input
                    style={{
                        backgroundColor: '#f4f4f4',
                        borderRadius: '0.8em',
                        padding: '0.3em 1em',
                        border: 'none',
                        boxShadow: 'none'
                    }}
                    size="large"
                    placeholder="Find People and Clubs"
                    prefix={<SearchOutlined style={{ fontSize: '1.5em'}} />}
                />
            </Header>
            <h6>People to Follow</h6>
            <PeopleContainer>
                {people.map(person => (
                    <Person>
                        <div className="d-flex align-items-center">
                            <PersonImage src={person.image} alt="User Image" />
                            <PersonInfo className="ml-2">
                                <h5>{person.name}</h5>
                                <p>{person.description}</p>
                            </PersonInfo>
                        </div>
                        <button>Follow</button>
                    </Person>
                ))}
                <ShowMoreBtn> Show More People <DownOutlined /></ShowMoreBtn>
            </PeopleContainer>

            <h6 className="mt-5">Find Converstations About... </h6>
            <ConversationContainer className="row mx-0">
                {conversation.map(item => (
                    <div className="col-6 px-2 mb-3">
                        <Conversation>
                            <h6><FireOutlined /> {item.title}</h6>
                            <p>{item.description}</p>
                        </Conversation>
                    </div>
                ))}
            </ConversationContainer>
        </ExploreContainer>
    )
}

export default Explore


const ExploreContainer = styled.div`
    padding: 0 0.5em;
    height: 100%;
    overflow: auto;
    padding-top: 5.2em;

    h6 {
        font-weight: 500;
        font-size: 0.975em;
        color: #bbbbbb;
        margin: 1.5em 0 0.5em 0;
        text-transform: uppercase;
    } 

    @media (min-width: 768px) {
        h6 {
            font-size: 1.3em;
            margin-left: 1.5em;
        }
    }
`

const Header = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f2f0e4;
    z-index: 5;
    padding: 0.5em;  

    @media (min-width: 768px) {
        padding: 0.5em 2em;

        input {
            padding: 0.5em !important;
        }
    }
`

const PeopleContainer = styled.div`
    background-color: #ffffff;
    margin: 0 -0.5em;
    padding: 0.5em 0.5em 1.5em 0.5em;
    position: relative;

    @media (min-width: 768px) {
        padding: 2em;
    }
`

const Person = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5em;

    button {
        background-color: transparent;
        border: 2px solid var(--btnBgColor);
        border-radius: 2em;
        color: var(--btnBgColor);
        font-weight: 400;
        font-size: 1em;
        padding: 0.1em 1.2em;
    }

    @media (min-width: 768px) {
        button {
            border: 3px solid var(--btnBgColor);
            font-size: 1.3em;
        }
    }
`

const PersonImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 25%;

    @media (min-width: 768px) {
        height: 60px;
        width: 60px;
        margin: 0.3em;
    }
`

const PersonInfo = styled.div`
    margin-left: 1.2em;
    color: var(--textColor);

    h5 {
        font-size: 1em;
        margin-bottom: 0.2em;
    }

    p {
        font-size: 0.9em;
        margin: 0;
        display: block;
        display: -webkit-box;
        width: 173px;
        height: fit-content;
        line-height: 1.15;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #aaaaaa;
    }

    @media (min-width: 768px) {
        margin-left: 1.5em;

        h5 {
            font-size: 1.5em;
        }
        
        p {
            font-size: 1.1em;
            width: 300px;
            line-height: 1.3;
        }
    }
`

const ShowMoreBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 3em;
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f4f4f4;
    color: #aaaaaa;
    box-shadow: 0px 2px 3px #cccccc;
    font-weight: 500 !important;
    padding: 0.4em 0.5em;

    span {
        font-size: 0.775em;
        margin-top: 0.3em;
        margin-left: 0.5em;
    }
    
    @media (min-width: 768px) {
        padding: 0.7em 1em;

        button{
            font-size: 1em;
        }
    }
`

const ConversationContainer = styled.div`
    @media (min-width: 768px) {
        padding: 1.5em 2.5em;
    }
`

const Conversation = styled.div`
    background-color: #ffffff;
    border-radius: 0.5em;
    padding: 1em;
    box-shadow: 0px 2px 3px #ccccc;

    h6 {
        margin: 0;
        display: flex;
        align-items: center;
        color: var(--textColor);

        span {
            margin-right: 0.2em;
        }
    }

    p {
        margin: 0.1em;
        color: #aaaaaa;
        line-height: 1.3;
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        padding: 0.5em;

        h6 {
            font-size: 1em;
        }
        p {
            line-height: 1.2;
            font-size: 0.8em;
        }
    }
`

// Testing if the Styled components export work
export { Header }