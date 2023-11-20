"use client";

import NavBar from "@serverless/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="h-screen flex flex-col items-center justify-center px-4">
        <section className="flex flex-wrap gap-2 w-1/2 justify-center font-medium text-5xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white tracking-tighter text-center">
          A sample blogsite made using{" "}
          <div className="font-extrabold hover:text-sky-400"><a href="https://github.com/Azure/data-api-builder" target="__blank">Azure Data API Builder</a>,</div>
          <div className="antialiased font-extrabold hover:text-[#008bb9]"><a href="https://www.postgresql.org/" target="__blank">Postgres</a></div>and{" "}
          <div className="font-extrabold hover:text-zinc-500"><a href="https://nextjs.org" target="__blank">Next.JS</a></div>
        </section>
        <a href="/signIn" className="px-4 py-2 font-regular bg-slate-900 text-lg rounded-md m-4 border-[0.25px] border-slate-500">
          Get Started
        </a>
      </main>
    </>
  );
}
