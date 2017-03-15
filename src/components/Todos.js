import React from 'react'

import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo'

class Todos extends React.Component{
// constructor is NEEDED if CHANGING STATE 
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this) 

        this.state = {
            todos: []
        }
    }

// LIFECYCLE METHOD
  componentWillMount() {
      this.getTodos()
    }

// PULLS TODOS FROM DATABASE
   getTodos(){
    fetch('/api/v1/todos')
    .then(response => response.json())
    .then(todos => this.setState({todos: todos}))
   }

    render() {
//TURNS TODO into an ARRAY [0,1,2], THEN assiging todo to description and todo category to category
        let todos = this.state.todos.map((todo, key) => <Todo description={todo.todos} category={todo.category} key={key} />)

        return <Layout>
        <AddTodo addTodos={this.getTodos}/>
        
        <ul className="list-group">
            {todos}
        </ul>
        </Layout>
    }
}

export default Todos