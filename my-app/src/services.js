import * as axios from 'axios';
import api from './api';

export function addJob(){
    
    axios({
        method: 'post',
        url: api.employer.addJob,
        data: {
            username: username,
            password: password,
            email: email,
            first_name:first_name,
            last_name:last_name,
            phone:phone,
            gender:gender,
            dob:dob,
            nationality:nationality
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        //must handle the error
        console.log(response);
        return response;
    })
}