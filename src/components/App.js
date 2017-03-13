import React from 'react'
// import Image from './Image'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component{
    render() {

        // var Images = [];

        // for (var i = 0; i < 50; i++) {
        //     Images.push(<Image number={i} />);
        // }

        // On the return line you must have your first div
        // Curly brackets === actual data === data-id={12}
        // Always have an App.JS - it's the entery point for other things
        return <div className="container"> 
            <AddTodo/>
    
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3"> 
                    <Todos/>              
                </div> 
            </div>
        </div>
    }
}

export default App;

    // {Images}    