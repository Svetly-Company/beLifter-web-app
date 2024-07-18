import { useToast } from "@/components/ui/use-toast";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

type IInput = { 
    id: string, 
    label: string, 
    wrong: boolean, 
    type: string, 
    placeholder?: string, 
    value: string,
    onChange: (e : ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number
}

function Input({ id, label, wrong, type, placeholder, value, onChange, maxLength } : IInput) {
    return (
        <div className="mt-6 flex flex-col gap-2">
            <label className="text-sm" htmlFor={"input-"+id}>{label}:</label>
            {type == "color" ? <input 
                className={`w-full bg-transparent rounded-lg border-none shadow-sm transition-shadow`}
                type={type} 
                id={"input-"+id} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /> 
            : <input 
            className={clsx(`w-full bg-[#111112] rounded-lg px-4 py-2 shadow-sm transition-shadow shadow-[#0094bf77]`, {
                "shadow-[#ff8f8f]": wrong
            })}
            type={type} 
            id={"input-"+id} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength || 32}
            />}
        </div>
    )
}

const cnpjMask = (value : string) => {
    return value
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
}
const cnpjUnmask = (value : string) => {
    return value.replaceAll(/\D+/g, '');
}

// CNPJ, Name, color
function StepTwo({ next, datasetter, previousData } : { next: () => void, datasetter: (data: any) => void, previousData: any }) {
    const [cnpj, setCNPJ] = useState(previousData.cnpj || "");
    const [name, setName] = useState(previousData.name || "");
    const [color, setColor] = useState(previousData.color || "#ff0000");
    const [wrongInputs, setWrongInputs] = useState({ cnpj: false, name: false });
    const { toast } = useToast();

    function tryNext() {
        const cnpjValue = cnpjUnmask(cnpj);
        if(!cnpjValue || cnpjValue.length != 14) {
            setWrongInputs({ cnpj: true, name: false });
            toast({ title: "CNPJ inválido", description: "Digite um CNPJ válido.", variant: "destructive" });
            return;
        }
        if(!name) {
            setWrongInputs({ cnpj: false, name: true });
            toast({ title: "Nome obrigatório", description: "Digite o nome da sua academia.", variant: "destructive" });
            return;
        }
        datasetter({ cnpj: cnpjValue, name, color });
        next();
    }

    return (
        <div>
            <Input
            id="cnpj"
            label="CNPJ da sua academia"
            wrong={wrongInputs.cnpj}
            placeholder="Digite o CNPJ da sua academia"
            type="text"
            value={cnpjMask(cnpj)}
            maxLength={18}
            onChange={(e) => {
                setWrongInputs({ cnpj: false, name: false });
                setCNPJ(e.target.value)
            }}
            />
            <Input
            id="cnpj"
            label="Nome da sua academia"
            wrong={wrongInputs.name}
            placeholder="Digite o nome da sua academia"
            type="text"
            value={name}
            onChange={(e) => {
                setWrongInputs({ cnpj: false, name: false });
                setName(e.target.value)
            }}
            />
            <Input
            id="color"
            label="Cor principal da sua academia"
            wrong={false}
            type="color"
            value={color}
            onChange={(e) => {
                setColor(e.target.value)
            }}
            />
            <div className="mt-6 flex justify-center w-full">
                <input 
                className="font-bold bg-gradient-to-r from-[#0094bf] to-[#0094bf44] py-4 w-4/5 rounded-lg hover:cursor-pointer"
                type="button" 
                onClick={tryNext}
                value="Próximo"
                />
            </div>
        </div>
    )
}

// Email, Password
function StepOne({ next, datasetter, previousData } : { next: () => void, datasetter: (data: any) => void, previousData: any }) {
    const [email, setEmail] = useState(previousData.email || "");
    const [password, setPassword] = useState(previousData.password || "");
    const [confirmPassword, setConfirmPassword] = useState(previousData.password || "");
    const [wrongInputs, setWrongInputs] = useState({ email: false, password: false });
    const { toast } = useToast();

    function tryNext() {
        if(!email || !email.includes("@")) {
            setWrongInputs({ email: true, password: false });
            toast({ title: "E-mail inválido", description: "Digite um e-mail válido.", variant: "destructive" });
            return;
        }
        if(!password || !confirmPassword || password.length < 8 || password.length > 32) {
            setWrongInputs({ email: false, password: true });
            toast({ title: "Senha inválida", description: "Digite uma senha com no mínimo 8 caracteres.", variant: "destructive" });
            return;
        }
        if(password != confirmPassword) {
            setWrongInputs({ email: false, password: true });
            toast({ title: "Senha inválida", description: "Suas senhas não coincidem.", variant: "destructive" });
            return;
        }
        datasetter({ email, password });
        next();
    }

    return (
        <div>
            <Input
            id="email"
            label="E-mail"
            wrong={wrongInputs.email}
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(e) => {
                setWrongInputs({ email: false, password: false });
                setEmail(e.target.value)
            }}
            />
            <Input
            id="pass"
            label="Senha"
            wrong={wrongInputs.password}
            placeholder="Digite uma senha forte"
            type="password"
            value={password}
            onChange={(e) => {
                setWrongInputs({ email: false, password: false });
                setPassword(e.target.value)
            }}
            />
            <Input
            id="confirm"
            label="Confirme sua senha"
            wrong={wrongInputs.password}
            placeholder="Digite a senha novamente"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
                setWrongInputs({ email: false, password: false });
                setConfirmPassword(e.target.value)
            }}
            />
            <div className="mt-8 flex justify-center w-full">
                <input 
                className="font-bold bg-gradient-to-r from-[#0094bf] to-[#0094bf44] py-4 w-4/5 rounded-lg hover:cursor-pointer"
                type="button" 
                onClick={tryNext}
                value="Próximo"
                />
            </div>
        </div>
    )
}

type IStepInput = { 
    step: number, 
    next: () => void, 
    datasetter: (data: any) => void,
    previousData: any
};

export function StepInput({ step, next, datasetter, previousData } : IStepInput) {
    if(step == 1) return <StepOne next={next} datasetter={datasetter} previousData={previousData} />;
    if(step == 2) return <StepTwo next={next} datasetter={datasetter} previousData={previousData} />;
}