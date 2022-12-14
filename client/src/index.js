import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'

const URL = 'http://localhost:3030';

function App() {
    const [stuff, setStuff] = useState({})
    const [error, setError] = useState(null)
 

    

    useEffect(() => {
        fetch(URL + '/stuff').then((res) => res.json())
            .then(data => {
                console.log(data);
                setStuff(data);
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }, []);
    if (error) return <h1>{error}</h1>
    
    return (
        <div>
            <h1>{stuff.toString()}</h1>
           
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);