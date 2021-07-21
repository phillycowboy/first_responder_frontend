import React, {Component} from 'react'

class Timer extends Component{
    state = {
        hour: 0,
        minute: 0,
        seconds: 0
    }

    handleStartTime = () => {
        console.log("This should START the timer")
    }
    handleStopTime = () => {
        console.log("This should STOP the timer")
    }

    render(){
        return(
            <div>
                <button onClick={this.handleStartTime}>Patient Arrived</button>  <button onClick={this.handleStopTime}>Patient Seen</button>
            </div>
        )
    }
}
export default Timer