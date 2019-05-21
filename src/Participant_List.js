import React from 'react';
import Participant from './Participant';


export default function(props) {
  return (
    <div className="participant_list">
      {props.participants.map(participant => (
      <Participant key={participant.id} name={participant.name} avatar={participant.avatar} 
      inSession={participant.inSession} onStage={participant.onStage} />))}
    </div>
    

  );
}

