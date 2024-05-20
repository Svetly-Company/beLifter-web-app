import { Header } from "@/components/header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import GymExample from "@/assets/example-gym-bg.png";
import { Footer } from "@/components/footer";

interface IGymCard {
    name: string;
    address: string;
    price: string;
}

function GymCard({ name, address, price } : IGymCard) {
    return (
        <div className="flex flex-col w-64 mx-auto">
            <Image src={GymExample} alt="Example" />
            <div className="bg-[#232324] rounded-b-lg flex flex-col">
                <h1 className="font-bold text-xl text-center pt-4">{name}</h1>
                <p className="font-light text-xs text-center p-4">{address}</p>
                <p className="font-bold text-sm text-center">Plano básico</p>
                <p className="font-semibold text-xl text-center"><span className="text-[#00BF63] mr-2">R$</span>{price}</p>
                <div className="p-4 flex justify-center">
                    <a className="text-center transition-colors bg-[#00BF63] hover:bg-[#3daa6b] px-8 py-2 rounded-full" href="#">Ver mais</a>
                </div>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <section>
            <Header />
            <section className="flex flex-col px-8 md:px-20 py-4 justify-center items-center">
                <div className="flex flex-col gap-4 justify-between mb-8 md:flex-row md:w-full">
                    <p className="text-2xl">Onde deseja treinar?</p>
                    <div className="flex">
                        <a href="#" className="bg-[#00BF63] py-2 px-4 rounded-full font-semibold flex gap-2">
                            <label>Torne-se um parceiro</label>
                            <ChevronRight size={24} />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 md:m-4 w-full justify-around items-center">
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="RedFit" address="Rua Mato do Grosso, 111 - Jardim São Paulo, São Paulo" price="139,99" />
                    <GymCard name="DumbFit" address="Avenida Santo Ribeiro, 1322 - Pinheiros, São Paulo" price="69,99" />
                    <GymCard name="YellowFit" address="Avenida Luiz Ricardo, 666 - Freguesia do Ó, São Paulo" price="89,90" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                    <GymCard name="YellowFit" address="Rua Ribeirão do Santo, 288 - Vila Mariana, São Paulo" price="99,99" />
                </div>
            </section>
            <Footer />
        </section>
    )
}