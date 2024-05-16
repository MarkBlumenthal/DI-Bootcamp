import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return userState.loading ? (
    <h2>Loading...</h2>
  ) : userState.error ? (
    <h2>{userState.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userState.users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
