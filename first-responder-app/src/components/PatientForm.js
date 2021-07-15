import React, { Component } from 'react'

// next steps - connect to the store with addPatient action, POST fetch from action 

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
        hospital: ""
        // does hospital need to be a string or an value?
    }

    render(){
        return(
            <div>
                <h1>FIRST RESPONDER PATIENT FORM</h1><hr/>
                <h3>Please fill out this form as accurately as possible, as we will need this information upon patients arrival.</h3>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={this.state.first_name}/><br/><br/>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={this.state.last_name}/><br/><br/>
                    <label>Age:</label>
                    <input type="text" name="age" value={this.state.age}/><br/><br/>
                    <label>Gender:</label>
                    <input type="text" name="gender" value={this.state.gender}/><br/><br/>
                    <label>Pronouns:</label>
                    <input type="text" name="pronouns" value={this.state.pronouns}/><br/><br/>
                    <label>Heart Rate:</label>
                    <input type="text" name="heart_rate" value={this.state.heart_rate}/><br/><br/>
                    <label>Blood Pressure:</label>
                    <input type="text" name="blood_pressure" value={this.state.blood_pressure}/><br/><br/>
                    <label>Respiration Rate:</label>
                    <input type="text" name="respiration_rate" value={this.state.respiration_rate}/><br/><br/>
                    <label>Temperature:</label>
                    <input type="text" name="temperature" value={this.state.temperature}/><br/><br/>
                    <label>Blood Glucose Level:</label>
                    <input type="text" name="blood_glucose_level" value={this.state.blood_glucose_level}/><br/><br/>
                    <label>End Tidal:</label>
                    <input type="text" name="end_tidal" value={this.state.end_tidal}/><br/><br/>
                    <label>Chief Complaint:</label>
                    <input type="text" name="chief_complaint" value={this.state.chief_complaint}/><br/><br/>
                    <label>On Scene Description:</label>
                    <textarea name="on_scene_description" rows="4" cols="50" value={this.state.on_scene_descripton}></textarea><br/><br/>
                    <label>Choose Location To Send Patient:</label>
                    <select name="hospital" value={this.state.hospital}>
                        <option value="St Mercy">St Mercy</option>
                        <option value="Trauma Center">Trauma Center</option>
                        <option value="Pedatric Care Center">Pediatric Care Center</option>
                    </select><br/><br/>
                    <label>Submit Patient:</label><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )

    }
}
export default PatientForm