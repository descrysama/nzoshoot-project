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


export const CheckToken = async(token) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword/checktoken`, {
        reset_password_token: token
    })

    return response;
}

export const ChangePassword = async(passwordValue, tokenValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword/changepassword`, {
        password: passwordValue,
        reset_password_token: tokenValue
    })

    return response
}