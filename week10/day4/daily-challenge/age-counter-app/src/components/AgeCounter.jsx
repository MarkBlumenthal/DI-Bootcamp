import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../ageSlice';
import logo from '../react.svg'; 

const AgeCounter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.age.value);
    const loading = useSelector((state) => state.age.loading);
    const error = useSelector((state) => state.age.error);

    return (
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    <h1>Age Counter App</h1>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Age: {age}</h2>
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => dispatch(ageUpAsync(1))}
                        disabled={loading}
                    >
                        Increment
                    </button>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => dispatch(ageDownAsync(1))}
                        disabled={loading}
                    >
                        Decrement
                    </button>
                    {loading && (
                        <div className="mt-3">
                            <img src={logo} className="App-logo" alt="loading" style={{ height: '50px' }} />
                            <p>Loading...</p>
                        </div>
                    )}
                    {error && <p className="text-danger mt-3">Error: {error}</p>}
                </div>
            </div>
        </div>
    );
};

export default AgeCounter;





