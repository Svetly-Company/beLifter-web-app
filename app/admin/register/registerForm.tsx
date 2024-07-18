'use client';

import { useToast } from "@/components/ui/use-toast";
import { API_URL } from "@/utils/constants";
import axios from "axios";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { StepInput } from "./stepInput";
import clsx from "clsx";

const TOTAL_STEPS = 3;

export function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongInputs, setWrongInputs] = useState({ email: false, password: false });
    const router = useRouter();
    const { toast } = useToast();

    const [userdata, setUserdata] = useState({});
    const [step, setStep] = useState(1);

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
    }

    function appendUserdata(data : any) {
        setUserdata((state) => ({ ...state, ...data }));
    }

    function nextStep() {
        setStep((state) => state + 1);
    }
    function stepBack() {
        setStep((state) => state - 1);
    }
    
    return (
        <form className="flex flex-col justify-center mt-12 w-4/5" onSubmit={tryLogin}>
            <div>
                <h1 className="text-2xl font-bold text-center w-full">Traga sua Academia para o BeLifter</h1>
            </div>
            <div className="my-4 w-full h-[0.1rem] flex gap-2">
                {
                    Array.from({ length: TOTAL_STEPS }, (_, index) => index + 1).map((i) => {
                        return <div className={clsx("flex-1 h-full rounded-sm transition-colors ", {
                            "bg-white": i != step,
                            "bg-[#0094bf]": i == step
                        })}></div>
                    })
                }
            </div>
            <StepInput step={step} next={nextStep} datasetter={appendUserdata} previousData={userdata} />
            <div className="mt-6 flex justify-center w-full">
                <Link 
                href={step == 1 ? "/admin/login" : ""} 
                onClick={(e) => { if(step == 1) return; e.preventDefault(); stepBack(); }}
                className="text-xs underline mr-2">
                    {step == 1 ? "Já tenho uma conta" : "Voltar"}
                </Link>
            </div>
        </form>
    )
}