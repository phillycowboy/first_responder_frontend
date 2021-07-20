import React, {Component} from 'react'
import Hospitals from '../components/Hospitals'
import {connect} from 'react-redux'

class HospitalContainer extends Component{

    render(){
        
        return(
            <div>
                <Hospitals hospitals={this.props.hospitals} patients={this.props.patients}/>
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