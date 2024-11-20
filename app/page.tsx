import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";
import Woman from "@/assets/woman.png";

export default function Home() {
  return (
    <section className="w-full bg-[#0F0F10] min-h-screen">
      <Header absolute />
      <section className="flex items-center min-h-screen bg-[url('/gym-bg.jpg')]">
        <div className="flex items-center flex-row w-100% h-5/6">
          <div className="w-full h-5/6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center h-3/5 w-10/12 text-center font-bold gap-4">
                <h1 className="text-4xl md:text-8xl text-center">Believe in the future, Believe in <span className="text-green-400">Be</span>Lifter</h1>
                <p className="text-base md:text-2xl mt-2 font-normal">Revolucionando a forma como você registra os seus treinos</p>
            </div>
            <div className="w-4/5 h-1/5 flex items-center justify-center gap-8 mt-8">
                <a href="/academias" className=" bg-green-500 rounded-2xl px-4 py-2">Seja um parceiro</a>
                <a href="/gestao" className="rounded-2xl border-current border-2 px-4 py-2">Conheça nosso aplicativo</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
