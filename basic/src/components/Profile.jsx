import React from 'react';

const Profile = ({image, name, title, isNew}) => {
  return (
      <div className='profile'>
        <img className='photo'
             src={image}
             alt="avatar"
        />
        {isNew &&
          <span className={'new'}>New</span>
        }
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
  );
};

export default Profile;