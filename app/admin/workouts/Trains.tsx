'use client';

import { Edit, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReducer, useState } from "react";

function Aluno({ user } : { user: any }) {
    console.log(user);
    return (
    <div className="bg-[#232324] m-2 px-8 py-2 flex justify-between items-center rounded-2xl">
        <div className="flex gap-2">
            <Avatar className="w-16 h-16">
                <AvatarImage src={user.image} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center m-2">
                <h1>{user.name}</h1>
                <h2 className="text-[#979797]">{user.description}</h2>
            </div>
        </div>
        <div className="">
            <p className="text-xs">Exercícios: {user.exercises.map((e : any) => e.name).splice(0,3).join(", ")}</p>
        </div>
        <div className="">
            <Edit />
        </div>
    </div>
    )
}

export function Trains({ trains } : { trains: any[] }) {
    const [currentLifters, setCurrentLifters] = useState(trains);
    
    function filterLifters(filter : string) {
        setCurrentLifters(trains.filter(l => l.name.toLowerCase().includes(filter.toLowerCase())));
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Treinos cadastrados <span className="font-bold text-[#aaa]">({trains.length})</span></h1>
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