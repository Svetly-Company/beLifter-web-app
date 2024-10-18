import { API } from "@/utils/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { Navbar } from "../../navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function Page({ params: { id } } : { params: { id: string } }) {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");

    try{
        const user_req = await API.get("auth/profile", token.value);
        const user = user_req.data;
        const lifters_req = await API.get("account/"+id, token.value);
        const aluno = lifters_req.data;
        console.log(aluno);
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
                        <div className="flex gap-16 items-center border-b-2 p-4 border-[#1f1d1f]">
                            <a href="/admin/lifters"><ArrowLeft /></a>
                            <h1 className="text-xl font-medium">Perfil do aluno</h1>
                        </div>
                        <div className="p-8 flex gap-16">
                            <Avatar className="w-32 h-32">
                                <AvatarImage src={aluno.profilePicture} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-400">ID: {aluno.idAccount}</p>
                                <p className="text-2xl">{aluno.name}</p>
                                <div className="flex gap-4 p-2">
                                    <Badge className="bg-blue-500 hover:bg-blue-700">Aluno</Badge>
                                    <Badge className="bg-blue-500 hover:bg-blue-700">Ativo</Badge>
                                    <Badge className="bg-blue-500 hover:bg-blue-700">Plano anual</Badge>
                                </div>
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