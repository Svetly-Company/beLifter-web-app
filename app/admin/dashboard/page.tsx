import { API, MONTH_ARRAY } from "@/utils/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { Navbar } from "../navbar";

export default async function Page() {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");

    try{
        const user_req = await API.get("auth/profile", token.value);
        const user = user_req.data;
        return (
            <section className="h-screen flex p-8">
                <Navbar selectedIndex={0} />
                <div className="flex-[0.8]">
                    <div className="flex justify-around">
                        <h1 className="text-3xl font-semibold p-4 text-center">Seu Painel de controle está aqui, {user.name}.</h1>
                        <div className="bg-white w-16 h-16 rounded-full"></div>
                    </div>
                    <div className="p-4">
                        <div className="bg-[#161616] rounded-lg">
                            <div className="bg-[#1976D2] flex justify-between p-4 rounded-3xl">
                                <p className="font-bold text-xl">Matrículas</p>
                                <select name="matriculas-month" id="matricula-month" className="bg-[#232324] px-2 py-1 rounded-lg">
                                    {MONTH_ARRAY.map((m) => <option value={m.toLowerCase()}>{m}</option>)}
                                </select>
                            </div>
                            <div className="flex p-8 justify-between">
                                <div className="border-r-2 border-[#3D383A] flex-1 text-center">
                                    <p>Ativas</p>
                                    <p className="text-2xl">0</p>
                                </div>
                                <div className="border-r-2 border-[#3D383A] flex-1 text-center">
                                    <p>Vencidas</p>
                                    <p className="text-2xl">0</p>
                                </div>
                                <div className="border-r-2 border-[#3D383A] flex-1 text-center">
                                    <p>Trancadas</p>
                                    <p className="text-2xl">0</p>
                                </div>
                                <div className="flex-1 text-center">
                                    <p>Pendentes</p>
                                    <p className="text-2xl">0</p>
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