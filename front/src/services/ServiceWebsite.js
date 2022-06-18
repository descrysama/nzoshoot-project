import axios from "axios";

export const FetchParams = async() => {
    let response = await axios.get(`${process.env.REACT_APP_API}/params`);
    return response;
}

export const UpdateParams = async(sloganValue, aboutmeValue, phoneValue, emailValue) => {
    let token = localStorage.getItem('session_token');
    let response = axios.post(`${process.env.REACT_APP_API}/params`, {
        slogan: sloganValue,
        about_me: aboutmeValue,
        phone_number: phoneValue,
        email: emailValue,
        session_token: token
    })

    return response;
}