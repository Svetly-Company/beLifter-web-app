"use client";

import { Header } from "@/components/header";
import { ChevronRight } from "lucide-react";
import Image, { ImageProps } from "next/image";
import GymExample from "@/assets/example-gym-bg.png";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { API } from "@/utils/constants";

interface IGymCard {
    id: number,
    name: string,
    address: string,
    price: string,
    profilePicture: string;
}


function GymCard({ name, address, price, profilePicture, id } : IGymCard) {
    return (
        <div className="flex flex-col w-64 mx-auto">
            {
                profilePicture ? <img src={profilePicture} alt="Example" className=" w-64 h-36 rounded-t-3xl object-cover"/> : <Image src={GymExample} alt="Example" />
            }
            <div className="bg-[#232324] rounded-b-lg flex flex-col">
                <h1 className="font-bold text-xl text-center pt-4">{name}</h1>
                <p className="font-light text-xs text-center p-4">{address}</p>
                <p className="font-bold text-sm text-center">Plano básico</p>
                <p className="font-semibold text-xl text-center"><span className="text-[#00BF63] mr-2">R$</span>{price}</p>
                <div className="p-4 flex justify-center">
                    <a className="text-center transition-colors bg-[#00BF63] hover:bg-[#3daa6b] px-8 py-2 rounded-full" href={"academias/" + id}>Ver mais</a>
                </div>
            </div>
        </div>
    )
}

type GymProps = {
    id:number,
    name:string,
    profilePicture: string
}
export default function Page() {

    const [gyms, setGyms] = useState<Array<GymProps>>([])

    useEffect(() =>{
        getGyms()
    }, [gyms])

    async function getGyms(){
        try{
            const values = await API.get("gym")
            .then((res) => {
                if(res.data.status){
                    throw new Error(String(res.data.message))
                }
                return res.data
            }).catch((err) => { throw err})

            setGyms(values)

        }catch(err){
            setGyms([])
        }
    }
    return (
        <section>
            <Header />
            <section className="flex flex-col px-8 md:px-20 py-4 justify-center items-center">
                <div className="flex flex-col gap-4 justify-between mb-8 md:flex-row md:w-full">
                    <p className="text-2xl">Onde deseja treinar?</p>
                    <div className="flex">
                        <a href="#" className="bg-[#00BF63] py-2 px-4 rounded-full font-semibold flex gap-2">
                            <label>Torne-se um parceiro</label>
                            <ChevronRight size={24} />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 md:m-4 w-full justify-around items-center">
                    {
                        gyms && gyms.map((x) => (
                            <GymCard profilePicture={x.profilePicture} name={x.name} address={x.name} price="99,99" id={x.id} key={x.id} />
                        ))
                    }
                </div>
            </section>
            <Footer />
        </section>
    )
}