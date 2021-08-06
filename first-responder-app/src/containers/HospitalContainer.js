import React, {Component} from 'react'
import Hospitals from '../components/Hospitals'
import {connect} from 'react-redux'

class HospitalContainer extends Component{

    state={
        likedAmount: 0
    }

    handleOnChange = (e) => {
        console.log("likedAmount", e.target.value)
        this.setState({
            likedAmount: parseInt(e.target.value)

        })
    }

    render(){
        
        return(
            <div className="hospital-container">
                <input type="number" name="likedAmount" onChange={this.handleOnChange}></input>
                <Hospitals hospitals={this.props.hospitals} patients={this.props.patients} likedAmount={this.state.likedAmount}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      hospitals: state.hospitalReducer.hospitals,
      loading: state.hospitalReducer.loading,
      patients: state.patientReducer.patients
    }
  }


export default connect(mapStateToProps)(HospitalContainer)