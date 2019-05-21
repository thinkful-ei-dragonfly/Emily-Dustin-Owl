import React from 'react';
import ChatEvent from './ChatEvent';



export default function(props) {
  return (
    <div className="participant_list">
      {props.chatEvents.map((event,i) => (
      <ChatEvent 
      key = {i} 
      participantId={event.participantId} 
      type={event.type}
      time={event.time}
      message={event.message}/>))}
    </div>
  );
}
