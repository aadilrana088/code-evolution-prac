import React, {Component}from "react"
class Welcome extends Component {
    constructor() {
        super()
        this.state  = {
            message : "Welcome Visitor"
        }
    }
    changeeMessage() {
        this.setState({
            message: "Thanks for subscribing"
        }
        )
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {()=> this.changeeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Welcome