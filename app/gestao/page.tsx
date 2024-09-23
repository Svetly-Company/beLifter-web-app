import Image from "next/image"
import ImgMain from '../../assets/ImgPagGestao.png'
import ImgGets from '../../assets/PainelGestao.webp'
import { Header } from "../../components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <section>
      <Header />
      <section className="flex items-center justify-center flex-col bg-white w-full rounded-3xl gap-2">
          <div className="text-black text-5xl font-bold">
            <h1>Uma nova era para</h1>
          </div>      
          <div className="text-black text-5xl font-bold">
            <h1>controlar sua academia</h1>
          </div>
          <div className="text-black p-2 text-lg font-bold">
            <h2>Sistema completo para gestão de academia!</h2>
          </div>
          <div className="p-5">
            <button className="w-48 h-11 bg-black rounded-full"><a>Saiba Mais</a></button>
          </div>
          <div className="w-3/5 flex flex-col justify-end">
            <Image className="rounded-t-3xl"
              src={ImgGets} alt="Image da gestão parte admin"
            />
          </div>
      </section>
      <section className="flex flex-col w-full justify-center items-center p-24">
        <div>
          <h1 className="text-3xl p-5">Recursos</h1>
        </div>
        <div className="flex flex-row w-3/5 bg-white rounded-3xl">
          <div className="flex justify-center items-center w-1/2 ">
            <Image
              src={ImgMain} alt="Imagem Main da Gestão"
            />
          </div>
          <div className="w-1/2 flex flex-col p-6 gap-5">
            <div className="text-[#0077B6] text-3xl">
              <h1>Painel de Controle</h1>
            </div>
            <div className="text-xl text-black">
              <li>Gestão dos Alunos</li>
              <li>Progresso e Desempenho</li>
              <li>Produtividade e Eficiencia metódicas</li>
            </div>
            <div className="text-[#0077B6] text-3xl">
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
              <button className="w-80 h-12 bg-white rounded-3xl text-black">Solicitar pacotes com especialista</button>
          <div className="border-b w-3/5 border-white p-14">
          </div>
      </section>
      <Footer />
    </section>
  );
}
