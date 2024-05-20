import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

import MobileBG from "@/assets/mobile-app-bg.png";
import PhoneShowcase from "@/assets/app-phone-showcase.png";

export default function Page() {
    return (
        <section>
            <Header absolute />
            <section className="flex flex-col md:flex-row py-16 md:py-0 md:min-h-screen bg-gradient-to-b from-[#004422] to-[#017434]">
                <div className="flex-[0.6]">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <div className="flex flex-col gap-4 mt-4">
                            <h1 className="font-bold text-center text-4xl md:text-8xl"><span className="text-[#00BF63]">Be</span>Lifter</h1>
                            <h2 className="font-semibold text-base md:text-xl">O app fitness perfeito para seu dia-a-dia</h2>
                            <div className="flex justify-center">
                                <a className="bg-[#00BF63] rounded-full px-8 py-4" href="#">Baixar agora</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden flex-[0.4] md:block">
                    <Image className="w-full float-right" src={MobileBG} alt="App showcase" />
                </div>
            </section>
            <section className="bg-[#f0efef] min-h-screen flex flex-col md:flex-row">
                <div className="p-16">
                    <Image className="w-full" src={PhoneShowcase} alt="Phone" />
                </div>
                <div className="p-16">
                    <h1 className="text-black font-bold text-2xl md:text-6xl">
                        <span className="text-[#00BF63]">Aluno?</span> Baixe agora o app para gerenciar seus treinos e dietas:
                    </h1>
                    <div className="flex gap-8 w-full justify-around py-8">
                        <a className="bg-[#00BF63] px-4 py-2 rounded-full" href="#">
                            Baixar para Android
                        </a>
                        <a className="bg-[#00BF63] px-4 py-2 rounded-full" href="#">
                            Baixar para iOS
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}