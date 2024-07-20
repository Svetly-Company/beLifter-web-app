'use client';

import Link from "next/link";
import { useState } from "react";
import { StepInput } from "./stepInput";
import clsx from "clsx";
import { create } from "zustand";
import { API } from "@/utils/constants";

const TOTAL_STEPS = 4;

interface IRegistrationState {
    data: any,
    updateData: (data: any) => void,
    finishRegistration: () => Promise<any>
}
export const useRegistrationStore = create<IRegistrationState>()(
    (set, get) => ({
        data: {},
        updateData: (data : any) => set((state) => ({ data: { ...state.data, ...data } })),
        finishRegistration: async () => {
            const register_post = await API.post("gym/create", get().data);
            console.log(register_post)
            if(register_post.status == 201) return {code: "success", access_token: register_post.data.access_token};
            if(register_post.data?.target) {
                switch(register_post.data.target[0].toLowerCase()) {
                    case "email":
                        return { code: "error", message: "Email já cadastrado" };
                    case "cnpj":
                        return { code: "error", message: "CNPJ já cadastrado" };
                    default:
                        console.log(register_post);
                        return { code: "error", message: "Tente novamente mais tarde." }
                }
            }
            return { code: "error", message: "Tente novamente mais tarde." }
        }
    })
)

export function RegisterForm() {
    const [step, setStep] = useState(1);  

    function nextStep() {
        setStep((state) => state + 1);
    }
    function stepBack() {
        setStep((state) => state - 1);
    }
    
    return (
        <form className="flex flex-col justify-center mt-12 w-4/5">
            <div>
                <h1 className="text-2xl font-bold text-center w-full">Traga sua Academia para o BeLifter</h1>
            </div>
            <div className="my-4 w-full h-[0.1rem] flex gap-2">
                {
                    Array.from({ length: TOTAL_STEPS }, (_, index) => index + 1).map((i) => {
                        return <div key={i} className={clsx("flex-1 h-full rounded-sm transition-colors ", {
                            "bg-white": i != step,
                            "bg-[#0094bf]": i == step
                        })}></div>
                    })
                }
            </div>
            <StepInput step={step} next={nextStep} />
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