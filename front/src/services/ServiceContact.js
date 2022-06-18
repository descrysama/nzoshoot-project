import axios from "axios";


export const SendForm = async(nameValue, emailValue, phoneNumberValue, messageValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/contact`, {
        name: nameValue,
        email: emailValue,
        phone_number: phoneNumberValue,
        message: messageValue
    })
    return response;
}

export const FetchAllMessages = async() => {
    let token  = localStorage.getItem('session_token');
    let response = await fetch(`${process.env.REACT_APP_API}/contact/${token}`);
    let data = await response.json();
    return data;       
}


export const DeleteMessage = async(contact_idValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/contact/delete`, {
        session_token: token,
        contact_id: contact_idValue
    })
    return response;
}