import axiosInstance from "./config";

export const getMovies = () => axiosInstance.get(`/characters`)
.then((response) => response.data)
.catch((error) => console.log(error));

