import Image from "next/image";
import LogoImage from "./assets/logo.png";
import { UserCircle } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="w-full bg-[#0F0F10] min-h-screen">
      <header className="flex justify-around items-center py-8">
        <div className="">
          <Image 
          className="w-28"
          src={LogoImage} alt="Logo do BeLifter" 
          />
        </div>
        <div className="flex gap-4">
          <a href="itau.com.br" className="hover:border-b-2 hover:border-b-[#00BF63]">Academias</a>
          <a href="" className="hover:border-b-2 hover:border-b-[#00BF63]">Avaliação</a>
          <a className="border-b-2 border-b-[transparent] hover:border-b-[#00BF63]">Meus Planos</a>
        </div>
        <div className="">
          <UserCircle size={32} />
        </div>
      </header>
    </div>
  );
}
