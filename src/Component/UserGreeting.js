import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }

    render() {
        return this.state.isLoggedin && <div>Welcome Vishwas</div>
        // let message;
        // if(this.state.isLoggedin) {
        //     message = <div>Welcome Aadil</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )


        // if(this.state.isLoggedin) {
        //     return(<div>Welcome Aadil</div>)
        // }
        // else {
        //     return (<div>Welcome Guest</div>)
        // }


        // return (
        //     this.state.isLoggedin ? <div>Welcome Vishwas</div> : <div>Welcome Guest</div>
        // )
    }
}

export default UserGreeting
