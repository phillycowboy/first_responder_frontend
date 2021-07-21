import React, {Component} from 'react'

class Timer extends Component{
    state = {
        minute: 0,
        seconds: 0
    }

    handleStartTime = () => {
        console.log("This should START the timer")
       this.intervalId =  setInterval(() => {
            this.setState({
                seconds: this.state.seconds === 59 ? 0 : this.state.seconds + 1,
                minute: this.state.seconds === 59 ? this.state.minute + 1 : this.state.minute
            })
        }, 1000)
        // localStorage.setItem("timer", this.intervalId)
    }
   
    handleStopTime = () => {
        console.log("This should STOP the timer")
        clearInterval(this.intervalId) 
  
    }



    render(){
        return(
            <div>
                <div>Patient Wait Time: {this.state.minute}mins : {this.state.seconds}secs</div> <br />
                <button onClick={this.handleStartTime}>Patient Arrived</button>  <button onClick={this.handleStopTime}>Patient Seen</button>
                
            </div>
        )
    }
}
export default Timer