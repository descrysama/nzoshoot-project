import axios from "axios";

export const FetchAllPrices = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/tarifs`);
    let data = await response.json();
    return data;
}



// POST : requête pour la création d'un tarif contenant tout les champs à remplir dans la BDD.
export const CreateTarif = async(nameValue, timeValue, descriptionValue, photosValue, priceValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/create`, {
        name: nameValue,
        time: timeValue,
        description: descriptionValue,
        photos: photosValue,
        plan_price: priceValue,
        session_token: token,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        }
    });
    return response;
}

// POST : requête pour supprimer un tarif, ayant l'id du tarif et le token de l'admin pour authentifier la requête.
export const DeleteTarif = async(tarifid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/tarif/delete`, {
        session_token: token,
        tarif_id: tarifid,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
        }
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
        session_token: token,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
          }
    });
    return response;
}