import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Aadil"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                message: "Aadil"
            })
        }, 2000);
    }
    render() {
        console.log("***********Parent Component************");
        return (
            <div>
                ParentComponet {this.state.message}
                <MemoComp name= {this.state.message}/>
                {/* <RegComp name={this.state.message}/>
                <PureComp name={this.state.message}/> */}
            </div>
        )
    }
}


export default ParComp
