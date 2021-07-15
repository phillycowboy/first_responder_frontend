import React, { Component } from 'react'

class PatientForm extends Component{
    render(){
        return(
            <div>
                <h1>FIRST RESPONDER PATIENT FORM</h1>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="first_name"/>
                    <label>Last Name:</label>
                    <input type="text" name="last_name"/>
                    <label>Age:</label>
                    <input type="text" name="age"/>
                    <label>Gender:</label>
                    <input type="text" name="gender"/>
                    <label>Pronouns:</label>
                    <input type="text" name="pronouns"/>
                    <label>Heart Rate:</label>
                    <input type="text" name="heart_rate"/>
                    <label>Blood Pressure:</label>
                    <input type="text" name="blood_pressure"/>
                    <label>Respiration Rate:</label>
                    <input type="text" name="respiration_rate"/>
                    <label>Temperature:</label>
                    <input type="text" name="temperature"/>
                    <label>Blood Glucose Level:</label>
                    <input type="text" name="blood_glucose_level"/>
                    <label>End Tidal:</label>
                    <input type="text" name="end_tidal"/>
                    <label>Chief Complaint:</label>
                    <input type="text" name="chief_complaint"/>
                    <label>On Scene Description:</label>
                    <textarea name="on_scene_description" rows="4" cols="50"></textarea>
                    <label>Choose Location To Send Patient:</label>
                    <select name="hospital">
                        <option value="St Mercy">St Mercy</option>
                        <option value="Trauma Center">Trauma Center</option>
                        <option value="Pedatric Care Center">Pediatric Care Center</option>
                    </select>
                    <label>Send Patient:</label>
                    <input type="submit"/>
                </form>
            </div>
        )

    }
}
export default PatientForm