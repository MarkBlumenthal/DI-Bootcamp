import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      {userState.loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : userState.error ? (
        <div className="alert alert-danger" role="alert">
          {userState.error}
        </div>
      ) : (
        <div>
          <h2 className="text-center mb-4">User List</h2>
          <div className="list-group">
            {userState.users.map(user => (
              <div key={user.id} className="list-group-item">
                {user.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;

