'use client';

import { Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

function Aluno({ user } : { user: any }) {
    console.log(user);
    return (
    <div className="bg-[#232324] m-2 px-8 py-2 flex rounded-2xl">
        <Avatar className="w-16 h-16">
            <AvatarImage src={user.mediaUrl} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center m-2">
            <h1>{user.name}</h1>
            <h2 className="text-[#979797]">isaque@gmail.com</h2>
        </div>
    </div>
    )
}

export function Lifters({ lifters } : { lifters: any[] }) {
    const [currentLifters, setCurrentLifters] = useState(lifters);
    
    function filterLifters(filter : string) {
        setCurrentLifters(lifters.filter(l => l.name.toLowerCase().includes(filter.toLowerCase())));
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Alunos cadastrados <span className="font-bold text-[#aaa]">({lifters.length})</span></h1>
                <div className="">
                    <div className="flex gap-2 border-2 border-[#0077B6] rounded-2xl items-center px-2 py-1">
                        <Search color="#0077B6" />
                        <input type="text" placeholder="Procurar Aluno" className="bg-[#151415] m-2 outline-none" 
                        onChange={(e) => { filterLifters(e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {currentLifters.map((l : any, i : number) => <Aluno user={l} key={i} />)}
            </div>
        </div>
    )
}