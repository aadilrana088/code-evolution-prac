import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             seconds: 0
        }
    }
    tick() {
        this.setState((state)=> ({
            seconds: state.seconds + 1
        }))
    }
    componentDidMount() {
        this.interval = setInterval(()=> this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>Time will be change by seconds =  {this.state.seconds}</h1>
            </div>
        )
    }
}

export default Timer
