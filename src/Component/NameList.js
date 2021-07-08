import React from 'react';
import Person from './Person';

const NameList = () => {
    // const name = ["Aadil","Shoiab","Asif","Arif"]
    // const NameList = name.map(name=> (<h2>{name}</h2>))
    const person = [
        {
            id: 1,
            name: "Aadil",
            age: 20,
            skill: "React"
        },
        {
            id: 2,
            name: "Shoiab",
            age: 18,
            skill: "Express"
        },
        {
            id: 3,
            name: "Asif",
            age: 20,
            skill: "Node js"
        },
        {
            id: 4,
            name: "Arif",
            age: 20,
            skill: "MangoDB"
        }
    ]
    const personList = person.map(person=> (
        <Person person = {person} />
    ))
    return (
        <div>
            {
             personList   
            }
            {/* {NameList} */}
        </div>
    );
}

export default NameList;
