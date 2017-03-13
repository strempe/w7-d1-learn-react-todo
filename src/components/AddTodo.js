import React from 'react'

class AddTodo extends React.Component{
    render() {
    return <div className="row">
        <br/>
        <div className="col-sm-4 col-sm-offset-4">
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type a task description..."></input>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Add Task</button>
                    </span>
                </div>
            </div>
                    <br/>
          
                    <select className="form-control selectpicker">
                        <input className="form-control" type="text" placeholder="Readonly input here…" />
                        <option>Work</option>
                        <option>Home</option>
                        <option>Projects</option>
                        <option>Family</option>
                        <option>Entertainment</option> 
                    </select> 
            
                    <br/>
        </div>
    </div>
    }
}

export default AddTodo;