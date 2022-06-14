import axios from "axios";

export const Login = async(emailValue, passwordValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email: emailValue,
        password: passwordValue
    });

    return response;
}

export const ResetPassword = async(emailValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword`, {
        email: emailValue
    });

    return response;
}