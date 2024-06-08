import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function Navbar({ lblCategoria, lblTituloCat } : { lblTituloCat: string, lblCategoria:string}){
    return(
        <main className="m-auto w-full bg-grey-bg text-white flex flex-col ">
            <div className="p-12 max-w-[115rem]">
                <p className="font-light mx-16">{`${lblCategoria} > ${lblTituloCat} `}</p>
                <Link href="/admin">
                    <div className="flex flex-row text-center font-medium text-3xl gap-x-4 my-2 items-center">
                        <MdKeyboardArrowLeft  className=" text-5xl text-center"/>
                        <h1 className="text-center">{lblTituloCat}</h1>
                    </div>
                </Link>
            </div>
        </main>
    )
}