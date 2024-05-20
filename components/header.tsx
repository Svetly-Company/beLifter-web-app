import Image from "next/image";
import LogoImage from "@/assets/logo.png";

interface IHeaderLink {
    href: string;
    text: string;
}

function HeaderLink({ href, text } : IHeaderLink) {
    return (
        <a href={href} className="border-b-2 border-b-transparent hover:border-b-[#00BF63]">{text}</a>
    )
}

export function Header({ absolute } : { absolute?: boolean }) {
    return (
      <header className={"flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center py-8 px-8 md:px-20" + 
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
          <HeaderLink text="Academias parceiras" href="academias" />
          <HeaderLink text="Aplicativo Fitness" href="aplicativo" />
          <HeaderLink text="Entrar" href="login" />
        </div>
      </header>
    )
}