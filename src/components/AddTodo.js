import React from 'react'

class AddTodo extends React.Component {
    // constructor is NEED if CHANGING STATE
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)

        this.state = {
            description: '',
            category: '',
            addTodo: props.addTodo,
        }
    }
// this state is unmuteable data 
//IF FIELD ISN'T EMPTY, RUN THE CODE BELOW
        addTodo(getTodos) {
            // 1. post to /api/v1/todos
            fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todos: this.state.description,
                    category: this.state.category,
                    completed: false
                })
            })

            .then(response => response.json())
            .then(todo => {
                // 2. clear form fields
                this.setState({
                    description: '',
                    category: ''
                })
                // this.state.addTodo
                // 3. reload list 
                getTodos()
            })
        }
 

    render() {
// SELECT CATEGORY === LINE 50
//INPUT FOR NEW TODO === LINE 61
        return <div>
            <div className="form-group">
                <select className="form-contorol col-sm-12" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                    <option value="">Category...</option>
                    <option value="">Work</option>
                    <option value="">Home</option>
                    <option value="">Family</option>
                    <option value="">Play</option>
                </select>
            </div>
    
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => this.addTodo (this.props.getTodos)}>Add Todo</button>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default AddTodo