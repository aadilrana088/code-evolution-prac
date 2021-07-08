import React from 'react';

const Column = () => {
    const data = ["Name","Aadil"]
    return (
        <React.Fragment>
            {
                data.map((item,index)=> (
                    <td key={index}>{item}</td>
                ))
            }
            {/* <td>Name</td>
            <td>Aadil</td> */}
        </React.Fragment>
    );
}

export default Column;
