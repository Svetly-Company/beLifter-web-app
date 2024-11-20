"use client"

import Image from "next/image";
import { Header } from "@/components/header";
import { API } from "@/utils/constants";
import { useEffect, useState } from "react";
import { ChevronRight, Clock, MapPin, MoveRight } from "lucide-react";
import { Footer } from "@/components/footer";

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
    profilePicture: string
  }

  useEffect(() => {
    getProps()
  }, [strId])

  async function getProps() {
    try{
      const obj = await API.get("gym")
      const val:acadProps[] = obj.data
      const acad = val.find((element: { id: number }) => element.id == acadId)
      setGym(acad ?? {id: 0, name: "", cnpj: "", location: { idLocation: 0, CEP: "", street: "", district: "", city: ""}, profilePicutre: ""})
    }catch(err){
      throw err;
    }
  }

  return (
    <section className="flex flex-col min-h-screen w-full bg-[#0c0c0c]">
      <Header />
      <div className="w-full px-32">
        <div className="flex flex-col gap-1 font-bold">
          <h1 className="text-3xl ">Academia</h1>
          <h1 className="text-3xl text-[#00BF63]">{gym.name}</h1>
        </div>
        <div className="flex flex-row mt-4 w-full justify-between">
            <div className="flex w-full flex-[1.7]">
              <img className="bg-cover rounded-3xl w-3/4"
                  src={gym.profilePicture} alt="Imagem de Fundo Academia"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-full flex-1">
              <div className="flex flex-col border-slate-400 border-2 rounded-2xl w-full p-6">
                <div className="flex gap-2 items-center mb-4">
                  <Clock fill="#fff" stroke="#232324" size={24} />
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
              <div className="flex justify-center flex-col rounded-2xl border-slate-400 border-2 w-full p-6">
                <div className="flex gap-2 items-center mb-4">
                  <MapPin size={24} fill="#fff" stroke="#232324" />
                  <h1 className="text-lg pt-1">Endereço</h1>
                </div>
                <div className="text-base pb-2">
                  <p>Rua: {gym.location.street}</p>
                  <p>Bairro: {gym.location.district}</p>
                  <p>CEP: {gym.location.CEP}</p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <button className="w-full py-2 rounded-3xl bg-[#00BF63] text-base flex flex-row items-center justify-center">
                  <a href="">Treinar Aqui</a>
                  <ChevronRight size={30} />
                </button>
              </div>
            </div>
        </div> 
        <div className="flex flex-col mt-8 p-8">
          <div className="p-4 mb-8">
            <h1 className="text-3xl font-bold">Planos</h1>
          </div>
          <div className="flex text-center justify-between">
            <div className="border-[1px] text-xl border-white rounded-2xl">
              <div className="p-4 text-2xl pt-12">
                <p>R$599,99/ano</p>
              </div>
              <div className="bg-black p-4">
                Plano Trimestral
              </div>
              <div className="p-4 flex flex-col gap-8">
                <p>Acesse quando quiser</p>
                <p>Leve até 5 amigos por mês</p>
                <p>Consulta com nutricionista</p>
              </div>
              <div className="flex justify-center p-4 pb-12">
                <a href="#" className="bg-[#00BF63] p-4 rounded-2xl">Comprar agora</a>
              </div>
            </div>
            <div className="border-[1px] text-xl border-white rounded-2xl">
              <div className="p-4 text-2xl pt-12">
                <p>R$399,99/ano</p>
              </div>
              <div className="bg-[#00592E] p-4">
                Plano Anual
              </div>
              <div className="p-4 flex flex-col gap-8">
                <p>Acesse quando quiser</p>
                <p>Leve até 15 amigos por mês</p>
                <p>Consulta com nutricionista</p>
              </div>
              <div className="flex justify-center p-4">
                <a href="#" className="bg-[#00BF63] p-4 rounded-2xl">Comprar agora</a>
              </div>
            </div>
            <div className="border-[1px] text-xl border-white rounded-2xl">
              <div className="p-4 text-2xl pt-12">
                <p>R$899,99/ano</p>
              </div>
              <div className="bg-black p-4">
                Plano Mensal
              </div>
              <div className="p-4 flex flex-col gap-8">
                <p>Acesse quando quiser</p>
                <p>Leve até 1 amigo por mês</p>
                <p>Acesso a dietas pré-definidas</p>
              </div>
              <div className="flex justify-center p-4">
                <a href="#" className="bg-[#00BF63] p-4 rounded-2xl">Comprar agora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}