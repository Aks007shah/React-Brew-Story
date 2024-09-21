import React, { useState } from 'react';

function Testing(props) {

    const [name, setName] = useState("Akshat")

    const changeName=()=>
    {
        setName("Akshat Sharma")
    }

    let arr = ["a", "b", "c", "d", "e", "f"]

    return (
        <div>
            <h1>{name}</h1>
            <button className='btn btn-light' onClick={changeName}>Change</button>

            {
                arr.map((item)=>
                { 
                    <button key={item}>{item}</button>
                })
            }



        </div>
    );
}

export default Testing;