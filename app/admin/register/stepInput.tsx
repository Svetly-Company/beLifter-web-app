import { toast, useToast } from "@/components/ui/use-toast";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useRegistrationStore } from "./registerForm";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

/* INTERFACES */
type IInput = { 
    id: string, 
    label: string, 
    wrong: boolean, 
    type: "color" | "email" | "password" | "text", 
    placeholder?: string, 
    value: string,
    onChange?: (e : ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number
}
type INextButton = { 
    lastStep? : boolean, 
    onClick?: () => void
};
type IStepInput = { 
    step: number, 
    next: () => void
};

/* MASKS */
const cnpjMask = (value : string) => {
    return value
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
}
const cepMask = (value : string) => {
    return value
      .replace(/\D+/g, '') // remove any non-digit characters
      .replace(/(\d{5})(\d)/, '$1-$2') // add a hyphen after the first 5 digits
      .replace(/(-\d{3})\d+?$/, '$1') // capture the last 3 digits, with a hyphen before them
}
const numberMask = (value : string) => {
    return value
      .replace(/\D+/g, '') // remove any non-digit characters
}
const unmasker = (value : string) => {
    return value.replaceAll(/\D+/g, '');
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
                "shadow-[#ff8f8f]": wrong,
                "opacity-60": !onChange && true
            })}
            type={type} 
            id={"input-"+id} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength || 32}
            disabled={!onChange && true}
            />}
        </div>
    )
}

