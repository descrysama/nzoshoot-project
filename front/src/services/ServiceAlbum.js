
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
    let response = await fetch(`${process.env.REACT_APP_API}/album/delete/${albumid}`, {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
        body: JSON.stringify({
            session_token: token
        })
    });
    let data = await response.json();
    return data;
}


