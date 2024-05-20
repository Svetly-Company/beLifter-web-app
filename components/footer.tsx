import Image from "next/image";
import LogoImage from "@/assets/logo.png";

function FooterLink({ text, href } : { text: string, href: string }) {
    return (
        <li className="text-sm hover:underline"><a href={href}>{text}</a></li>
    )
}

export function Footer() {
    return (
        <footer className="bg-[#040404] w-full px-16 pt-16 pb-4">
            <div className="">
                <div className="flex justify-center">
                    <Image 
                        className="w-28"
                        src={LogoImage} alt="Logo do BeLifter" 
                    />
                </div>
                <div className="px-16 py-8 flex justify-around w-full flex-col md:flex-row gap-8">
                    <ul className="flex flex-col gap-2">
                        <h1 className="text-[#00BF63] text-xl font-semibold">Empresa</h1>
                        <FooterLink href="#" text="Sobre nós" />
                        <FooterLink href="#" text="Nossa equipe" />
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <h1 className="text-[#00BF63] text-xl font-semibold">Links úteis</h1>
                        <FooterLink href="#" text="Suporte" />
                        <FooterLink href="#" text="Reporte um problema" />
                        <FooterLink href="#" text="Nosso aplicativo" />
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <h1 className="text-[#00BF63] text-xl font-semibold">Parceria</h1>
                        <FooterLink href="#" text="Entre em contato" />
                        <FooterLink href="#" text="Aplicativo de parceiros" />
                    </ul>
                </div>
            </div>
            <div className="text-center pt-8 pb-2">
                <p>Todos os direitos reservados &copy; Svetly Company</p>
            </div>
        </footer>
    )
}