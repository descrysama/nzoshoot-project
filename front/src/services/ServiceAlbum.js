
export const FetchAllAlbums = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/albums');
    let data = await response.json();
    return data;
    
}

export const FetchAllImages = async(albumid) => {
    let response = await fetch('http://127.0.0.1:8000/api' + albumid);
    let data = await response.json();
    return data;
}



