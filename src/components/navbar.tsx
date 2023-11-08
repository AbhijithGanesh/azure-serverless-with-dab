import { useRouter } from "next/navigation";
import { MdOutlineRocket } from "react-icons/md";
import "@serverless/app/globals.css";

export default function NavBar() {
    const router = useRouter()
    return (
        <nav className="absolute top-0 h-16 w-full p-4">
            <section className="flex justify-between items-center">
                <section className="flex items-center justify-center gap-2">
                    <MdOutlineRocket className="text-4xl" /><span className="font-bold text-xl">Blogstra</span>
                </section>
                <button className="font-regular border-[0.25px] border-gray-500 bg-slate-900 rounded-md px-4 py-2" onClick={() => { router.push("/signIn") }}>
                    SignIn
                </button>
            </section>
        </nav>
    );
}
