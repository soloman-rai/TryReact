import React, { useEffect, useState, useCallback } from 'react'

import TinderCard from 'react-tinder-card';
import '../assets/TinderCards.css';
import { useStateValue } from '../context/StateProvider';
import { db } from '../firebase';
import firebase from 'firebase';



function TinderCards() {
    const [{ user }] = useStateValue();
    const [{ userDetails }] = useStateValue();
    const [people, setPeople] = useState([]);
    const [rightSwiped, setRightSwiped] = useState(false);
    const [lastUser, setLastUser] = useState(null);

    useEffect(() => {
        db.collection('userDetails').where("id", "!=", user?.uid).onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [user])


    const onSwipe = useCallback((direction) => {
        console.log('You swiped : ' + direction)
        
        const d = direction === 'right' ? true : false;
        setRightSwiped(d);
        // toggleRightSwipe(d);
        // if(direction === 'right') {
        //     toggleRightSwip();
        // }
        // console.log('Right Swipped: ', rightSwiped);
        
    }, [setRightSwiped], )

    // console.log('Right Swiped: ', rightSwiped);
      
    const onCardLeftScreen = useCallback((myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        
        // console.log('Right Swiped: ', rightSwiped);
        // setLastUser(myIdentifier);

        // db.collection("userDetails").doc(userDetails.id).collection("userMatches").add({
        //     // user: props.activeUser, 
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // });
    }, [rightSwiped])
    // console.log('Last User: ', lastUser);
            
    
    return (
        <div>
            <div className="tinder_card_container">
                {people.map(person => (
                    <TinderCard
                        key={person.id}
                        className="swipe"
                        preventSwipe={['up', 'down']}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen(person.id)}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${person.data.image})`
                            }}
                            className="card">
                            <h3>{person.data.username}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
