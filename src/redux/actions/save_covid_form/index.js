import axios from 'axios';
export const save_covid_form = (data) => {
  return async (dispatch, getState) => {
    var url = 'http://backend.bionische.com/api/patient/save_covid_form?token='+data.token+'&patient_id='+data.patient_id+'&name='+data.name+'&dob='+data.dob+'&blood_group='+data.blood_group+'&phone='+data.phone+'&gender='+data.gender+'&address='+data.address+'&city='+data.city+'&state='+data.state+'&country='+data.country+'&passport_no='+data.passport_no+'&country_travelled='+data.country_travelled+'&reason_travelled='+data.reason_travelled+'&travel_date='+data.travel_date+'&stay_duration='+data.stay_duration+'&date_in_nashik='+data.date_in_nashik+'&healthcare_contact_date='+data.healthcare_contact_date+'&patient_symptoms='+data.selectedPatientSymptoms+'&other_symptoms='+data.other_symptoms+'&treating_doctor_details='+data.treating_doctor_details+'&full_address='+data.full_address+'&patient_admitted_date='+data.patient_admitted_date+'&patient_condition='+data.patient_condition+'&follow_up_date='+data.follow_up_date+'&family_symptoms='+data.selectedFamilySymptoms+'&family_other_symptoms='+data.family_other_symptoms+'&family_treating_doctor='+data.family_treating_doctor+'&family_current_location='+data.family_current_location
    console.log(url)
    await axios
      .post(url,{})
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'SAVECOVIDFORM',
          payload: JSON.stringify(response.data.data)
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        throw error;
      });
  }
};


