import axios from "../AxiosInstance";

const ChatRequestAPI = async (message) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        const res = await axios({
            url: "/chat/",
            method: "POST",
            data: {
                message
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
};

export default { ChatRequestAPI }