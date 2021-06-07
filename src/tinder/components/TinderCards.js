import React, { useEffect, useState } from 'react'

import TinderCard from 'react-tinder-card';
import '../assets/TinderCards.css';
import { db } from '../firebase';


function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        db.collection('people').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [])
    
    return (
        <div>
            <div className="tinder_card_container">
                {people.map(person => (
                    <TinderCard
                        key={person.id}
                        className="swipe"
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${person.data.image})`
                            }}
                            className="card">
                            <h3>{person.data.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
