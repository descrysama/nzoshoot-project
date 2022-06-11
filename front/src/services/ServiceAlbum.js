import axios from 'axios';

export const FetchAllAlbums = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/albums`);
    let data = await response.json();
    return data;
    
}

export const FetchAllImages = async(albumurl) => {
    let response = await fetch(`${process.env.REACT_APP_API}` + albumurl);
    let data = await response.json();
    return data;
}

export const DeleteAlbum = async(albumid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.post(`${process.env.REACT_APP_API}/album/delete/${albumid}`, {
        session_token: token
    })

    return response;
}

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
        }
    })
    return response;
}

export const fetchAlbum = async(albumid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.get(`${process.env.REACT_APP_API}/album/edit/${albumid}`);
    return response;
}

export const updateAlbum = async(albumid, nameValue, placeValue, coverValue) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.put(`${process.env.REACT_APP_API}/album/edit/${albumid}`, {
        name: nameValue,
        place: placeValue,
        cover_path: coverValue,
        session_token: token
    }, {
        headers: {
            "Content-type": "multipart/form-data",
            'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
            'Content-Type' : 'text/plain' 
        }
    });
    return response;
}
