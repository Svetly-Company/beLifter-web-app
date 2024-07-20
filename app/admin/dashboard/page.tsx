import { API } from "@/utils/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export default async function Page() {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");

    try{
        const user_req = await API.get("auth/profile", token.value);
        const user = user_req.data;
        return (
            <section>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                Id: {user.id}<br />
                Nome: {user.name}<br />
                Email: {user.email}
            </section>
        )
    }catch(e) {
        return redirect("/admin/login?error=1");
    }
}