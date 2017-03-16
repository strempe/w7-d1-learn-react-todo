import React from 'react'

class AddTodo extends React.Component {
    // constructor is NEED if CHANGING STATE
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            description: '',
            category: '',
        }
    }

// Handles the Add Todo button click, runs parent component addTodo method, and clears the state, causing a render()
    onClick(addTodo) {
        // Call PARENT addTodo method
        addTodo(this.state.description, this.state.category)
   
 
// Sets STATE of fields, and triggers render() again
        this.setState({
            description: '',
            category: ''
    })
 }


    render() {
// SELECT CATEGORY === LINE 50
//INPUT FOR NEW TODO === LINE 61
        return <div>
            <div className="form-group">
                <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                    <option value="">Category...</option>
                    <option value="">Work</option>
                    <option value="">Home</option>
                    <option value="">Family</option>
                    <option value="">Play</option>
                </select>
            </div>
  {/*Any change in a form filed*/}   
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.getTodos)}>Add Todo</button>
                    </span>
                </div>
            </div>
        </div>
    }
}

// Enforce property requirements
AddTodo.propTypes = {
    addTodo: React.PropTypes.func.isRequired
}

export default AddTodo