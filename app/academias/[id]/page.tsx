"use client"

import Image from "next/image";
import { Header } from "@/components/header";
import { API } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function Academia({ params }: { params: { id: string } }) {

  const strId = params.id
  
  const acadId = parseInt( strId )

  const [gym, setGym] = useState<acadProps>({id: 0, name: "", cnpj: "", location: { idLocation: 0, CEP: "", street: "", district: "", city: ""}, profilePicutre: ""})

  type acadProps = {
    id: number
    name: string,
    cnpj: string,
    location: {
      idLocation: number,
      CEP: string,
      street: string,
      district: string,
      city: string
    },
    profilePicutre: string
  }

  useEffect(() => {
    getProps()
  }, [strId])

  async function getProps() {
    try{
      const val:acadProps[] = await API.get("gym")
      const acad = val.find((element: { id: number }) => element.id == acadId)
      setGym(acad ?? {id: 0, name: "", cnpj: "", location: { idLocation: 0, CEP: "", street: "", district: "", city: ""}, profilePicutre: ""})
    }catch(err){
      throw err;
    }
  }


  console.log(gym);

  return (
    <section className="flex flex-col h-screen w-full bg-[#232324]">
      <Header />
      <div className="mx-auto w-4/5">
        <div className="flex flex-col gap-1 font-bold">
          <h1 className="text-3xl ">Academia</h1>
          <h1 className="text-3xl text-[#00BF63]">{gym.name}</h1>
        </div>
        <div className="flex flex-row mt-4">
            <div className="flex justify-center items-center w-4/5">
            <img className="bg-cover rounded-3xl"
                src={gym.profilePicutre} alt="Imagem de Fundo Academia"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <div className="flex flex-col rounded-lg border-slate-400 border-2 w-3/5 p-6">
                <div>
                  <h1 className="pt-1 text-lg">Horário de Funcionamento</h1>
                </div>
                <div className="flex flex-row gap-16">
                  <div className="flex flex-col text-base gap-px">
                    <p>Seg a Sex</p>
                    <p>Sáb / Feriado</p>
                    <p>Dom</p>
                  </div>
                  <div className="flex flex-col text-base gap-px pb-2">
                    <p>5h - 23h</p>
                    <p>8h - 17h</p>
                    <p>8h - 14h</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-col rounded-lg border-slate-400 border-2 w-3/5 p-6">
                <div>
                  <h1 className="text-lg pt-1">Endereço</h1>
                </div>
                <div className="text-base pb-2">
                  <p>Rua: {gym.location.street}</p>
                  <p>Bairro: {gym.location.district}</p>
                  <p>CEP: {gym.location.CEP}</p>
                </div>
              </div>
              <div className="flex w-full h-12 justify-center items-center">
                <button className="w-2/5 h-4/5 rounded-3xl bg-[#00BF63] text-base"><a href="">Treinar Aqui</a></button>
              </div>
            </div>
        </div> 
      </div>
      <section>
        
      </section>
    </section>
    
  );
}