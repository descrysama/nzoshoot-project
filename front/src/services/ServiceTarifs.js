

export const FetchAllPrices = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/tarifs');
    let data = await response.json();
    return data;
    
}