export default () => {
  const viewHome = `
    <div class="contenedor-home">
      <div class="logo-home">
          <img src="../img/Logo-codering.png" alt="Logo Codering">
      </div>
      <div class="botones-home">
        <button><a href="#/register">REGISTRARSE</a></button>
        <button><a href="#/login">INICIAR SESIÓN</a></button>
      </div>
    </div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
