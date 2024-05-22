import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name ? name : 'Name not provided'}</h5>
        <p className="card-text">{age ? `Age: ${age}` : 'Age not provided'}</p>
      </div>
    </div>
  );
};

export default UserCard;
