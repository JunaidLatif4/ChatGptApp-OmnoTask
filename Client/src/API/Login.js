import axios from "../AxiosInstance";




const LoginWithEmailAPI = async (email) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/login/email",
            method: "POST",
            data: {
                email
            }
        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

export { LoginWithEmailAPI }