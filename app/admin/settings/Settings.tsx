'use client';

import { Check, Pencil } from "lucide-react";
import { useState } from "react"

export function Settings({ user } : { user: any }) {
    const [name, setName] = useState(user.name as string);
    const [nameDisabled, setNameDisabled] = useState(true);

    function changeName() {
        alert('novo nome:'+name);
    }
    
    return (
        <div className="">
            <p>Nome:</p>
            <div className="bg-[#232324] w-full px-4 py-2 rounded-lg flex">
                <input type="text" value={name} disabled={nameDisabled} className="w-full bg-[#232324] outline-none" 
                onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => { if(!nameDisabled) changeName(); setNameDisabled(v => !v) }}>{
                    nameDisabled ? <Pencil size={20} /> : <Check />    
                }</button>
            </div>
        </div>
    )
}