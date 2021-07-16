import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPatient} from '../actions/patientActions'

//dispatch action for form, onChange and submit form handles action 
// container handles mapStateToProps

class PatientForm extends Component{
    state = {
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        pronouns: "",
        heart_rate: "",
        blood_pressure: "",
        respiration_rate: "",
        temperature: "",
        blood_glucose_level: "",
        end_tidal: "",
        chief_complaint: "",
        on_scene_descripton: "",
        hospital_id: ""
        // does hospital need to be a string or an value?
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("what is this?", this.state)
        this.props.addPatient(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            age: "",
            gender: "",
            pronouns: "",
            heart_rate: "",
            blood_pressure: "",
            respiration_rate: "",
            temperature: "",
            blood_glucose_level: "",
            end_tidal: "",
            chief_complaint: "",
            on_scene_descripton: "",
            hospital_id: ""
        })
    }

    render(){
        return(
            <div>
                <h1>FIRST RESPONDER PATIENT FORM</h1><hr/>
                <h3>Please fill out this form as accurately as possible, as we will need this information upon patients arrival.</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}/><br/><br/>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}/><br/><br/>
                    <label>Age:</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleOnChange}/><br/><br/>
                    <label>Gender:</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleOnChange}/><br/><br/>
                    <label>Pronouns:</label>
                    <input type="text" name="pronouns" value={this.state.pronouns} onChange={this.handleOnChange}/><br/><br/>
                    <label>Heart Rate:</label>
                    <input type="text" name="heart_rate" value={this.state.heart_rate} onChange={this.handleOnChange}/><br/><br/>
                    <label>Blood Pressure:</label>
                    <input type="text" name="blood_pressure" value={this.state.blood_pressure} onChange={this.handleOnChange}/><br/><br/>
                    <label>Respiration Rate:</label>
                    <input type="text" name="respiration_rate" value={this.state.respiration_rate} onChange={this.handleOnChange}/><br/><br/>
                    <label>Temperature:</label>
                    <input type="text" name="temperature" value={this.state.temperature} onChange={this.handleOnChange}/><br/><br/>
                    <label>Blood Glucose Level:</label>
                    <input type="text" name="blood_glucose_level" value={this.state.blood_glucose_level} onChange={this.handleOnChange}/><br/><br/>
                    <label>End Tidal:</label>
                    <input type="text" name="end_tidal" value={this.state.end_tidal} onChange={this.handleOnChange}/><br/><br/>
                    <label>Chief Complaint:</label>
                    <input type="text" name="chief_complaint" value={this.state.chief_complaint} onChange={this.handleOnChange}/><br/><br/>
                    <label>On Scene Description:</label>
                    <textarea type="text" name="on_scene_description" defaultValue={this.state.on_scene_descripton} onChange={this.handleOnChange}/><br/><br/>
                    <label>Choose Location To Send Patient:</label>
                    <select name="hospital_id" onChange={this.handleOnChange}>
                        <option>Select Hospital</option>
                        {this.props.hospitals.map((hospital) => (
                            <option value={hospital.id} name="hospital_id">{hospital.name}</option>
                        ))}
                    </select><br/><br/>
                    <label>Submit Patient:</label><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return{
        hospitals: state.hospitalReducer.hospitals
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPatient: (patient) => dispatch(addPatient(patient))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm)