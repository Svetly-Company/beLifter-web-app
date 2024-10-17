import { API } from "@/utils/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { Navbar } from "../navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lifters } from "./Lifters";

export default async function Page() {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");

    try{
        const user_req = await API.get("auth/profile", token.value);
        const user = user_req.data;
        const lifters_req = await API.get("lifters", token.value);
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
                        <Lifters lifters={lifters} />
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