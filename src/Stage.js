import React from 'react'; 
import StageAvatar from './StageAvatar';

export default function(props){
  return (
    <div className="Stage">
      {props.participants.map(participant => (
      <StageAvatar 
      key={participant.id} 
      name={participant.name} 
      avatar={participant.avatar} 
      inSession={participant.inSession} 
      onStage={participant.onStage} />))}
    </div>
  );
}