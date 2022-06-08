

export const FetchAllPrices = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/tarifs`);
    let data = await response.json();
    return data;
    
}