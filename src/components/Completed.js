import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
// import Todos from './Todos'

class Completed extends React.Component {
    render() {
        return <div>
       <h1>Completed Todos!</h1>
         <div className="form-group">
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
                </span>
            </div>
        </div>
    </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.completed
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)