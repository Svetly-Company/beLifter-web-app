import axios from "axios";

export const MONTH_ARRAY = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export const API_URL = process.env.NODE_ENV == "production" ? "https://belifter-server.onrender.com/" : "http://localhost:3333/";

export class API {
     static async get(path : string, access_token?: string) {
        const header = access_token ? { headers: { Authorization: `Bearer ${access_token}` } } : {};
        try{
            const result = await axios.get(API_URL+path, header);
            return { data: result.data, status: result.status };
        }catch(e : any) {
            return e;
        }
    }
     static async post(path : string, data : any, access_token?: string) {
        const header = access_token ? { headers: { Authorization: `Bearer ${access_token}` } } : {};
        try {
            const result = await axios.post(API_URL+path, data, header);
            return { data: result.data, status: result.status };
        }catch(e : any) {
            return e;
        }
    }
}