import React from 'react';
import STORE from './Store';


export default function(props) {
  if(props.type === 'message') {
    return (
      <div className='message'>
        <img src={STORE.participants.find(obj => obj.id === props.participantId).avatar} alt='user avatar'></img>
        <h3>{STORE.participants.find(obj => obj.id === props.participantId).name}</h3>
        <p>{new Date(props.time).toLocaleTimeString()}</p>
        <p className = 'message-text'>{props.message}</p>
      </div>
    )
  }
  else if(props.type === 'thumbs-up'){
    return (
      <div className ='thumbs-up'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>gave a thumbs up 
        <i className="fas fa-thumbs-up"></i></p>
      </div>)

  }
  else if (props.type === 'thumbs-down'){
    return (
      <div className ='thumbs-down'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>gave a thumbs down 
        <i className="fas fa-thumbs-down"></i></p>
      </div>)
  }
  else if (props.type === 'raise-hand'){
    return (
      <div className ='raise-hand'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>raised their hand 
        <i className="fas fa-hand-paper"></i></p>
      </div>)
  }
  else if (props.type === 'clap'){
    return (
      <div className ='clap'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>clapped 
        <i className="fas fa-sign-language"></i></p>
      </div>)
  }
  else if (props.type === 'join'){
    return (
      <div className ='join'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>joined</p>
      </div>)
  }
  else if (props.type === 'leave'){
    return (
      <div className ='leave'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>left</p>
      </div>)
  }
  else if (props.type === 'join-stage'){
    return (
      <div className ='join-stage'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>joined stage</p>
      </div>)
  }
  else if (props.type === 'leave-stage'){
    return (
      <div className ='leave-stage'>
        <p><strong>{STORE.participants.find(obj => obj.id === props.participantId).name}</strong>left stage</p>
      </div>)
  }
}
