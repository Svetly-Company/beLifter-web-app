import Image from "next/image";
import ImgMain from '../../assets/ImgPagGestao.png';
import ImgGets from '../../assets/PainelGestao.webp';
import { Footer } from "@/components/footer";
import LogoImage from "@/assets/logo-blue.png";

import PcShowCase from "@/assets/app-pc-showcase.webp";

interface IHeaderLink {
  href: string;
  text: string;
}

function HeaderLink({ href, text }: IHeaderLink) {
  return (
    <a href={href} className="border-b-2 border-b-transparent hover:border-b-[#0077B6]">{text}</a>
  );
}

export default function Home() {
  // Defina a variável 'absolute' como verdadeira ou falsa, dependendo da lógica desejada
  const absolute = false; // Mude para true se você quiser adicionar a classe "absolute"
 

  return (
    <section className="bg-black">
      <header className={"flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center py-8 px-8 md:px-20 " + 
      (absolute ? " md:absolute md:w-[98vw]" : "")}>
        <div className="">
          <a href="/">
            <Image 
              className="w-28"
              src={LogoImage} alt="Logo do BeLifter" 
            />
          </a>
        </div>
        <div className="flex gap-8">
          <HeaderLink text="Academias parceiras" href="/academias" />
          <HeaderLink text="Aplicativo Fitness" href="/aplicativo" />
          <HeaderLink text="Gestão de academia" href="/gestao" />
        </div>
        <div className="flex gap-8 border border-solid border-[#0077B6] text-[#0077B6] rounded-full px-12 py-2 justify-center">
          <HeaderLink text="Entrar" href="/admin/login" />
        </div>
      </header>

      <section className="flex items-center justify-center flex-col bg-white w-full h-[52rem]	 rounded-3xl gap-2">
        <div className="text-black text-5xl font-bold pt-8">
          <h1>Uma nova era para</h1>
        </div>      
        <div className="text-black text-5xl font-bold">
          <h1>controlar sua academia</h1>
        </div>
        <div className="text-black p-2 text-lg ">
          <h2>Sistema completo para gestão de academia!</h2>
        </div>
        <div className="p-4">
          <button className="w-48 h-11 bg-black hover:bg-[#0077B6] rounded-full"><a className="" href="#Recursos">Saiba Mais</a></button>
        </div>
        <div className="w-4/6 flex flex-col justify-end shadow-black shadow-2xl

">
          <Image className="rounded-t-3xl "
            src={ImgGets} alt="Image da gestão parte admin"
          />
        </div>
      </section>

      <section id="Recursos" className="flex flex-col w-full justify-center items-center p-24">
        <div>
          <h1 className="text-3xl p-5">Recursos</h1>
        </div>
        <div className="flex flex-row w-3/5 h-[28rem] bg-white rounded-3xl justify-center">
          <div className="flex justify-center items-center w-1/2">
            <Image
              src={PcShowCase} alt="Imagem Main da Gestão" className="w-11/12"
            />
          </div>
          <div className="w-1/2 flex flex-col p-6 gap-5 justify-center">
            <div className="text-[#0077B6] text-3xl font-bold">
              <h1>Painel de Controle</h1>
            </div>
            <div className="text-xl  text-black">
              <li>Gestão dos Alunos</li>
              <li>Progresso e Desempenho</li>
              <li>Produtividade e Eficiencia metódicas</li>
            </div>
            <div className="text-[#0077B6] text-3xl font-bold ">
              <h1>Recursos Principais</h1>
            </div>
            <div className="text-xl text-black">
              <li> Perfil do aluno personalizado </li>
              <li> Registro de Atividades </li>
              <li> Avaliação e Progresso </li>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full p-16">
        <div className="border-b w-5/6 border-white">
        </div>
        <div className="flex flex-col items-center text-white text-5xl font-bold p-16">
          <h1 className="p-7">Não perca mais tempo!</h1>
          <h1 className="text-sm">Experimente a solução ideal para gestão e controle de acesso</h1>
          <h1 className="text-sm">para academias de alta performace</h1>
        </div>
        <button className="w-80 h-12 bg-white rounded-3xl text-black hover:bg-[#0077B6] hover:text-white">Solicitar pacotes com especialista</button>
        <div className="border-b w-3/5 border-white p-14">
        </div>
      </section>

      <Footer />
    </section>
  );
}
