import React, { Component } from 'react'

class ClickCounterRender extends Component {
    
    render() {
        const {count, clickHandler} = this.props
        return (
            <div>
                <button onClick={clickHandler}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounterRender
