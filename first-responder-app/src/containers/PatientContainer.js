import React, {Component} from 'react'
import Patients from '../components/Patients'
import {connect} from 'react-redux'

class PatientConatiner extends Component{
    render(){
        return(
            <div className="patient-container">
                <Patients patients={this.props.patients} hospitals={this.props.hospitals}/>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    console.log("patient container", state)
    return{
        patients: state.patientReducer.patients,
        loading: state.patientReducer.loading,
        hospitals: state.hospitalReducer.hospitals
    }
}

export default connect(mapStateToProps)(PatientConatiner)