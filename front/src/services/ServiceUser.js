import axios from "axios";


// POST : de l'email et du mot de passe pour le login.
export const Login = async(emailValue, passwordValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email: emailValue,
        password: passwordValue
    });

    return response;
}

// POST : de l'email pour le reset (aucun email ne s'envoi si l'email ne se trouve pas en BDD).
export const ResetPassword = async(emailValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword`, {
        email: emailValue
    });

    return response;
}

// POST : pour authentifier le token se trouvant dans l'url.
export const CheckToken = async(token) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword/checktoken`, {
        reset_password_token: token
    })

    return response;
}

// POST : envoi le nouveau mot de passe + le fameux token valide qui servira pour verifier l'authenticité de la requête.
export const ChangePassword = async(passwordValue, tokenValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/resetpassword/changepassword`, {
        password: passwordValue,
        reset_password_token: tokenValue
    })

    return response
}