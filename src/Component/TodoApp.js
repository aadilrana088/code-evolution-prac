import React, { Component } from 'react'
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    
    render() {
        return (
            <div>
                <h1>TODO</h1>
                <TodoList items= {this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">What needs to be done?</label><br />
                    <input id="new-todo" value={this.state.text} onChange={this.handleChange}/>
                    <button>Add #{this.state.items.length +1}</button>
                </form>
            </div>
        )
    }
    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text.length === 0) {
            return
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState((state)=> ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }
}

export default TodoApp
