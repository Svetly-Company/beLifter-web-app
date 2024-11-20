import axios from "axios";

export const MONTH_ARRAY = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const local = true;

export const API_URL = local ? "http://localhost:3333/" : "https://belifter-server.onrender.com/";

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

    static async upload(path : string, formData: FormData) {
        try {
            const result = await axios.post(API_URL+path, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
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