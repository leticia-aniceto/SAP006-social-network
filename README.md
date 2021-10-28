<p align="center">
      <img src="./src/img/logo-white.jpeg" style="border-radius:5px; width:100px">
</p>

# Fort - Uma rede social tão segura quanto um forte!
![GitHub repo size](https://img.shields.io/github/repo-size/leticia-aniceto/SAP006-social-network?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/leticia-aniceto/SAP006-social-network?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/leticia-aniceto/SAP006-social-network?style=for-the-badge)

## Índice

- [Fort - Uma rede social tão segura quanto um forte!](#fort---uma-rede-social-tão-segura-quanto-um-forte)
  - [Índice](#índice)
  - [1. Sobre o projeto 💻](#1-sobre-o-projeto-)
  - [2. Histórias de usuário 📃](#2-histórias-de-usuário-)
    - [**História de Usuário 1**](#história-de-usuário-1)
    - [**História de usuário 2**](#história-de-usuário-2)
    - [**História de usuário 3**](#história-de-usuário-3)
  - [3. A aplicação 📱 🧵](#3-a-aplicação--)
    - [📌 Onboarding pages </br>](#-onboarding-pages-br)
    - [📌 Login </br>](#-login-br)
    - [📌 Cadastro </br>](#-cadastro-br)
    - [📌 Feed  </br>](#-feed--br)
    - [📌 Criação de post](#-criação-de-post)
    - [📌 Edição e exclusão de post </br>](#-edição-e-exclusão-de-post-br)
    - [📌 Curtir e descurtir post <br>](#-curtir-e-descurtir-post-)
    - [📌 Perfil </br>](#-perfil-br)
  - [4. Critérios de aceitação do projeto 🏆](#4-critérios-de-aceitação-do-projeto-)
  - [5. Conteúdos e ferramentas utilizados 📚](#5-conteúdos-e-ferramentas-utilizados-)
    - [HTML e CSS](#html-e-css)
    - [DOM e Web APIs](#dom-e-web-apis)
    - [Javascript](#javascript)
    - [Firebase](#firebase)
    - [Testing](#testing)
    - [Git e Github](#git-e-github)
    - [Boas práticas de programação](#boas-práticas-de-programação)
  - [6. Desenvolvedoras 👩‍💻](#6-desenvolvedoras-)
  
---

## 1. Sobre o projeto 💻

O Fort surgiu da necessidade de mulheres possuírem um espaço virtual seguro, 
amigável e empático para trocarem abertamente sobre diversos temas, como saúde 
mental, lifehacks, experiências de vida, maternidade e até educação financeira.
Essa nova rede social veio para conectar mulheres que querem e precisam de uma
rede de apoio inserida em seu cotidiano e com conexões importantes na palma da
mão.

Companheira me ajude que eu não posso andar só, 
Eu sozinha ando bem, mas com você ando melhor. 
:fist_raised: :fist_raised:

Este projeto foi realizado para o _bootcamp_ da [LABORATÓRIA](https://www.laboratoria.la/br).

----

## 2. Histórias de usuário 📃
Para nos guiarmos durante o desenvolvimento da aplicação e suas funcionalidades,
trabalhamos com três histórias de usuário.

### **História de Usuário 1**

Eu, como usuária, quero acessar a aplicação e receber informações sobre o que é a 
aplicação. Em seguida, quero ser direcionada a uma página de cadastro e/ou login 
(em caso de usuárias que já possuem acesso).

**Critérios de Aceitação**
- Visualizar a landing page com informações sobre a aplicação
- Fazer cadastro com e-mail/senha ou google
- Fazer login


### **História de usuário 2**

Eu, como usuária já cadastrada, desejo abrir a aplicação e visualizar uma página de 
_feed_, com menu que direcionará para o  _feed_, criação de post e perfil. E, ao 
clicar no botão de criação de post, desejo escrever posts de texto. Desejo editar 
e excluir (receber um aviso de confirmação de exclusão) meus posts e visualizar os
 posts das outras usuárias. 

**Critérios de Aceitação**
- Visualizar o feed
- Input pra digitar o texto a ser postado
- Editar e excluir somente o meu próprio post


### **História de usuário 3**

No _feed_, desejo curtir e descurtir os posts, visualizar quantidade de likes. 
Ao clicar em "voltar", visualizar a home.

**Critérios de Aceitação**
- Visualizar o feed
- Visualizar, curtir, descurtir posts de outras pessoas
- Visualizar quantidade de likes dos posts
- Responsividade
- Tratamento de erros
- Pop Up de confirmação
- Botão de voltar


----
</br>

## 3. A aplicação 📱 🧵

<br>

<div>
 
  <h4> Você pode acessar a aplicação utilizando o login de teste abaixo:</h4>


| Usuário             	|             Email          	|               Senha    	|
|:---------------------:|:----------------------------:	|:---------------------:|
|     Teste 1             	|            teste001@gmail.com     |     1234567

</div>

### 📌 Onboarding pages </br>

_Versão mobile_ </br>
      <img src="./src/img/onboarding-mobile.gif" style="height: 90vh; width:45vh;"> </br>
_Versão desktop_ </br>
      <img src="./src/img/welcome-desktop.gif" style="height: 50vh; width: 100vh;">

<br>

### 📌 Login </br>
<table>
  <tr>
      <td valign="center">Versão mobile </br>
            <img src="./src/img/login-mobile.png" style="height: 90vh; width:45vh;">
      </td>
      <td valign="center">Versão desktop </br>
            <img src="./src/img/login-desktop.png" style="height: 70vh; width: 110vh;">
      </td>
  </tr>
</table>   

<br>

### 📌 Cadastro </br>
<table>
  <tr>
      <td valign="center">Versão mobile </br>
            <img src="./src/img/signup-mobile.png" style="height: 90vh; width:45vh;">
      </td>
      <td valign="center">Versão desktop </br>
            <img src="./src/img/signup-desktop.png" style="height: 70vh; width: 110vh;">
      </td>
  </tr>
</table>  

<br>

### 📌 Feed  </br>
<table>
  <tr>
      <td valign="center">Versão mobile </br>
            <img src="./src/img/feed-mobile.png" style="height: 90vh; width:45vh;">
      </td>
      <td valign="center">Versão desktop </br>
            <img src="./src/img/feed-desktop.png" style="height: 70vh; width: 110vh;">
      </td>
  </tr>
</table>  

</br>

### 📌 Criação de post
<img src="./src/img/post-mobile.png" style="height: 100vh; width:50vh;">

</br>

### 📌 Edição e exclusão de post </br>
<img src="./src/img/edit-post.gif" style="height: 100vh; width:50vh;">  

</br>

### 📌 Curtir e descurtir post <br>
<img src="./src/img/likes.gif" style="height: 100vh; width:50vh;">  

</br>

### 📌 Perfil </br>
<img src="./src/img/profile-mobile.png" style="height: 100vh; width:50vh;">

---
</br>

## 4. Critérios de aceitação do projeto 🏆

- Ser uma SPA.
- Ser responsivo.
- Receber code review de pelo menos uma parceira de outra equipe.
- Fazer testes unitários.
- Fazer testes manuais buscando erros e imperfeições simples.
- Fazer testes de usabilidade e incorporar o feedback dos usuários como melhorias.
- Fazer deploy do aplicativo e marcar a versão (git tag).

---
</br>

## 5. Conteúdos e ferramentas utilizados 📚

### HTML e CSS

- [ ] [HTML
      semântico](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica)
- [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM e Web APIs

- [ ] [Manipulação do
      DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
- [ ] [History
      API](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
- [ ]
  [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Javascript

- [ ] [Uso de
      callbacks](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
- [ ] [Consumo de
      Promises](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [ ] Uso de ES modules
      ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      |
      [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

- [ ] [Firestore](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules](https://firebase.google.com/docs/rules)
- [ ] [Uso de
      onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen) |
      [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Testing

- [ ] [Teste unitários](https://jestjs.io/docs/pt-BR/getting-started)
- [ ] [Testes assíncronos](https://jestjs.io/docs/pt-BR/asynchronous)
- [ ] [Mocking](https://jestjs.io/docs/pt-BR/manual-mocks)

### Git e Github

- [ ] [Colaboração pelo Github](https://docs.github.com/pt/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
- [ ] [Organização pelo Github](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)

### Boas práticas de programação

- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

---
</br>

## 6. Desenvolvedoras 👩‍💻

<table>
  <tr>
      <td align="center">
            <a href="#">
            <img src="https://avatars.githubusercontent.com/u/62296172?v=4" width="100px" alt="Foto de Bruna Calixto no GitHub"/><br>
            <sub>
            <b>Bruna Calixto</b><br>
            </sub>
            </a>
      </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/83038134?v=4" width="100px;" alt="Foto de Camila Conte no GitHub"/><br>
        <sub>
          <b>Camila Conte</b><br>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/70327566?v=4" width="100px;" alt="Foto de Letícia Aniceto no GitHub"/><br>
        <sub>
          <b>Letícia Aniceto</b><br>
        </sub>
      </a>
    </td>
  </tr>
</table>

<table width="400">
      <td>
            <a href="https://github.com/bruna-devbio/"><img src="./src/img/github.png" alt="ícone github" width="20px" height="20px">
            <a href="https://www.linkedin.com/in/brunacalixtodevjunior/"><img src="./src/img/linkedin.png" alt="ícone linkedin" width="20px" height="20px">
      </td>
      <td>
            <a href="https://github.com/caxconte/"><img src="./src/img/github.png" alt="ícone github" width="20px" height="20px">
            <a href="https://www.linkedin.com/in/brunacalixtodevjunior/"><img src="./src/img/linkedin.png" alt="ícone linkedin" width="20px" height="20px">
      </td>
      <td>
            <a href="https://github.com/leticia-aniceto/"><img src="./src/img/github.png" alt="ícone github" width="20px" height="20px">
            <a href="https://www.linkedin.com/in/leticia-braga-aniceto/"><img src="./src/img/linkedin.png" alt="ícone linkedin" width="20px" height="20px">
      </td>

</table>



<p align="right">
      <a href="#fort---uma-rede-social-tão-segura-quanto-um-forte">Voltar ao topo ⬆</a>
</p>

<!-- ### **Bruna Calixto**
[GitHub] (https://github.com/bruna-devbio/)
[LinkedIn] (https://www.linkedin.com/in/brunacalixtodevjunior/)
<br>
### **Camila Conte**
[GitHub] (https://github.com/caxconte/)
[LinkedIn] (https://www.linkedin.com/in/camila-conte/)
<br>
### **Letícia Aniceto**
[GitHub] (https://github.com/leticia-aniceto/)
[LinkedIn] (https://www.linkedin.com/in/leticia-braga-aniceto/) -->
