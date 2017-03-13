import React from 'react'
import Todo from './Todo'

class Todos extends React.Component{
    render() {

return <ul className="list-group">
            <Todo description="Laundry"/>
            <Todo description="Go to store"/>
            <Todo description="Vet visit"/>
            <Todo description="Wash car"/>
        </ul>

  }
}

export default Todos;