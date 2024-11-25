import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import IconBalan from "../../assets/Icon.png";
import IconAndroid from "../../assets/Android.png";
import IconIphone from "../../assets/Iphone.png";
import IconSpeed from "../../assets/Icon2.png";
import IconSpoon from "../../assets/Icon3.png";
import IconGraphic from "../../assets/Icon4.png";
import Image from "next/image";

import MobileBG from "@/assets/mobile-app-bg.png";
import PhoneShowcase from "@/assets/app-phone-showcase.webp";
import PhoneShowFunc from "@/assets/Phone-Show-Func.webp";


export default function Page() {
    return (
        <section>
            <Header absolute />
            <section className="flex flex-col md:flex-row py-16 md:py-0 md:min-h-screen  bg-no-repeat bg-cover">
                <div className="flex-[0.6] bg-[url('/assets/BackgroundAPP.jpg')]">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <div className="flex flex-col mt-4">
                            <h1 className="font-bold text-6xl text-center md:text-[8rem]"><span className="text-[#00BF63]">Be</span>Lifter</h1>
                            <div className="flex flex-col justify-center p-1">
                                <div className="p-6">
                                    <h2 className="font-semibold text-center text-base md:text-3xl">O app fitness indicado para você!</h2> 
                                </div>
                                <div className="flex justify-center">
                                    <a className="bg-[#00BF63] rounded-full px-20 py-4 hover:bg-[#004422] transition ease-in delay-150 duration-300  " href="#">Baixar agora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="flex flex-col md:flex-row py-16 md:py-0 md:min-h-screen bg-gradient-to-b from-[#004422] to-[#017434]">
                <div className="flex-[0.6]">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <div className="flex flex-col mt-4">
                            <h1 className="font-bold text-6xl text-center md:text-[8rem]"><span className="text-[#00BF63]">Be</span>Lifter</h1>
                            <div className="flex flex-col justify-center p-1">
                                <div className="p-6">
                                    <h2 className="font-semibold text-center text-base md:text-3xl">O app fitness indicado para você!</h2> 
                                </div>
                                <div className="flex justify-center">
                                    <a className="bg-[#00BF63] rounded-full px-20 py-4 hover:bg-[#004422] transition ease-in delay-150 duration-300  " href="#">Baixar agora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden flex-[0.4] md:block">
                    <Image className="w-full float-right" src={MobileBG} alt="App showcase" />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center">
                <div className="flex justify-center gap-24 items-center">
                    <div className="w-1/3">
                        <Image src={PhoneShowFunc} alt="Celular" />
                    </div>
                    <div className="flex flex-col gap-10 p-16 items-center justify-center">
                        <div className="font-bold text-5xl pl-3 text-white text-start w-full">
                            <h1>Recursos</h1>
                        </div>
                        <div className="flex flex-row gap-x-24 w-full">
                            <div className="text-center justify-center flex flex-col items-center rounded-3xl min-h-36 min-w-60 max-w-60 bg-[#232324] group from-[#017434] transition ease-in delay-150 duration-150 hover:bg-[#004422] hover:flex-1">
                                <div className="p-3">
                                    <Image src={IconBalan} alt=""/>
                                </div>
                                <h1 className="p-3 font-semibold text-xl">Avaliação fisica</h1>
                                    <p className="align-items text-justify transition ease-in delay-150 duration-300 visible opacity-100 static p-4">Nosso aplicativo é capaz de anotar tudo aquilo que você normalmente perderia tempo anotando durante seus treinos. Após isso, ainda proporcionamos dados sobre como treinar da melhor forma.</p>
                            </div>
                            <div className="text-center justify-center flex flex-col  items-center min-h-36 min-w-60 max-w-60 rounded-3xl	 bg-[#232324] hover:flex-1 hover:bg-[#004422]">
                                <div className="p-3">
                                    <Image src={IconSpeed} alt=""/>
                                </div>
                                <h1 className="p-3 font-semibold text-xl">Gestão de Treinos</h1>
                                <p className="align-items transition ease-in delay-150 duration-300 visible opacity-100 static text-justify p-4">Chega de complicações para organizar seus treinos. Com nossos treinos pré-definidos você só precisa se preocupar em realizar os exercícios e nada mais.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-24 w-full">
                            <div className="text-center justify-center flex flex-col items-center rounded-3xl	 min-h-36 min-w-60 max-w-60 bg-[#232324] group from-[#017434] transition ease-in delay-150 duration-150 hover:bg-[#004422] hover:flex-1 ">
                                <div className="p-3">
                                    <Image src={IconSpoon} alt=""/>
                                </div>
                                <h1 className="p-3 font-semibold text-xl">Controle de Dieta e Nutrição</h1>
                                    <p className="align-items text-justify transition ease-in delay-150 duration-300 visible opacity-100 static p-4">Além de treinar, é importante alimentar-se bem. Nosso aplicativo ajuda você a planejar refeições, controlar calorias e acompanhar o consumo de macros, para alinhar a dieta aos seus objetivos fitness.</p>
                            </div>
                            <div className="text-center justify-center flex flex-col  items-center min-h-36 min-w-60 max-w-60 rounded-3xl bg-[#232324] hover:flex-1 hover:bg-[#004422]">
                                <div className="p-3">
                                    <Image src={IconGraphic} alt=""/>
                                </div>
                                <h1 className="p-3 font-semibold text-xl">Relatórios de Progresso</h1>
                                <p className="align-items transition ease-in delay-150 duration-300 visible opacity-100 static text-justify p-4">Monitore sua evolução com gráficos e estatísticas sobre força, resistência e composição corporal. Assim, você visualiza sua transformação de forma clara e motivadora.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#f0efef] flex w-full h-screen  flex-col md:flex-row items-center">
                <div className="m-24 pl-12 flex flex-col">
                    <h1 className="text-black font-bold text-2xl md:text-6xl">
                        <span className="text-[#00BF63]">Aluno?</span> Baixe agora o app
                    </h1>
                    <h1 className="text-black font-bold text-3xl md:text-6xl">para gerenciar seus</h1>
                    <h1 className="text-black font-bold text-3xl md:text-6xl">treinos e dietas:</h1>
                    <div className="flex items-center gap-6 w-full justify-around p-28">
                            <a className="bg-[#00BF63] text-center justify-center flex flex-row items-center w-80 h-12 rounded-full" href="#">
                                <div className="p-2">
                                    <Image src={IconAndroid} alt=""/>
                                </div>
                                Baixar para Android
                            </a>
                            <a className="bg-[#00BF63] text-center justify-center flex flex-row items-center w-80 h-12 rounded-full" href="#">
                                <div className="p-2">
                                    <Image src={IconIphone} alt=""/>
                                </div>
                                Baixar para iOS
                            </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image className="w-3/4" src={PhoneShowcase} alt="Phone" />
                </div>
            </section>
            
            <Footer />
        </section>
    )
}