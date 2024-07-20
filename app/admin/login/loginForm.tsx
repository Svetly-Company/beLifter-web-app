'use client';

import { useToast } from "@/components/ui/use-toast";
import { API } from "@/utils/constants";
import clsx from "clsx";
import { deleteCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm({ error } : { error: boolean }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongInputs, setWrongInputs] = useState({ email: false, password: false });
    const router = useRouter();
    const { toast } = useToast();

    if(error) deleteCookie("access_token");

    function wrongSubmit(alert : string) {
        setWrongInputs({ email: true, password: true });
        toast({ title: "Dados inválidos", description: alert, variant: "destructive"});
    }

    function tryLogin(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!email || !password
        || password.length < 8 || password.length > 32
        ) {
            wrongSubmit("Preencha todos os campos corretamente.");
            return;
        }
        API.post("auth/signin", {
            email,
            password
        }).then((res) => {
            const { access_token } = res.data as { access_token: string };
            if(!access_token) {
                if(res.data.status === 401) {
                    wrongSubmit("Verifique seu e-mail e sua senha.");
                }
                return;
            }
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
                className={clsx(`w-4/5 bg-[#111112] rounded-lg px-4 py-2 shadow-sm transition-shadow shadow-[#0094bf77]`, {
                    "shadow-[#ff8f8f]": wrongInputs.email
                })}
                type="email" id="input-email" placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => {
                    setWrongInputs({ email: false, password: false });
                    setEmail(e.target.value)
                }}
                />
            </div>
            <div className="mt-8 flex flex-col gap-2">
                <label className="text-sm" htmlFor="input-pass">Senha:</label>
                <input 
                className={clsx(`w-4/5 bg-[#111112] rounded-lg px-4 py-2 shadow-sm transition-shadow shadow-[#0094bf77]`, {
                    "shadow-[#ff8f8f]": wrongInputs.password
                })}
                type="password" id="input-pass" placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => {
                    setWrongInputs({ email: false, password: false });
                    setPassword(e.target.value)
                }}
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
                <Link href="/admin/register" className="text-xs underline mr-2">Ainda não tenho uma conta</Link>
            </div>
        </form>
    )
}