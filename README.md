<p align="center">
  <img alt="Codie Digital - Centro Pokémon" src="public/test-sample/centro-pokemon.png" />
</p>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=F7DD43&labelColor=202024" alt="License"></a>
</p>

## 💻 Projeto

A Aplicação é um teste de codificação da ***Codie Digital*** onde o objetivo é desenvolver um web app em Typescript que implemente o design criado no Figma.

O projeto **Centro Pokémon** tem como sua principal funcionalidade agendar consultas, onde o usuário informa seu dados, pode escolher até 6 pokémons relacionados a uma região e cidade e define a data e horário da consulta.

![Centro Pokémon](public/test-sample/Home.png)


<br><br>

### ⚡ Funcionalidades e Melhorias Implementadas:
---

- Botões e Links estilizados e adicionado efeito de cores atraentes ao passar o mouse em cima.

- Input e Select customizados conforme o design proposto e acrescentado comportamento de focus e mensagem de erro relacionado ao campo.

- Na listagem da escolha dos Pokémons, houve 2 funcionalidades a mais:
  - O Botão **Adiciona novo pokémon ao time...** ficará desabilitado enquanto o último _Select_ não tiver algum pokémon selecionado.
  - O usuário poderá excluir o último pokémon selecionado clicando no link **Remove Pokémon** localizado abaixo do _Select_.

- Os contadores referente ao agendamento como: Quantidade de Pokémons, Subtotal, Taxa Geracional e Valor Total são atualizados automaticamente a cada Pokémon incluído ou removido.

- Todos os campos do formulário são de preenchimento obrigatório, portanto caso algum campo estiver em branco e o usuário clicar no botão **Concluir Agendamento**, a aplicação irá lançar uma mensagem de erro no campo relacionado e não concluirá a solicitação.

- Ao acionar o botão **Concluir Agendamento** para enviar a requisição, aparecerá um spin seguido da mensagem "Agendando..." e ficará desabilitado para evitar envios duplicados, enquanto aguarda a resposta do servidor.<br> 
*Para simular o tempo de resposta do servidor, ao enviar o agendamento foi incluído uma tempo de espera de 1,5 segundos.

- Quando o agendamento é bem sucedido, a aplicação mostra uma mensagem de _"Consulta Agendada"_ e quando tem falha é mostrada uma mensagem de _"Houve um problema no agendamento"_.<br>
*Para simular a falha na requisição do agendamento, foi desenvolvido um código randômico que escolherá entre executar **sem** ou **com** falha na proporção de 3/1 para execução sem falha.

- Foi implementado um tratamento para possíveis erros nas chamadas da API, tanto interno da aplicação quanto da "pokeapi.co", onde é mostrado em tela o status do erro e a mensagem personalizada.

<br>


[ACESSE A APLICAÇÃO](https://github.com/DarcioCarvalho/)


## ✨ Tecnologia

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [Yup](https://www.npmjs.com/package/yup?activeTab=readme)
- [Axios](https://axios-http.com/docs/intro)
- [PNPM](https://pnpm.io/installation)
- E muitas outras…

## 🚀 Como executar

### 1. Instalações prévias:
Instale o [Node.js] na versão 16.16.0 ou inferior(https://nodejs.dev/)

Instale o [PNPM](https://pnpm.io/installation)

### 2. Instale as dependências e inicie o projeto

Acesse a pasta do projeto:
```bash
cd codie-digital-centro-pokemon
```

Instale as dependências do projeto:
```bash
pnpm install
```

Inicie o projeto:
```bash
pnpm run dev
```

Isso é tudo!!! A partir de agora você pode acessar a aplicação e testar todas as funcionalidades mencionada.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout](https://www.figma.com/file/G7aYGcNQjfRQ7aOqSd8mDy/CODIE-TESTE-FRONT-END?type=design&node-id=0%3A1&mode=design&t=UOViQIf45cg8bKZP-1)

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).


## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💙 by Dárcio Carvalho
</p>