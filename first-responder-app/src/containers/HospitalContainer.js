import React, {Component} from 'react'
import Hospitals from '../components/Hospitals'
import {connect} from 'react-redux'
class HospitalContainer extends Component{
    render(){
        return(
            <div>
                <Hospitals />
            </div>
        )
    }

}

export default connect()(HospitalContainer)