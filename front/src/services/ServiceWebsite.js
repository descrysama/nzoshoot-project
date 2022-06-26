import axios from "axios";


// GET : récupère les paramètres du site.
export const FetchParams = async() => {
    let response = await axios.get(`${process.env.REACT_APP_API}/params`);
    return response;
}

// POST : Update des paramètres du site.
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