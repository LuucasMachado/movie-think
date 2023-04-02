import axios from "axios";

const api = axios.create({
 baseURL: "<%= BASE_URL %>/api",
});

export default api