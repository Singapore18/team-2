import * as axios from 'axios';
import api from './api';

export function addJob(company_name, address, region, industry, jobTitle, skill1, skill2, skill3, description, days, startHour, endHour, contactname, contactphone, contactemail){
    console.log(api.employer.addJob)
    axios({
        method: 'post',
        url: api.employer.addJob,
        data: {
            company_name: company_name,
            address: address,
            region: region,
            industry: industry,
            jobTitle: jobTitle,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
            description: description,
            days: days,
            startHour: startHour,
            endHour: endHour,
            contactname: contactname,
            contactphone: contactphone,
            contactemail: contactemail,
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

export function addPwid(company_name, address, region, industry, jobTitle, skill1, skill2, skill3, description, days, startHour, endHour, contactname, contactphone, contactemail){
    
    axios({
        method: 'post',
        url: api.coach.addPwid,
        data: {
            company_name: company_name,
            address: address,
            region: region,
            industry: industry,
            jobTitle: jobTitle,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
            description: description,
            days: days,
            startHour: startHour,
            endHour: endHour,
            contactname: contactname,
            contactphone: contactphone,
            contactemail: contactemail,
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