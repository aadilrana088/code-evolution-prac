import React from 'react';

const Greet = (
    // {name,lastname}
    props
    ) => {
        const {name,lastname} = props
    return (
        <div>
            <h1>Welcome {name} {lastname} </h1>
        </div>
    );
}

export default Greet;
