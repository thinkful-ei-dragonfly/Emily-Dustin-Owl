import React from 'react';
import participants from './Store';


export default function(props) {
  if(props.type === 'message') {
    return (
      <div className='message'>
        <img src={participants.find(obj => obj.id === props.participantId).avatar} alt='user avatar'></img>
        <h3>{participants.find(obj => obj.id === props.participantId).name}</h3>
        <p>{new Date(props.time).toLocaleTimeString()}</p>
        <p className = 'message-text'>{props.message}</p>
      </div>
    )
  }
  else if(props.type === 'thumbs-up'){
    return (
      <div className ='thumbs-up'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>gave a thumbs up <span>symbol</span></p>
      </div>)

  }
  else if (props.type === 'thumbs-down'){
    return (
      <div className ='thumbs-down'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>gave a thumbs down <span>symbol</span></p>
      </div>)
  }
  else if (props.type === 'raise-hand'){
    return (
      <div className ='raise-hand'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>raised their hand <span>symbol</span></p>
      </div>)
  }
  else if (props.type === 'clap'){
    return (
      <div className ='clap'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>clapped <span>symbol</span></p>
      </div>)
  }
  else if (props.type === 'join'){
    return (
      <div className ='join'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>joined</p>
      </div>)
  }
  else if (props.type === 'leave'){
    return (
      <div className ='leave'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>left</p>
      </div>)
  }
  else if (props.type === 'join-stage'){
    return (
      <div className ='join-stage'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>joined stage</p>
      </div>)
  }
  else if (props.type === 'leave-stage'){
    return (
      <div className ='leave-stage'>
        <p><strong>{participants.find(obj => obj.id === props.participantId).name}</strong>left stage</p>
      </div>)
  }
}
