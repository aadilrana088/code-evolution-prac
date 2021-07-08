import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.compRef = React.createRef();
    }
    clickHandler= () => {
        this.compRef.current.inputfocus();
    }
    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
