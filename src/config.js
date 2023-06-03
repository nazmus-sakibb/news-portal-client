import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://news-portal-server-azure.vercel.app/api"
});