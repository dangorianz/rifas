
import { ListButtons } from "@/components";
import Link from "next/link";

export default function Home() {


  return (
    <main className="flex min-h-screen justify-center">
      <div className="container flex justify-center flex-col items-center">
        <p className="text-4xl font-bold mb-14 text-center">Con que deseas ayudar?</p>
        <ListButtons/>
      </div>
    </main>
  );
}
