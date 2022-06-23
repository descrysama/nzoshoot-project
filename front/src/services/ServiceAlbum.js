import axios from 'axios';

export const FetchAllAlbums = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/albums`);
    let data = await response.json();
    return data;
    
}

export const FetchAllImages = async(albumid) => {
    let response = await fetch(`${process.env.REACT_APP_API}/album/` + albumid);
    let data = await response.json();
    return data;
}

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

export const fetchAlbum = async(albumid) => {
    let token = localStorage.getItem('session_token');
    let response = await axios.get(`${process.env.REACT_APP_API}/album/edit/${albumid}`);
    return response;
}

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
