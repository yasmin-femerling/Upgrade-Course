import React, {useState} from 'react';
import PropTypes from 'prop-types';

//SHORTCUT: rafce, rafcp !!!
const CounterApp = ({value}) =>{

    const [counter, setCounter] = useState(value);
    //handleAdd
    const handleAdd = () => {
        setCounter(counter+1);
    }
    const handleReset = () => {
        setCounter(value);
    }
    const handleSubstract = () => {
        setCounter(counter-1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            {/* Si al onClick le pones funcion() en lugar de funcion,
            se va a ejecutar al renderizar, no al oprimir */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 10,
}

export default CounterApp;

