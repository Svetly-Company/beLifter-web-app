import { API_URL } from "@/utils/constants";
import axios from "axios";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export default async function Page() {
    const cookiesStore = cookies();
    const token = cookiesStore.get("access_token");
    if(!token) redirect("/admin/login");
    const auth_header = { headers: { 'Authorization': `Bearer ${token.value}` } } ;

    try{
        const user_req = await axios.get(API_URL+"auth/profile", auth_header);
        const user = user_req.data;
        return (
            <section>
                Id: {user.id}<br />
                Nome: {user.name}<br />
                Email: {user.email}
            </section>
        )
    }catch(e) {
        return redirect("/admin/login?error=1");
    }
}