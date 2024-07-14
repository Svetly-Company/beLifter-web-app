'use client';

import { API_URL } from "@/utils/constants";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    function tryLogin(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!email || !password
        || password.length < 8 || password.length > 32
        ) {
            alert("Preencha todos os campos corretamente");
            return;
        }
        axios.post(API_URL + "auth/signin", {
            email,
            password
        }).then((res) => {
            const { access_token } = res.data as { access_token: string };
            setCookie("access_token", access_token);
            router.push("/admin/dashboard");
        }).catch((err) => {
            console.log(err);
        });
    }
    
    return (
        <form className="flex py-4 flex-col justify-center mt-16" onSubmit={tryLogin}>
            <div>
                <h1 className="text-2xl font-bold">Faça seu Login como Academia</h1>
            </div>
            <div className="mt-8 flex flex-col gap-2">
                <label className="text-sm" htmlFor="input-email">E-mail:</label>
                <input 
                className="w-4/5 bg-[#111112] rounded-lg px-4 py-2 shadow-sm shadow-[#0094bf77]"
                type="email" id="input-email" placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mt-8 flex flex-col gap-2">
                <label className="text-sm" htmlFor="input-pass">Senha:</label>
                <input 
                className="w-4/5 bg-[#111112] rounded-lg px-4 py-2 shadow-sm shadow-[#0094bf77]" 
                type="password" id="input-pass" placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mt-3 flex justify-end w-4/5">
                <a href="#" className="text-xs underline mr-2">Esqueci minha senha</a>
            </div>
            <div className="mt-8 flex justify-center w-4/5">
                <input 
                className="font-bold bg-gradient-to-r from-[#0094bf] to-[#0094bf44] py-4 w-4/5 rounded-lg hover:cursor-pointer"
                type="submit" 
                value="Entrar"
                />
            </div>
            <div className="mt-6 flex justify-center w-4/5">
                <a href="#" className="text-xs underline mr-2">Ainda não tenho uma conta</a>
            </div>
        </form>
    )
}