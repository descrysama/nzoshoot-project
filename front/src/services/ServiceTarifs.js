import axios from "axios";

export const FetchAllPrices = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/tarifs`);
    let data = await response.json();
    return data;
}

export const DeleteTarif = async(tarifid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/delete/`, {
        session_token: token,
        tarif_id: tarifid
    });
    return response;
}