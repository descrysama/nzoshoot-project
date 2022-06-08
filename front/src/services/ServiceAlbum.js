
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



