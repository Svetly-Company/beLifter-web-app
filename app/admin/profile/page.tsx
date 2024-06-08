//import pages
import { Navbar } from "../Navbar";
import { AdminHeader } from "../AdminHeader";

//import images
import Image from "next/image";
import Cliente from '@/assets/client.jpg'

//import icons
import { PiCake } from "react-icons/pi";
import { IoPersonOutline, IoCalendarOutline, IoMailOutline, IoStorefrontOutline, IoDocumentTextOutline, IoCardOutline  } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export default function PerfilAlunos() {
  return (
    <div className="bg-grey-bg w-full h-dvh text-white">    
            <AdminHeader />
            <Navbar lblCategoria="alunos" lblTituloCat="Perfil do aluno"/>
            <div className="bg-[#232324] flex flex-col m-auto rounded-[30px] mx-16 mb-20 p-12 max-w-[115rem] ">
                <div className="flex border-b w-full border-current border-[#ADADAD]">
                    <div className="flex rounded-full mb-10">
                        <Image className="flex justify-center rounded-full w-36 h-36 object-cover mx-8" src={Cliente} alt= 'Foto Perfil cliente'/>
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                        <h1>Nº Matricula: 90839289</h1>
                        <div className="flex text-lg gap-5 font-medium">
                             <h1>Juscelino Angelino Alvares Cabral</h1>
                              <FaEdit className="text-xl text-primary-blue" />
                        </div>
                        <div className="flex flex-row gap-2">
                            <h1 className="bg-primary-blue rounded-full p-1 px-2 text-xs font-medium">Ativo</h1>
                            <h1 className="bg-primary-blue rounded-full p-1 px-2 text-xs font-medium">Normal</h1>
                            <h1 className="bg-primary-blue rounded-full p-1 px-2 text-xs font-medium">Acesso liberado</h1>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center m-auto lg:flex-row lg:justify-between lg:m-0">
                    <div className="flex flex-col m-10 gap-3 ">
                        <h1 className="text-3xl font-semibold ">Dados pessoais</h1>
                        <span className="flex items-center gap-2 font-light text-lg"><IoPersonOutline /> <p>Masculino</p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><IoCalendarOutline /> <p>07 / 06 / 2005</p> <PiCake /><p> 25 anos  </p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><BsTelephone /> <p>(11)90000-0000 </p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><IoMailOutline /> <p>juscelino988@gmail.com</p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><IoStorefrontOutline /><p>Etec fit <br/>(Und. Bom retiro)</p></span>
                    </div>
                    <div className="flex flex-col m-10 gap-3 ">
                        <h1 className="text-3xl font-semibold ">Dados do plano</h1>
                        <span className="flex items-center gap-2 font-light text-lg"><IoDocumentTextOutline /> <p>Plano black</p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><GiBiceps /> <p>Musculacão</p></span>
                        <h1 className="text-3xl font-semibold ">Dados do pagamento</h1>
                        <span className="flex items-center gap-2 font-light text-lg"><IoCardOutline /> <p>Liberado(a)</p></span>
                        <span className="flex items-center gap-2 font-light text-lg"><RiBarcodeBoxLine /> <p>Debito em conta corrente</p></span>
                    </div>
                    <div className="flex flex-col m-10 gap-10 ">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl font-semibold">Ficha de treino</h1>
                            <span className="flex items-center gap-2 font-light text-lg"><IoDocumentTextOutline /> <p>Hipertrofia</p></span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="flex gap-10"><h1 className="text-3xl font-semibold">Ficha de treino</h1><IoIosArrowDown className="bg-bg-button rounded-full text-3xl p-1" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}