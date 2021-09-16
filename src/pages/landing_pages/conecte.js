import { navigation } from '../../navigation.js';

export const Conecte = () => {
  const template = `
  <section class="content-conecte">
    <section class="logotipo-conecte-comunique logotipo-mobile">
      <img src="./img/logo.png" alt="Logotipo do Fort" class="logoimg-conecte-comunique">
    </section>
    <section class="sidebar">
      <div class="sidebar-content">
        <header class="header-sidebar-landing">
          Conecte-se...
        </header>
        <section class="sidebar-paragraph">
          <p class="text-conecte">Acompanhe mulheres incríveis e tudo o que elas têm a dizer!</p> 
          <button class="btn-continue-landing" id="btn-continue">Continuar</button>
          <button class="skipbutton">Pular</button>
        </section>
      </div>
    </section>
  <section>
  `;

  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'container');
  rootElement.innerHTML = template;

  const continueBtn = rootElement.querySelector('.btn-continue-landing');
  continueBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigation('/comunique');
  });

  const skipBtn = rootElement.querySelector('.skipbutton');
  skipBtn.addEventListener('click', () => {
    navigation('/login');
  });

  return rootElement;
};
