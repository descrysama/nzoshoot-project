
export const FetchAll = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/albums');
    let data = await response.json();
    return data;
    
}



