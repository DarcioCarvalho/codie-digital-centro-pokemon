import Head from "next/head"
import { Main, MainText } from "./styles"

export default function Home() {
  return (
    <>
      <Head>
        <title>CodieDigital - Teste Técnico | Início</title>
      </Head>

      <Main>
        <MainText>
          Cuidamos bem do seu pokémon,
          para ele cuidar bem de você
        </MainText>
      </Main>
    </>
  );
}
