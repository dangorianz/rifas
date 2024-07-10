// import { getRifas } from "@/services/rifas";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  // getRifas()
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container flex justify-center flex-col items-center">
        <p className="text-4xl font-bold mb-14 text-center">Con que deseas ayudar?</p>
        <div className="flex flex-wrap justify-center">
          <Link className="rounded-md bg-slate-700 py-3 px-10 mx-5 mt-5 text-white active:scale-[.97] hover:opacity-90" href={'/rifas'}>Comprar rifa</Link>
          <Link className="rounded-md bg-slate-700 py-3 px-10 mx-5 mt-5 text-white active:scale-[.97] hover:opacity-90" href={'/platos'}>Comprar plato</Link>
          <Link className="rounded-md bg-slate-700 py-3 px-10 mx-5 mt-5 text-white active:scale-[.97] hover:opacity-90" href={'/donaciones'}>Donar</Link>
        </div>
      </div>
    </main>
  );
}
