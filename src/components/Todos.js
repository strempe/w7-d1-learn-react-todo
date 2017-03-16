// Todos in charge of the todos list - incharge of interacting with the database 
// toggle / get / add - anthing that changes the state of the list 

import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router' 

import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo'


class Todos extends React.Component{

//  SETUP
// constructor is NEEDED if CHANGING STATE 
    constructor(props) {
        // Call the React.Component constructor() method
        // Pass the props onto the constructor
        super(props)

        // Bind custom methods to this object context
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)

        // Initial state
        // this.state = {
        //     todos: []
        // }
    }

// LIFECYCLE METHOD
  componentWillMount() {
       // Before we mount the component onto the page, initiate API call / mostly responsiable for firing off a Fetch
      this.getTodos()
    }

// API METHODS === pulls TODOS from DATABASE 
   getTodos(){
    fetch('/api/v1/todos')
    .then(response => response.json())
    .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
   }

//    ADD TODO
        addTodo(description, category) {
            if (description !== '' && category !== '') {
                // 1. post to /api/v1/todos
                fetch('/api/v1/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        todo: description,
                        category: category,
                        completed: false
                    })
                })
                .then(this.getTodos)
            }
        }

        toggleComplete(todoID, isComplete) {
            fetch('/api/v1/todos/' + todoID + '/' + (isComplete ? 'complete' : 'incomplete'))
            .then(this.getTodos)
        }
// Require render method, runs intially and then again after any state changes
    render() {
// {...todo} - todo is an object with props - SPREAD OPERATOR pulls all the props for 'todo'
//TURNS TODO into an ARRAY [0,1,2], THEN assiging todo to description and todo category to category
// Map array of todo data to Todo components
        let todos = this.props.sharedTodos.map((todo, key) => <Todo {...todo} key={key} toggleComplete={this.toggleComplete}/>)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding your first todo!</div>
        }

        return <Layout>
            <div className="well well-sm">
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>Completed Todos</button>
            </div>
            {/*<AddTodo addTodos={this.getTodos}/>*/}
             <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)