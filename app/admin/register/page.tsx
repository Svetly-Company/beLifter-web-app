//import pages
import { Navbar } from "../Navbar";
import { AdminHeader } from "../AdminHeader";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import Link from "next/link"


export default function CadastrarPerfilAluno(){
    return (
        <div className="bg-grey-bg w-full h-[108vh] text-white">
            <AdminHeader />
            <Navbar lblCategoria="alunos" lblTituloCat="Cadastrar aluno"/>
            <form className="bg-[#232324] flex flex-col m-auto rounded-[30px] mx-16 mb-20 p-12 max-w-[115rem] ">
                <div className="flex border-b w-full border-current border-[#ADADAD]">
                    <div className="flex rounded-full mb-10">
                        <div className="bg-white flex justify-center rounded-full w-36 h-36 object-cover mx-8 items-center">
                            <MdOutlineAddPhotoAlternate className="text-black text-3xl"/>
                        </div>
                    </div>
                    <div className="flex    font-medium items-center">
                        <input type="text" name="txtNomeAluno" placeholder="Nome:" className="bg-[#151415] h-10 rounded-xl px-3 w-[70rem]"/>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center m-auto lg:flex-row lg:justify-between lg:m-0">
                    <div className="flex flex-col m-10 gap-3 ">
                        <h1 className="text-3xl font-semibold ">Dados pessoais</h1>
                        <input type="text" name="txtSexoAluno" placeholder="Sexo:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                        <input type="text" name="txtIdadeAluno" placeholder="Idade:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                        <input type="text" name="txtFoneAluno" placeholder="Telefone:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                        <input type="text" name="txtEmailAluno" placeholder="Email:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                        <input type="text" name="txtUnidAluno" placeholder="Unidade:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                    </div>
                    <div className="flex flex-col m-10 gap-3 ">
                        <h1 className="text-3xl font-semibold ">Dados do plano</h1>
                        <input type="text" name="txtCadPlanoAluno" placeholder="Pagamento:" className="bg-[#151415] h-10 rounded-xl px-3 w-[25rem]"/>
                    </div>
                    <div className="flex flex-col m-10 gap-10 justify-end">
                        <Link href="/" className="bg-primary-blue rounded-2xl p-3 px-4 text-xs font-medium">Ir para o pagamento</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}