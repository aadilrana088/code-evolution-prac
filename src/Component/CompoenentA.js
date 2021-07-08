import React, { Component } from 'react'
import CompoenentB from './ComponentB'

class CompoenentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Aadil"
        }
        console.log("LifeCycleA Contrctor")
    }

    static getDerivedStateFromProps(state,props) {
        console.log("ifeCycle A getDerivedStateFromProps")
        return null
    }


    componentDidMount() {
        console.log("LifeCycle A ComponentDidMount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle A shouldComponentUpdate");
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle A getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycle A ComponentDidUpdate");
    }
    changeState =  () => {
        this.setState({
            message: "Rana"
        })
    }
    render() {
        console.log("LifeCycle A render method")
        return (
            <div>
                <CompoenentB />
                <button onClick= {this.changeState}>Change State</button>
                LifeCycle A
            </div>
        )
    }
}

export default CompoenentA
