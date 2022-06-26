import axios from "axios";

// Ces requêtes ne sont plus utilisées sur le site final car le client n'en avait plus besoin.



// POST : envoi du formulaire de contact qui se stockera ensuite en BDD pour s'envoyer par mail.
export const SendForm = async(nameValue, emailValue, phoneNumberValue, messageValue) => {
    let response = await axios.post(`${process.env.REACT_APP_API}/contact`, {
        name: nameValue,
        email: emailValue,
        phone_number: phoneNumberValue,
        message: messageValue
    })
    return response;
}

// GET : requête pour recupérer tout les mails envoyés qui ont été stockés en BDD pour la view ADMIN.
export const FetchAllMessages = async() => {
    let token  = localStorage.getItem('session_token');
    let response = await fetch(`${process.env.REACT_APP_API}/contact/${token}`);
    let data = await response.json();
    return data;       
}

// POST : requête pour supprimer un contact qui à été envoyé, ayant l'id du tarif et le token de l'admin pour authentifier la requête.
export const DeleteMessage = async(contact_idValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/contact/delete`, {
        session_token: token,
        contact_id: contact_idValue
    })
    return response;
}