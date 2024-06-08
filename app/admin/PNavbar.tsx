
//import icons
import { IoPerson , IoStorefrontSharp  } from "react-icons/io5";
import { BsGearFill } from "react-icons/bs";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { BiDumbbell } from "react-icons/bi";
import { TbRulerMeasure } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { IoIosSearch, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

//import image
import Cliente from '@/assets/client.jpg'

import Link from "next/link";
import Image from 'next/image'

function AlunoCard() {
    return (
        <Link href="/admin/profile" className="flex bg-[#3D383A] rounded-3xl items-center justify-between my-3 p-5">
            <div className="flex items-center">
                <div  className="flex rounded-full">
                    <Image className="flex p-auto place-self-center rounded-full w-20 h-20 object-cover mx-8  m-auto" src={Cliente} alt="foto perfil cliente"/>
                </div>
                <div>
                    <h1 className="font-medium">Jucelino Angelino Alvares Cabral</h1>
                    <p className="text-[#979797]">juscelino988@gmail.com</p>
                </div>
            </div>

            <div>
                <h1 className="p-2 px-3 bg-primary-blue rounded-2xl">Ativo</h1>
            </div>

            <div>
                <h1 className="">90839289</h1>
            </div>

            <div>
                <h1 className="">Etec Fit</h1>
            </div>

            <div>
                <h1 className="">02/04/2024</h1>
            </div>
        </Link>
    )
}

export function PNavbar(){

    return(
        <div className="flex ">
            <nav className="flex font-medium w-full max-w-72  mt-20 justify-end    ">
                <ul className="flex flex-col gap-4">
                    <li className="">
                        <Link className="flex flex-row p-3  rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/admin">
                            <RiLayoutMasonryFill className="place-self-center text-lg ml-2"/>
                            <p>Painel de controle</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex flex-row p-3 bg-[#232324] rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/">
                            <IoPerson className="place-self-center text-lg ml-2"/>
                            <p>Alunos</p>
                        </Link>       
                    </li>
                    <li>
                        <Link className="flex flex-row p-3  rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/">
                            <IoStorefrontSharp className="place-self-center text-lg ml-2"/>
                            <p>Academias Parceiras</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link className="flex flex-row p-3 rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/">
                            <BiDumbbell className="place-self-center text-lg ml-2"/>
                            <p>Treinos</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link className="flex flex-row p-3 rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/">
                            <TbRulerMeasure className="place-self-center text-lg ml-2"/>
                            <p>Avaliações</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link className="flex flex-row p-3  rounded-l-lg gap-2 hover:text-primary-blue w-60 " href="/">
                            <BsGearFill className="place-self-center text-lg ml-2"/>
                            <p>Configurações</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <section className="w-full [#232324] rounded-[50px] bg-[#232324] p-12 mr-16 h-[85vh] overflow-hidden overflow-y-scroll scrollbar-none">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex text-2xl gap-1 font-medium">
                            <h1>Alunos Cadastrados</h1>
                            <p className="text-gr text-[#B0B0B0;]">(180)</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center relative">
                                <input className="w w-72 h-10 border border-primary-blue  bg-transparent rounded-[15px] px-10 text-white " type="text" name="txtProcuraAluno" placeholder="Procurar aluno"/>
                                <IoIosSearch className='text-primary-blue text-2xl h-full absolute  flex mx-3 justify-center'/>
                            </div>
                            <div>
                                <Link className="flex bg-primary-blue p-2 px-4 gap-1 rounded-xl" href="admin/register"><GoPlus className="place-self-center text-2xl"/><p>Cadastrar aluno</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-5 pt-10">
                        <span className="flex w-[27rem] gap-1 items-center justify-center"><h1>Nome</h1><IoIosArrowDown /></span>
                        <span className="flex gap-1 items-center"><h1>Status</h1><IoIosArrowUp /></span>
                        <span className="flex gap-1 items-center"><h1>Nº Matricula</h1><IoIosArrowDown /></span>
                        <span className="flex gap-1 items-center"><h1>Unidade</h1><IoIosArrowDown /></span>
                        <span className="flex gap-1 items-center"><h1>Ultimo acesso</h1><IoIosArrowDown /></span>
                    </div>
                    <div>
                        <div>
                            <AlunoCard />
                            <AlunoCard />
                            <AlunoCard />
                            <AlunoCard />
                            <AlunoCard />
                            <AlunoCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}