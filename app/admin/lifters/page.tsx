import { API } from "@/utils/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { Navbar } from "../navbar";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Aluno({ user } : { user: any }) {
    return (
    <div className="bg-[#232324] m-2 px-8 py-2 flex rounded-2xl">
        <Avatar className="w-16 h-16">
            <AvatarImage src={user.mediaUrl} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center m-2">
            <h1>{user.name}</h1>
            <h2 className="text-[#979797]">isaque@gmail.com</h2>
        </div>
    </div>
    )
}

export default async function Page() {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");

    try{
        const user_req = await API.get("auth/profile", token.value);
        const user = user_req.data;
        const lifters_req = await API.get("chat", token.value);
        const lifters = lifters_req.data;
        return (
            <section className="h-screen flex p-8">
                <Navbar selectedIndex={1} />
                <div className="flex-[0.8]">
                    <div className="flex justify-around">
                        <h1 className="text-3xl font-semibold p-4 text-center">Gerencie seus alunos aqui, {user.name}.</h1>
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={user.profilePicture} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="bg-[#151415] m-6 p-4">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-medium">Alunos cadastrados <span className="font-bold text-[#aaa]">({lifters.length})</span></h1>
                                <div className="">
                                    <div className="flex gap-2 border-2 border-[#0077B6] rounded-2xl items-center px-2 py-1">
                                        <Search color="#0077B6" />
                                        <input type="text" placeholder="Procurar Aluno" className="bg-[#151415] m-2 outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {lifters.map((l : any) => <Aluno user={l} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }catch(e) {
        console.log(e);
        return <div>erro</div>
        //return redirect("/admin/login?error=1");
    }
}