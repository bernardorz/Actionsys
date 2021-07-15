## 💻 Projeto

Teste proposto pela empresa [Actionsys](https://actionsys.com.br/) para vaga de Desenvolvedor Full Stack.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

## Back-end
- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Mysql](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)

## Front-end
- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Styled-components](https://styled-components.com/)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://axios-http.com/docs/intro)

---
##  🔌 Como executar 

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/bernardorz/Actionsys.git

```


## Para iniciar o projeto vamos começar inicializando o back end, para isso siga os passos abaixo:
```bash
# Navegue até a seguinte pasta.
$ cd Actionsys
$ cd backend/
```


```bash
# Instale as dependências.

$ yarn
```
>⚠️ Você precisa ter o docker composer em sua máquina.

```bash
# Inicie o docker composer.

$ yarn up
```
>⚠️ Espere o docker criar o container e baixar a imagem para rodar a migration.
```bash
# Rode a Migration para criar a tabela funcionarios no banco.

$ yarn typeorm migration:run
```

```bash
#Pronto, agora você já pode iniciar o Back-end para isso você deve digitar.

$ yarn dev
```


## O Back-end estará disponível no endereço http://localhost:3333.


--

## Para inicilizar o Front End siga os passos abaixo


```bash
# Navegue até a seguinte pasta.

$ cd ..
$ cd frontend
```

```bash
# Instale as dependências.

$ yarn
```

> ⚠️⚠️ Por padrão o fim da sequência de linha é CRLF, para não ter erros no front end você deve verificar em cada arquivo(apenas da pasta frontend) .ts e .tsx se etão em LF, caso contrario selecionar LF no cando direito inferior no vs code⚠️⚠️.

<p align="center">
 <img width="100%" src="https://media.discordapp.net/attachments/790018464881573889/865230184701362176/Captura_de_tela_2021-07-15_105536.png">
</p>

```bash
# Pronto, agora você já pode iniciar o Front-End para isso você deve digitar.

$ yarn dev
```

## O Front-end estará disponível no endereço http://localhost:3000.


------------
<h2>📝 Licença</h2>

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo de LICENSE para obter mais detalhes.

------------

<p align="center">
  <a href="hhttps://www.linkedin.com/in/bernardo-rizzatti-6382ab1a6/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue">
  </a>
</p>
<p align="center">Feito por Bernardorz.</p><br>
