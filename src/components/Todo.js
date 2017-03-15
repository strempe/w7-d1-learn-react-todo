import React from 'react'

class Todo extends React.Component {
    render() {

// CHECKBOX for COMPLETE === LINE 11
//LABELS for TODOS === LINE 19

        return <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label>
                          <input type="checkbox" />
                          {this.props.description}
                        </label>
                    </div>
                </div> 
                <div className="col-sx-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>
            </div>
        </li>
    }
}

export default Todo
