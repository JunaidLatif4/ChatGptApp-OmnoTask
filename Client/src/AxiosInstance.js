import axios from "axios";



const Instance = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://task.omno.junaidlatif.com/server/api/",
});

export default Instance;