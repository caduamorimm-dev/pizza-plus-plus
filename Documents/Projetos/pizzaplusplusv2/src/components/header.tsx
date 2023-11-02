import Image from "next/image";

export function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <a href="#Inicio">Inicio</a>
          </li>
          <li>
            <a href="#Inscrição">Inscrição</a>
          </li>
          <li>
            <a href="#Sobre">Sobre</a>
          </li>
          <li>
            <a href="#Localização">Localização</a>
          </li>
          <li>
            <a href="#Contato">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
