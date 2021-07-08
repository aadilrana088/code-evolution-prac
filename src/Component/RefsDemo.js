import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef();

        this.cbRef = null;
        this.setcbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        // this.inputref.current.focus()
        // console.log(this.inputref);

        if(this.cbRef) {
            console.log("true");
            this.cbRef.focus();
        }
    }
    clickHandler= ()=> {
        alert(this.inputref.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref} />
                <input type="text" ref={this.setcbRef} />
                <button onClick= {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
