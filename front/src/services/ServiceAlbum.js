import axios from 'axios';

export const FetchAllAlbums = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/albums`);
    let data = await response.json();
    return data;
    
}

export const FetchAllImages = async(albumid) => {
    let response = await fetch(`${process.env.REACT_APP_API}` + albumid);
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


