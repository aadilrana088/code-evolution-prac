import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const {count, increamentCount} = this.props
        return (
            <div>
                <button onClick={increamentCount}>Clicked {count} times and args {this.props.name}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,20)
