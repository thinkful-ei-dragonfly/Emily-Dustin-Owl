import React from 'react';


export default function(props) {
  if (props.onStage === true) {
  return (
    <div className="onstage-part">
      <h3 className="onstageName">{props.name}</h3>
      <img className="stageAvatar" src={props.avatar} alt='user avatar'/>
      <div className='icons'>
      </div>
    </div>
  )
  }
  else {
    return null;
  }
}