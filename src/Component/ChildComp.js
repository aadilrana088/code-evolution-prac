import React from 'react'
function ChildComp(props) {
    return (
        <div>
            <button onClick= {()=> props.greetHandler("child")}>Click Me</button>
        </div>
    )
}

export default ChildComp
