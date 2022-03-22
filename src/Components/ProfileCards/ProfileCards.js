import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import db from '../../firebase';
import './ProfileCards.css';


// ------COMPO--------------
export default function TinderCards() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
     db.collection('people').onSnapshot( snap=>(
       setPeople(snap.docs.map( doc=>doc.data()))
     ));
  }, []);
  

//  --------------RET--------------- 
  return (
    <div className='profileCard__container'>
      
      {people.map(person => (
          <TinderCard className='swipe' preventSwipe={['up', 'down']} key={person.name} >
            <div className="profileCard" style={{backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>)
      )}
    </div>
  )
}
