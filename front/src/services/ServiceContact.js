export const FetchAllMessages = async() => {
    let token  = localStorage.getItem('session_token');
    let response = await fetch(`${process.env.REACT_APP_API}/contact/${token}`);
    let data = await response.json();
    return data;       
}