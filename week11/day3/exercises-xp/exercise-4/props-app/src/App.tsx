import React from 'react';
import UserCard from './components/UserCard';

const App: React.FC = () => {
  return (
    <div>
      <UserCard name="Mark B" age={35} />
      <UserCard />
    </div>
  );
};

export default App;


