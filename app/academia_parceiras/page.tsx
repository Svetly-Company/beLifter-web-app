import Image from "next/image";
import Fundo from '../../assets/ImageFundo.jpg';
import { Header } from "@/components/header";

export default function Academia() {
  return (
    <section className="flex flex-col w-full bg-[#0F0F10]">
      <Header />
      <div className="mx-auto w-4/5">
        <div className="flex flex-col gap-1 font-bold">
          <h1 className="text-3xl ">Academia</h1>
          <h1 className="text-3xl text-[#00BF63]">Green Fit</h1>
        </div>
        <div className="flex flex-row mt-4">
            <div className="flex justify-center items-center w-4/5">
              <Image className="bg-cover rounded-3xl"
                src={Fundo} alt="Imagem de Fundo Academia"
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
                  <p>Rua: Bombom Maravilhoso Amor da minha vida</p>
                  <p>Número: 69</p>
                  <p>CEP: 0000-0000</p>
                </div>
              </div>
              <div className="flex w-full h-12 justify-center items-center">
                <button className="w-2/5 h-4/5 rounded-3xl bg-[#00BF63] text-base"><a href="">Treinar Aqui</a></button>
              </div>
            </div>
        </div> 
      </div>
      <section className="p-5">
        <h1 className="mx-auto w-4/5 text-4xl font-bold">Planos</h1>
        <div className="w-full flex flex-row justify-center items-cente gap-24 p-16">
            <div className="w-1/6 border border-slate-300 rounded-2xl flex justify-center items-center flex-col p-5 hover:transition ease-in delay-150 duration-150 hover:scale-110">
              <h1 className="flex items-center justify-center text-xl font-semibold">R$29,99/ *</h1>
              <h1 className="flex items-center justify-center text-xl font-semibold">ano</h1>
              <h2 className="flex items-center justify-center font-bold text-2xl p-5">Plano Semanal</h2>
              <p className="text-justify p-4">Assinar um plano de academia por uma semana permite explorar diversas atividades e sentir os benefícios do exercício, como mais energia e bem-estar. É uma ótima oportunidade para descobrir novas modalidades e cuidar da sua saúde!</p>
              <button className="w-40 h-14 bg-[#00BF63] rounded-3xl">Comprar Agora</button>
            </div>
            <div className="w-1/6 border border-slate-300 rounded-2xl flex justify-center items-center flex-col p-5 hover:transition ease-in delay-150 duration-150 hover:scale-110">
              <h1 className="flex items-center justify-center text-xl font-semibold">R$99,99/ *</h1>
              <h1 className="flex items-center justify-center text-xl font-semibold">mês</h1>
              <h2 className="flex items-center justify-center font-bold text-2xl p-5">Plano Mensal</h2>
              <p className=" p-4">Um plano mensal de academia permite criar hábitos saudáveis e experimentar diversas atividades, potencializando seus resultados. É o tempo ideal para melhorar seu condicionamento físico e se sentir parte de uma comunidade motivadora!</p>
              <button className="w-40 h-14 bg-[#00BF63] rounded-3xl">Comprar Agora</button>
            </div>
            <div className="w-1/6 border border-slate-300 rounded-2xl flex justify-center items-center flex-col p-5 hover:transition ease-in delay-150 duration-150 hover:scale-110">
              <h1 className="flex items-center justify-center text-xl font-semibold">R$699,99/ *</h1>
              <h1 className="flex items-center justify-center text-xl font-semibold">anual</h1>
              <h2 className="flex items-center justify-center font-bold text-2xl p-5">Plano Mensal</h2>
              <p className="text-justify p-4">Um plano anual de academia oferece comprometimento e consistência, fundamentais para alcançar metas a longo prazo. Além de permitir o desenvolvimento de uma rotina sólida, você pode aproveitar descontos e benefícios exclusivos</p>
              <button className="w-40 h-14 bg-[#00BF63] rounded-3xl">Comprar Agora</button>
            </div>
        </div>
      </section>
    </section>
  );
}
