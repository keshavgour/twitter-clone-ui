import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default axiosBaseURL;
