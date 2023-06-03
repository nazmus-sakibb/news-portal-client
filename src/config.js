import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://news-portal-server-nazmus-sakibb.vercel.app/api"
});