import React, { Component } from 'react'

class Person extends Component {
    render() {
        const {person} = this.props
        return (
            <div>
                <h2 key={person.id}>I am {person.name}, and My age is {person.age}. I am perfect in {person.skill}</h2>
            </div>
        )
    }
}

export default Person
