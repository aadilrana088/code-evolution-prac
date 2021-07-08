// Memo Component are used as pure functional components
import React from 'react'

function MemoComp({name}) {
    console.log("Memo Component Renders");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp);
