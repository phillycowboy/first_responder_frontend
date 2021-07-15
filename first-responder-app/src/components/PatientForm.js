import React, { Component } from 'react'

class PatientForm extends Component{
    render(){
        return(
            <div>
                <h1>FIRST RESPONDER PATIENT FORM</h1><hr/>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="first_name"/><br/>
                    <label>Last Name:</label>
                    <input type="text" name="last_name"/><br/>
                    <label>Age:</label>
                    <input type="text" name="age"/><br/>
                    <label>Gender:</label>
                    <input type="text" name="gender"/><br/>
                    <label>Pronouns:</label>
                    <input type="text" name="pronouns"/><br/>
                    <label>Heart Rate:</label>
                    <input type="text" name="heart_rate"/><br/>
                    <label>Blood Pressure:</label>
                    <input type="text" name="blood_pressure"/><br/>
                    <label>Respiration Rate:</label>
                    <input type="text" name="respiration_rate"/><br/>
                    <label>Temperature:</label>
                    <input type="text" name="temperature"/><br/>
                    <label>Blood Glucose Level:</label>
                    <input type="text" name="blood_glucose_level"/><br/>
                    <label>End Tidal:</label>
                    <input type="text" name="end_tidal"/><br/>
                    <label>Chief Complaint:</label>
                    <input type="text" name="chief_complaint"/><br/>
                    <label>On Scene Description:</label>
                    <textarea name="on_scene_description" rows="4" cols="50"></textarea><br/>
                    <label>Choose Location To Send Patient:</label>
                    <select name="hospital">
                        <option value="St Mercy">St Mercy</option>
                        <option value="Trauma Center">Trauma Center</option>
                        <option value="Pedatric Care Center">Pediatric Care Center</option>
                    </select><br/>
                    <label>Send Patient:</label><br/>
                    <input type="submit"/>
                </form>
            </div>
        )

    }
}
export default PatientForm