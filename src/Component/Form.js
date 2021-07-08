import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             text: '',
             language: 'React'
        }
    }
    handleUserName = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleText = event => {
        this.setState({
            text: event.target.value
        })
    }
    handleLanguage = event => {
        this.setState({
            language: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.text}  ${this.state.language}`)
        event.preventDefault()
    }
    render() {
        const {username,text,language} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <labe>Username</labe>
                    <input type="text" value={username} onChange={this.handleUserName} />
                </div>
                <div>
                    <label>TextArea</label>
                    <textarea value= {text} onChange={this.handleText}></textarea>
                </div>
                <div>
                    <label>Language</label>
                    <select value= {language} onChange= {this.handleLanguage}>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Nodejs</option>
                    </select>
                </div>
                <button value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
