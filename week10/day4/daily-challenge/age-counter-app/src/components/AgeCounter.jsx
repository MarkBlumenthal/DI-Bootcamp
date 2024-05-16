import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, fetchAge } from '../ageSlice';

const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age.value);
    const status = useSelector((state) => state.age.status);
    const error = useSelector((state) => state.age.error);

    return (
        <div>
            <h1>Age: {age}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <button onClick={() => dispatch(fetchAge())}>Fetch Age</button>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
        </div>
    );
};

export default AgeCounter;
