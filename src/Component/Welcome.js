import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name,lname} = this.props
        return (
            <div>
                {/* <h1>Welcome {this.props.name} {this.props.lname}</h1> */}
                <h1>Welcome {name} {lname}</h1>
            </div>
        )
    }
}

export default Welcome
