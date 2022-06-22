import axios from "axios";

export const FetchAllPrices = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/tarifs`);
    let data = await response.json();
    return data;
}




export const CreateTarif = async(nameValue, timeValue, descriptionValue, photosValue, priceValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/create/`, {
        name: nameValue,
        time: timeValue,
        description: descriptionValue,
        photos: photosValue,
        plan_price: priceValue,
        session_token: token
    });
    return response;
}

export const DeleteTarif = async(tarifid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/delete/`, {
        session_token: token,
        tarif_id: tarifid,
    });
    return response;
}

export const UpdateTarif = async(tarifid, nameValue, timeValue, descriptionValue, photosValue, priceValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/edit/${tarifid}`, {
        name: nameValue,
        time: timeValue,
        description: descriptionValue,
        photos: photosValue,
        plan_price: priceValue,
        session_token: token
    });
    return response;
}