function DialogButton() {
    const previousData = useRegistrationStore((state) => state.data);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const router = useRouter();

    return (
        <AlertDialog>
        <AlertDialogTrigger 
        className="font-bold bg-gradient-to-r from-[#0094bf] to-[#0094bf44] py-4 w-4/5 rounded-lg hover:cursor-pointer"
        >
            Criar conta
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-900 border-slate-950 text-white">
            <AlertDialogHeader>
            <AlertDialogTitle>{previousData.name}, Confirme os seus dados</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-300">
                Verifique se todas as informações estão corretas. Após a criação da conta, você não poderá alterar o CNPJ e o e-mail.
                <span className="flex flex-col gap-1 my-2">
                    <b>CNPJ:</b> {cnpjMask(previousData.cnpj || "")}<br />
                    <b>E-mail:</b> {previousData.email}<br />
                    <b>Endereço:</b> {previousData.location.street}, {previousData.location.streetNumber} - {previousData.location.district}, {previousData.location.city} - {cepMask(previousData.location.cep || "")}   
                </span>
                Caso todos os dados estejam corretos, aceite os termos e clique em &quot;Criar conta&quot;.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-col sm:flex-col gap-4">
                <div className="flex gap-2">
                    <input type="checkbox" checked={acceptTerms} onChange={(e) => { setAcceptTerms(e.target.checked) }} />
                    <label className="text-xs text-slate-300">
                        Aceito os <u>termos de uso</u> e a <u>política de privacidade</u>.
                    </label>
                </div>
                <div className="flex justify-around">
                    <AlertDialogCancel className="bg-red-600 text-white border-none">Cancelar</AlertDialogCancel>
                    <AlertDialogAction 
                    onClick={async (e) => { 
                        e.preventDefault(); 
                        if(!acceptTerms) {
                            toast({ title: "Termos de uso", description: "Aceite os termos de uso para continuar.", variant: "destructive" });
                            return;
                        }
                        const creation = await useRegistrationStore.getState().finishRegistration();
                        if(creation.code === "success") {
                            console.log(creation);
                            setCookie("access_token", creation.access_token);
                            setTimeout(() => { router.push("/admin/dashboard"); }, 500);
                            return;
                        }
                        toast({ title: "Erro ao criar conta", description: "Ocorreu um erro ao criar a sua conta: " + creation.message, variant: "destructive" });
                    }}
                    className="bg-gradient-to-r to-[#0094bf] from-[#0094bf44] hover:from-[#2a91b185] hover:to-[#3cc8f3] text-white">
                        Criar conta
                    </AlertDialogAction>
                </div>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
} 

function NextButton({ lastStep, onClick } : INextButton) {
    return (
        <div className="mt-6 flex justify-center w-full">
            {
                !lastStep ? <input 
                className="font-bold bg-gradient-to-r from-[#0094bf] to-[#0094bf44] py-4 w-4/5 rounded-lg hover:cursor-pointer"
                type="button"
                onClick={onClick}
                value="Próximo"
                /> :
                <DialogButton />
            }
        </div>
    )
}

function TimeInput({ dayname, update } : { dayname: string, update: (day: string, opening?: string, closing?: string) => void }) {
    const [active, setActive] = useState(false);
    const [opening, setOpening] = useState("06:00");
    const [closing, setClosing] = useState("22:00");
    return (
        <div className={clsx("flex items-center justify-between w-full", {
            "opacity-60": !active
        })}>
            <div className="flex gap-2">
                <input 
                checked={active} 
                type="checkbox"
                onChange={(e) => { 
                    e.target.checked ? setActive(true) : setActive(false); 
                    if(!e.target.checked) update(dayname, undefined, undefined);
                    else update(dayname, opening, closing);
                }} 
                />
                <label className="text-base">{dayname}</label>
            </div>
            <div className="flex gap-2">
                <input 
                disabled={!active} 
                value={opening}
                onChange={(e) => {
                    setOpening(e.target.value);
                    update(dayname, e.target.value, closing);
                }} 
                type="time" 
                className="bg-slate-800 color-white text-sm px-2 rounded-sm shadow-sm shadow-[#0092bfd8]" 
                />
                <input 
                disabled={!active} 
                value={closing} 
                onChange={(e) => {
                    setClosing(e.target.value);
                    update(dayname, opening, e.target.value);
                }}
                type="time" 
                className="bg-slate-800 color-white text-sm px-2 rounded-sm shadow-sm shadow-[#0092bfd8]" 
                />
            </div>
        </div>
    )
}

/* WORKING TIME */
function StepFour({ next } : { next: () => void }) {
    const updateData = useRegistrationStore((state) => state.updateData);
    
    const [times, setTimes] = useState({});
    const { toast } = useToast();

    function storeTimes() {
        updateData({ times });
    }

    function updateTimes(day : string, opening? : string, closing? : string) {
        if(!opening || !closing) {
            setTimes({ ...times, [day]: null });
            return;
        }
        setTimes({ ...times, [day]: { opening, closing }});
    }

    return (
        <div>
            <div className="my-2">
                <h1 className="text-center text-lg font-bold">Horário de funcionamento</h1>
            </div>
            <div className="flex flex-col gap-3">
                <TimeInput dayname="Segunda-feira" update={updateTimes} />
                <TimeInput dayname="Terça-feira" update={updateTimes} />
                <TimeInput dayname="Quarta-feira" update={updateTimes} />
                <TimeInput dayname="Quinta-feira" update={updateTimes} />
                <TimeInput dayname="Sexta-feira" update={updateTimes} />
                <TimeInput dayname="Sábado" update={updateTimes} />
                <TimeInput dayname="Domingo" update={updateTimes} />
            </div>
            <NextButton lastStep={true} />
        </div>
    )
}

// Location
function StepThree({ next } : { next: () => void }) {
    const previousData = useRegistrationStore((state) => state.data)
    const updateData = useRegistrationStore((state) => state.updateData);
    
    const [cep, setCEP] = useState(previousData.location?.cep && cepMask(previousData.location.cep) || "");
    const [street, setStreet] = useState(previousData.location?.street || "");
    const [district, setDistrict] = useState(previousData.location?.district || "");
    const [city, setCity] = useState(previousData.location?.city || "");
    const [streetNumber, setStreetNumber] = useState(previousData.location?.streetNumber || "");
    const [wrongInputs, setWrongInputs] = useState({ cep: false, street: false });
    const { toast } = useToast();

    function tryNext() {
        const cepValue = unmasker(cep);
        if(!cepValue || cepValue.length != 8) {
            setWrongInputs({ cep: true, street: false });
            toast({ title: "CEP inválido", description: "Digite um CEP válido.", variant: "destructive" });
            return;
        }
        if(!streetNumber) {
            setWrongInputs({ cep: false, street: true });
            toast({ title: "Número da rua obrigatório", description: "Digite o número da rua da sua academia.", variant: "destructive" });
            return;
        }
        updateData({ location: { cep: cepValue, street, city, district, streetNumber } });
        next();
    }

    return (
        <div>
            <Input
            id="cep"
            label="CEP da sua academia"
            wrong={wrongInputs.cep}
            placeholder="Digite o CEP da sua academia"
            type="text"
            value={cep}
            maxLength={9}
            onChange={(e) => {
                setWrongInputs({ cep: false, street: false });
                let currentInput = cepMask(e.target.value);
                setCEP(currentInput)
                if(currentInput.length == 9) {
                    fetch(`https://viacep.com.br/ws/${unmasker(currentInput)}/json/`)
                    .then(res => res.json())
                    .then(data => {
                        if(data.erro) {
                            toast({ title: "CEP inválido", description: "Digite um CEP válido.", variant: "destructive" });
                            setWrongInputs({ cep: true, street: false });
                            return;
                        }
                        setStreet(data.logradouro);
                        setDistrict(data.bairro);
                        setCity(data.localidade);
                    })
                    .catch(() => {
                        toast({ title: "CEP inválido", description: "Digite um CEP válido.", variant: "destructive" });
                        setWrongInputs({ cep: true, street: false });
                    })
                }else{
                    setStreet("");
                    setDistrict("");
                    setCity("");
                }
            }}
            />
            <Input
            id="district"
            label="Localização da sua academia"
            wrong={wrongInputs.street}
            placeholder="A localização da sua academia aparacerá aqui"
            type="text"
            value={street ? `${street}, ${district} - ${city}` : ""}
            maxLength={128}
            />
            <Input
            id="street-number"
            label="Número da rua"
            wrong={wrongInputs.street}
            placeholder="Digite o número da rua"
            type="text"
            value={streetNumber}
            maxLength={4}
            onChange={(e) => {
                setWrongInputs({ cep: false, street: false });
                setStreetNumber(numberMask(e.target.value))
            }}
            />
            <NextButton onClick={tryNext} />
        </div>
    )
}

// CNPJ, Name, color
function StepTwo({ next } : { next: () => void }) {
    const previousData = useRegistrationStore((state) => state.data)
    const updateData = useRegistrationStore((state) => state.updateData);

    const [cnpj, setCNPJ] = useState(previousData.cnpj && cnpjMask(previousData.cnpj) || "");
    const [name, setName] = useState(previousData.name || "");
    const [color, setColor] = useState(previousData.color || "#ff0000");
    const [wrongInputs, setWrongInputs] = useState({ cnpj: false, name: false });
    const { toast } = useToast();

    function tryNext() {
        const cnpjValue = unmasker(cnpj);
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
        updateData({ cnpj: cnpjValue, name, color });
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
            value={cnpj}
            maxLength={18}
            onChange={(e) => {
                setWrongInputs({ cnpj: false, name: false });
                setCNPJ(cnpjMask(e.target.value))
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
            <NextButton onClick={tryNext} />
        </div>
    )
}

// Email, Password
function StepOne({ next } : { next: () => void }) {
    const previousData = useRegistrationStore((state) => state.data)
    const updateData = useRegistrationStore((state) => state.updateData);

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
        updateData({ email, password });
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
            <NextButton onClick={tryNext} />
        </div>
    )
}

export function StepInput({ step, next } : IStepInput) {
    if(step == 1) return <StepOne next={next} />;
    if(step == 2) return <StepTwo next={next} />;
    if(step == 3) return <StepThree next={next} />;
    if(step == 4) return <StepFour next={next} />;
}