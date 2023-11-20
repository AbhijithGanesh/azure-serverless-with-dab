'use client'
import { TiDocumentText } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "@radix-ui/themes";

interface SidebarButtonProps {
    text: string;
    icon: JSX.Element;
}

const SidebarButton = (props: SidebarButtonProps) => {
    return (
        <section className="w-full px-4 py-1 text-white font-medium text-md flex items-center justify-start gap-2 rounded-md hover:bg-slate-800">
            {props.icon}
            <section className="text-[1.1em]">{props.text}</section>
        </section>
    )
}

export default function Page() {
    return (
        <>
            <section className="grid lg:grid-cols-10 sm:grid-cols-1 md:grid-cols-1 px-28 min-h-screen gap-6">
                <section className="col-start-1 col-span-2 place-items-center flex flex-col h-full items-center justify-start py-4">
                    <section className="w-full px-2 text-md flex flex-col gap-4">
                        <SidebarButton text="Your posts" icon={<TiDocumentText className="text-2xl" />} />
                        <SidebarButton text="Settings" icon={<IoSettingsOutline className="text-2xl" />} />
                    </section>

                </section>
                <section className="col-start-3 col-span-full flex flex-col h-full items-stretch py-6 -translate-x-5">
                    <section className="flex items-center justify-between">
                        <section>
                            <section className="text-4xl font-extrabold tracking-tight text-slate-50">Your posts</section>
                            <section className="py-2 text-lg font-medium text-slate-400 tracking-tight">Create, Edit and Manage posts</section>
                        </section>
                        <Button radius="medium" className="p-2 rounded-md bg-slate-50 text-black flex gap-2 items-center" onClick={() => { }}>
                            <FaPlus className="text-black text-sm" /><section className="text-lg font-medium"> Create new post</section>
                        </Button>
                    </section>
                </section>
            </section>
        </>
    )
}
