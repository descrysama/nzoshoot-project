
export const CheckAuth = async() => {
    let token = localStorage.getItem('session_token')
    console.log(token)
    let response = await fetch('http://127.0.0.1:8000/api/auth/check', {
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