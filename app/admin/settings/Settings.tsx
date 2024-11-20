'use client';

import { Check, Pencil } from "lucide-react";
import { useState } from "react"

export function Settings({ user } : { user: any }) {
    const [name, setName] = useState(user.name as string);
    const [nameDisabled, setNameDisabled] = useState(true);
    const [endereco, setEndereco] = useState("Avenida Tiradentes");
    const [enderecoDisabled, setEnderecoDisabled] = useState(true);

    function changeName() {
        alert('novo nome:'+name);
    }
    
    return (
        <div className="flex flex-col gap-4">
            <p>Nome:</p>
            <div className="bg-[#232324] w-full px-4 py-2 rounded-lg flex">
                <input type="text" value={name} disabled={nameDisabled} className="w-full bg-[#232324] outline-none" 
                onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => { if(!nameDisabled) changeName(); setNameDisabled(v => !v) }}>{
                    nameDisabled ? <Pencil size={20} /> : <Check />    
                }</button>
            </div>
            <p>Endereço:</p>
            <div className="bg-[#232324] w-full px-4 py-2 rounded-lg flex">
                <input type="text" value={endereco} disabled={enderecoDisabled} className="w-full bg-[#232324] outline-none" 
                onChange={(e) => setEndereco(e.target.value)}/>
                <button onClick={() => { if(!enderecoDisabled) changeName(); setEnderecoDisabled(v => !v) }}>{
                    enderecoDisabled ? <Pencil size={20} /> : <Check />    
                }</button>
            </div>
        </div>
    )
}