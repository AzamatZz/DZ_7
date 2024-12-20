import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    incrementByTen,
    decrementByTen,
    reset,
} from './counterSlice';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div
            style={{
                backgroundColor: 'black',
                color: 'white',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Счетчик: {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())} style={{ margin: '5px' }}>
                    +1
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ margin: '5px' }}
                    disabled={count === 0}
                >
                    -1
                </button>
                <button onClick={() => dispatch(incrementByTen())} style={{ margin: '5px' }}>
                    +10
                </button>
                <button
                    onClick={() => dispatch(decrementByTen())}
                    style={{ margin: '5px' }}
                    disabled={count === 0}
                >
                    -10
                </button>
                <button onClick={() => dispatch(reset())} style={{ margin: '5px' }}>
                    Сброс
                </button>
            </div>
        </div>
    );
};

export default App;
