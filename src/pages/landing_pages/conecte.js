import { navigation } from '../../navigation.js';

export const Conecte = () => {
  const template = `
  <section class="content-conecte">
    <section class="logotipo logotipo-mobile">
      <img src="./img/logo.png" alt="Logotipo do Fort" class="logoimg">
    </section>
    <section class="sidebar">
      <div class="sidebar-content">
        <header>
          Conecte-se...
        </header>
        <section class="sidebar-paragraph">
          <p>Acompanhe mulheres incríveis e tudo o que elas têm a dizer!</p> 

          <button class="btn-continue" id="btn-continue">Continuar</button>

          <button class="skipbutton">Pular</button>
        </section>
      </div>
    </section>
  <section>

  `;

  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'container');
  rootElement.innerHTML = template;

  const continueBtn = rootElement.querySelector('.btn-continue');
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
