import axios from 'axios';

// GET : recupere tout les albums.
export const FetchAllAlbums = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/albums`);
    let data = await response.json();
    return data;
    
}

// GET : recupere toutes les images en fonction de l'id de l'album founi.
export const FetchAllImages = async(albumid) => {
    let response = await fetch(`${process.env.REACT_APP_API}/album/` + albumid);
    let data = await response.json();
    return data;
}


// POST : supprime l'album et ses images en fonction de l'id fournit. Cette requête requiert un token valide pour s'executer dans back-end.
export const DeleteAlbum = async(albumid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/album/delete/${albumid}`, {
        session_token: token,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })

    return response;
}

// POST : supprime l'image en fonction de son ID, cette requête aussi requiert un token valide pour s'executer dans back-end.
export const DeleteImage = async(imageid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/image/delete/${imageid}`, {
        session_token: token,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })

    return response;
}

// POST : crée un album avec les valeurs requises dont une image.
export const createAlbum = async(nameValue, placeValue, coverValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/album/create`, {
        name: nameValue,
        place: placeValue,
        cover_path: coverValue,
        session_token: token
    }, {
        headers: {
            "Content-type": "multipart/form-data",
            'Access-Control-Allow-Origin': '*',
        }
    })
    return response;
}

// POST : ajoute une image dans l'album designé par l'id fourni.
export const addImages = async(images, albumid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/image/create`, {
        image_path: images,
        album_id: albumid,
        session_token: token
    },{
        headers: {
            "Content-type": "multipart/form-data",
            'Access-Control-Allow-Origin': '*',
        }
    })
    return response;
}

// GET : récupere les les données de l'album en fonction de l'id fournit pour l'admin.
export const fetchAlbum = async(albumid) => {
    let response = await axios.get(`${process.env.REACT_APP_API}/album/edit/${albumid}`);
    return response;
}


// POST : met à jour l'album avec les valeurs fournies .
export const updateAlbum = async(albumid, nameValue, placeValue, coverValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/album/edit/${albumid}`, {
        name: nameValue,
        place: placeValue,
        cover_path: coverValue,
        session_token: token,
    },
    {
        headers: {
            "Content-type": "multipart/form-data", 
            'Access-Control-Allow-Origin': '*',
        }
    });
    return response;
}

export const OrderAlbum = async(albumid, direction) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/album/order`, {
        order: direction,
        album_id: albumid,
        session_token: token,
    },
    {
        headers: {
            "Content-type": "multipart/form-data", 
            'Access-Control-Allow-Origin': '*',
        }
    });
    return response;
}

export const OrderImage = async(imageid, direction) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/image/order`, {
        order: direction,
        image_id: imageid,
        session_token: token,
    },
    {
        headers: {
            "Content-type": "multipart/form-data", 
            'Access-Control-Allow-Origin': '*',
        }
    });
    return response;
}
