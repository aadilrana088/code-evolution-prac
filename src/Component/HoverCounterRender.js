import React, { Component } from 'react'

class HoverCounterRender extends Component {
    render() {
        const {count, clickHandler} = this.props
        return (
            <div>
                <h1 onMouseOver= {clickHandler}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounterRender
