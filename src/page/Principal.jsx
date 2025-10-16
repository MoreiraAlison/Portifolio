import "./principal.css";
import TextoDestacado from "../components/TextoDestacado";
import TextoPrincipal from "../components/TextoPrincipal";
import TextoDescricao from "../components/TextoDescricao";

export default function Principal() {
  return (
    <section>
      <TextoDestacado texto={"Olá, meu nome é:"}></TextoDestacado>
      <TextoPrincipal texto={"Alison Moreira"}></TextoPrincipal>
      <TextoDescricao texto={" Tenho 16 anos, sou Aluno do Ensino Médio Técnico Da Escola Marista Social Cascavel, e este portifólio foi desesvolvido  durante uma aula de introdução de como criar um Portifólio"}></TextoDescricao>
      <button>CONTATO</button>
    </section >
  );
}