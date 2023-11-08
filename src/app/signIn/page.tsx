import { PiCoffee } from "react-icons/pi";


export default function Page() {
    return <main className="h-screen flex flex-col items-center justify-center">
        <section className="flex flex-col items-center gap-2">
            <section className="text-4xl"><PiCoffee /></section>
            <section className="text-2xl font-medium">Welcome back</section>
            <hr className="w-80" />
            <section className="text-gray-300 text-lg">Login using any of these providers!</section>
            <button className="bg-slate-100 text-slate-950 text-lg tracking-tight py-1 font-regular w-80 rounded-md">Sign in with GitHub</button>
            <button className="w-80 rounded-md border-[0.5px] py-2 border-white">Sign in with Microsoft</button>
        </section>
    </main>
}