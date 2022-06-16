

export const FetchParams = async() => {
    let response = await fetch(`${process.env.REACT_APP_API}/params`);
    let data = await response.json();
    return data;
}