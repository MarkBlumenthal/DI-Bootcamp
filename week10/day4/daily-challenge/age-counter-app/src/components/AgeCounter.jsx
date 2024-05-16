import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../ageSlice';
import logo from '../react.svg'; 

const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age.value);
    const status = useSelector((state) => state.age.status);
    const error = useSelector((state) => state.age.error);

    return (
        <div>
            <h1>Age: {age}</h1>
            <button onClick={() => dispatch(ageUpAsync(1))}>Increment</button>
            <button onClick={() => dispatch(ageDownAsync(1))}>Decrement</button>
            {status === 'loading' && (
                <div>
                    <img src={logo} className="App-logo" alt="loading" />
                    <p>Loading...</p>
                </div>
            )}
            {status === 'failed' && <p>Error: {error}</p>}
        </div>
    );
};

export default AgeCounter;


