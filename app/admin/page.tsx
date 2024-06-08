import { PNavbar } from "./PNavbar";
import { AdminHeader } from "./AdminHeader";

export default function Home() {
    return (
        <div className="bg-grey-bg w-full h-dvh text-white">   
        <AdminHeader />
        <PNavbar />
        </div>
    );
}