import React, {Component} from 'react'

class Timer extends Component{
    state = {
        minute: 0,
        seconds: 0,
        date: ""
    }
    

    handleStartTime = () => {
        console.log("This should START the timer")
       this.intervalId =  setInterval(() => {
            this.setState({
                seconds: this.state.seconds === 59 ? 0 : this.state.seconds + 1,
                minute: this.state.seconds === 59 ? this.state.minute + 1 : this.state.minute
            })
        }, 1000)
        this.getDate()
    }

   
    handleStopTime = () => {
        console.log("This should STOP the timer")
        clearInterval(this.intervalId) 
  
    }

    getDate = () => {
        this.setState({
            date: new Date().toDateString()
        })
    }
    // componentWillMount(){
    //     localStorage.getItem('seconds') && this.setState({
    //         seconds: JSON.parse(localStorage.getItem('seconds'))
    //     })
    // }
    // componentDidMount(){
    //     localStorage.getItem('seconds') && this.setState({
    //         seconds: JSON.parse(localStorage.getItem('seconds'))
    //     })
    // }
    // componentWillUpdate(){
    //     localStorage.setItem('seconds', this.state.seconds)
    // }


    render(){
        return(
            <div>
                <div>Patient Wait Time: {this.state.minute}mins : {this.state.seconds}secs</div> <br />
                {this.state.date} <br />
                <button onClick={this.handleStartTime}>Patient Arrived</button>  <button onClick={this.handleStopTime}>Patient Seen</button>
                
            </div>
        )
    }
}
export default Timer