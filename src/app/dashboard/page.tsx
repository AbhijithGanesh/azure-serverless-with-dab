import { BiSolidPencil } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi"
import Card from "@serverless/components/cards";


export default function Page() {
    return (
        <>
            <main className="grid grid-cols-11 w-full gap-4 py-6">
                <section className="col-start-1 col-span-2 pl-10 pr-0 py-6">
                    <section className="flex flex-col place-content-center flex-1 gap-2">
                        <section className="flex items-center gap-4 rounded-md border-[0.5px] border-slate-700 hover:bg-slate-900 p-2"><BiSolidPencil className="text-2xl" />Your posts</section>
                        <section className="flex items-center gap-4 rounded-md border-[0.5px] border-slate-700 hover:bg-slate-900 p-2"><PiNotePencilBold className="text-2xl" />Your drafts</section>
                        <section className="flex items-center gap-4 rounded-md border-[0.5px] border-slate-700 hover:bg-slate-900 p-2"><FiSettings className="text-2xl" />Your settings</section>
                    </section>
                </section>
                <section className="col-start-3 col-span-8">
                    <section className="text-4xl font-extrabold tracking-tight py-2">
                        Your Posts
                    </section>
                    <section className="flex flex-1 items-center justify-between pb-2">
                        <section className="text-slate-500 font-regular text-xl">Create and manage posts</section>
                        <button className="bg-white text-black rounded-md p-2">
                            Create post
                        </button>
                    </section>
                    {/* <hr className="h-[0.25px] text-slate-700" /> */}
                    <section>
                        <section className="flex flex-col gap-4 py-2">
                            <Card title="Title" created_at={new Date()} />
                            <Card title="Title" created_at={new Date()} />
                            <Card title="Title" created_at={new Date()} />
                            <Card title="Title" created_at={new Date()} />
                            <Card title="Title" created_at={new Date()} />
                            <Card title="Title" created_at={new Date()} />
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}
