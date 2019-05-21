import React from 'react';


export default function(props) {
  if (props.onStage === true) {
  return (
    <div className="onstage-part">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt='user avatar'/>
      <div className='icons'>
      </div>
    </div>
  )
  }
  else {
    return null;
  }
}