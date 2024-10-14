import Logo from "@/assets/logo-blue.png";
import Image from "next/image";
import { BarChart2, Dumbbell, LayoutDashboard, Settings, Store, UserCircleIcon } from "lucide-react";

interface INavItem {
    href: string;
    name: string;
    icon: React.ReactNode;
    selected?: boolean;
}

function NavbarItem({ href, name, icon, selected } : INavItem) {
    if(selected) return <li><a href={href} className="flex gap-4 bg-[#0077B6] p-3 rounded-full text-black font-semibold">
        {icon}
        <p>{name}</p>
    </a></li>

    return <li><a href={href} className="flex gap-4 p-3">
        {icon}
        <p>{name}</p>
    </a></li>
}

export function Navbar({ selectedIndex } : { selectedIndex: number }) {
    return <nav className="flex-[0.2]">
        <div className="bg-[#161616] flex flex-col p-4 rounded-lg">
            <Image src={Logo} alt="BeLifter Blue Logo" className="w-32 my-4 mx-auto" />
            <ul className="flex flex-col mt-8 gap-8">
                <NavbarItem selected={selectedIndex == 0} href="/admin/dashboard" name="Painel de Controle" icon={<LayoutDashboard size={24} />} />
                <NavbarItem selected={selectedIndex == 1} href="/admin/lifters" name="Alunos" icon={<UserCircleIcon size={24} />} />
                <NavbarItem selected={selectedIndex == 3} href="/admin/workouts" name="Treinos" icon={<Dumbbell size={24} />} />
                <NavbarItem selected={selectedIndex == 4} href="/admin/reviews" name="Avaliações" icon={<BarChart2 size={24} />} />
                <NavbarItem selected={selectedIndex == 5} href="/admin/settings" name="Configurações" icon={<Settings size={24} />} />
            </ul>
        </div>
    </nav>
}