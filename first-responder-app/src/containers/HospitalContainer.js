import React, {Component} from 'react'
import Hospitals from '../components/Hospitals'
import {connect} from 'react-redux'
// import {getAllHospitals} from '../actions/hospitalActions'
class HospitalContainer extends Component{
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.getAllHospitals()
    // }
    render(){
        
        return(
            <div>
                <Hospitals />
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//       hospitals: state.hospitals,
//       loading: state.loading
//     }
//   }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         getAllHospitals: () => dispatch(getAllHospitals())
//     }
// }

export default connect()(HospitalContainer)