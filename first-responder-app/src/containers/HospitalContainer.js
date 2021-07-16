import React, {Component} from 'react'
import Hospitals from '../components/Hospitals'
import {connect} from 'react-redux'
// import {getAllHospitals} from '../actions/hospitalActions'
class HospitalContainer extends Component{
    // componentDidMount(){
    //     this.props.getAllHospitals()
    // }
    render(){
        
        return(
            <div>
                <Hospitals hospitals={this.props.hospitals}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      hospitals: state.hospitalReducer.hospitals,
      loading: state.hospitalReducer.loading
    }
  }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         getAllHospitals: () => dispatch(getAllHospitals())
//     }
// }

export default connect(mapStateToProps)(HospitalContainer)