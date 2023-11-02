import { Contatos } from "@/components/contatos";
import { Header } from "@/components/header";
import { Localizacao } from "@/components/localizacao";

export default function Home() {
  return (
    <main className="h-screen flex flex-col w-screen">
      <Header />

      <div className="min-h-[700px] w-full bg-green-500" id="Inicio"></div>
      <div className="min-h-[700px] w-full bg-red-500" id="Inscrição"></div>
      <div className="min-h-[700px] w-full bg-yellow-500" id="Sobre"></div>
      <Localizacao />
      <Contatos />
    </main>
  );
}
