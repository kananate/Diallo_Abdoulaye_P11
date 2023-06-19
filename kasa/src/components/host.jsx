import React from 'react';

function Host(props) {
    return (
      <div className='host'>
        <span className="host-name">{props.name}</span>
        <img
          className="host-tof"
          src={props.picture}
          alt="Propriétaire"
        />
      </div>
    );
}

export default Host;