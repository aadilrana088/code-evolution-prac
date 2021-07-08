import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParComp extends Component {
    render() {
        console.log("***********Parent Component************");
        return (
            <div>
                ParentComponet
                <RegComp />
                <PureComp />
            </div>
        )
    }
}


export default ParComp
