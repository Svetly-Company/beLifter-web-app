import Image from 'next/image'
import Logo from '@/assets/logo-blue.png'
import PerfilAdmin from '@/assets/personal.jpg'
import { IoIosSearch } from "react-icons/io";
import { BiSolidMessageRounded, BiBell } from "react-icons/bi";


export function AdminHeader(){
    return(
        <header className='flex h-24 w-full bg-grey-bg' >
            <div className='flex justify-between w-full max-w-[110rem] px-[15px] mx-auto '>
                <div className='items-center flex w-36 mr-24'>
                    <Image
                        src = {Logo} alt = 'logo'
                    />
                </div>
                <div className='flex items-center relative'>
                    <input type="text" name='PesqGeral' placeholder='Buscar...' className='2xl:w-[50rem] h-10 bg-[#232324] rounded-[15px] px-10 text-white xl:w-[35rem] lg:w-[20rem] w-[15rem]'/>
                    <IoIosSearch className='text-primary-blue text-2xl	absolute h-full flex mx-3 justify-center'/>
                </div>
                <div className='flex  items-center'>
                    <div className='flex gap-x-8 mx-9'>
                        <BiSolidMessageRounded className='text-white text-2xl' />
                        <BiBell className='text-white text-2xl'/>
                    </div>
                    <div className='flex items-center gap-x-8 text-white text-base text-center'>
                        <h1 className='hidden lg:block'>Haulices Pereira</h1>
                        <Image  className='w-16 rounded-full'
                            src={PerfilAdmin} alt='FotoPerfil'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}