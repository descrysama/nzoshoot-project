


export const CheckAuth = async() => {
    let token = localStorage.getItem('session_token')
    let response = await fetch(`${process.env.REACT_APP_API}/auth/check`, {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
        body: JSON.stringify({
            session_token: token
        })
    })
    let data = await response.json();
    return data;
}