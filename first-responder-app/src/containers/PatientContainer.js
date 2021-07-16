import React, {Component} from 'react'
import Patients from '../components/Patients'
import {connect} from 'react-redux'

class PatientConatiner extends Component{
    render(){
        return(
            <div>
                <Patients patients={this.props.patients}/>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    console.log("patient container", state)
    return{
        patients: state.patientReducer.patients,
        loading: state.patientReducer.loading
    }
}

export default connect(mapStateToProps)(PatientConatiner)