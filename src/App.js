/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Participant_List from './Participant_List';
import Stage from './Stage';
import ChatLog from './ChatLog';





export default function(props) {
  return (
    <main className="mainFlexbox">
      <div className="participantList">
        <Participant_List participants={props.STORE.participants}/>
      </div>

      <div className="chatlog">
        <ChatLog chatEvents={props.STORE.chatEvents}/>
      </div>

      <div className="mainStage">
        <Stage participants={props.STORE.participants} />
      </div>



    </main>
  )
}