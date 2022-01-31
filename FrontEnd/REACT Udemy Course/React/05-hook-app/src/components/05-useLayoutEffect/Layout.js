import React,{useLayoutEffect, useRef, useState} from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';
import './layout.css';

export const Layout = () => {

    const { counter, increment } =  useCouter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { quote } = !!data && data[0];

    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote]);

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});
    

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                ref={pTag}
                className="mb-5"> { quote } </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
