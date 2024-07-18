import Image from "next/image";
import Logo from "@/assets/logo-blue.png";
import { RegisterForm } from "./registerForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page({ searchParams: { error } } : { searchParams: { error: string } }) {
    const cookiesStore = cookies();
    if(cookiesStore.get("access_token") && !error) return redirect("/admin/dashboard");
    return (
        <section className="w-full h-full bg-[url('/admin-login-bg.jpg')] bg-no-repeat">
            <div className="w-2/5 h-screen py-4 px-8">
                <Image src={Logo} alt="BeLifter Blue logo" className="w-1/3" />
                <RegisterForm />
            </div>
        </section>
    )
}