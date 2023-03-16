import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export const api = {
    getFilms: async () => {
        const response = await axiosInstance.get(`/films/`);
        return response.data;
    },
    getCharacteres: async (id:number) => {
        const response = await axiosInstance.get(`/people/?page=${id}`);
        return response.data;
    },
    getVehicles: async (id: number) => {
        const response = await axiosInstance.get(`/vehicles/?page=${id}`);
        return response.data;
    },
    getFilm: async (id: string) => {
        const response = await axiosInstance.get(`/films/${id}`);
        return response.data;
    },
    getCharacter: async (id: string) => {
        const response = await axiosInstance.get(`/people/${id}/`);
        return response.data;
    },
    getVehicle: async (id: string) => {
        const response = await axiosInstance.get(`/vehicles/${id}/`);
        return response.data;
    }
}