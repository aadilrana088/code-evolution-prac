import React, { Component } from 'react'

class CompoenentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Aadil"
        }
        console.log("LifeCycleB Contrctor")
    }

    static getDerivedStateFromProps(state,props) {
        console.log("LifeCycle B getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycle B ComponentDidMount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle B shouldComponentUpdate");
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle B getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycle B ComponentDidUpdate");
    }
    
    render() {
        console.log("LifeCycle B render method")
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default CompoenentB
