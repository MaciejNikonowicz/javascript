import React from 'react';

const User = () => {
  return (
    <div className='card center-align'>
      <div className='card-content'>
        <h2 className='card-title'>{user.name}</h2>
        <p className='card-text'>{user.username}</p>
        <p style={{ marginBottom: '5px' }}>
          <small>{user.email}</small>
        </p>
        <div className='card-action'>
          <button className='btn btn-dark block'>Details</button>
        </div>
      </div>
    </div>
  );
};

export default User;
