import axios from "axios";

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