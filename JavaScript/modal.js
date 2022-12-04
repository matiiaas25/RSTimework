// captura todos los botones
const buttons = document.querySelectorAll('.boton_modal-relojes');

// itera sobre cada uno de los botones y asigna un evento click a cada uno
buttons.forEach(button => {
  button.addEventListener('click', event => {
    // obtiene el id del botón que se ha presionado
    const buttonId = event.target.id;

    // obtiene el modal
    const modal = document.getElementById('modal');

    // muestra el modal
    modal.style.display = 'block';

    // obtiene el contenido del modal
    const modalContent = modal.querySelector('.modal-content');

    // inserta el contenido del modal en función del botón que se ha presionado
    switch (buttonId) {
      case 'EP300':
        modalContent.innerHTML = `<p>Este es el contenido del modal para el botón 1</p>
        <table>
  <thead>
    <tr>
      <th>Detalles Técnicos</th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lector de código de acceso</td>
      <td>Si</td>
    </tr>
    <tr>
      <td>Lector de chip/tarjeta de acceso</td>
      <td>Si</td>
    </tr>
    <tr>
      <td>Tipo de autenticación</td>
      <td>Chip/Tarjeta de acceso, Biométrica, Contraseña</td>
    </tr>
    <tr>
      <td>Velocidad de escaneo (mín.)</td>
      <td>0.5 mm/seg</td>
    </tr>
    <tr>
      <td>Resolución</td>
      <td>500</td>
    </tr>
    <thead>
    <tr>
      <th>Exhibición</th>
      <th></th>
    </tr>
  </thead>
    <tr>
      <td>Pantalla incorporada</td>
      <td>Si</td>
    </tr>
    <tr>
      <td>Tipo de visualizador</td>
      <td>LCD</td>
    </tr>
    <thead>
    <tr>
      <th>Puertos e interfaces</th>
      <th></th>
    </tr>
  </thead>
  <tr>
      <td>Conectado a PC</td>
      <td>Si</td>
    </tr>
    <tr>
      <td>USB port</td>
      <td>Si</td>
    </tr>
  </tbody>
</table>`;
        break;
      case 'A300':
        modalContent.innerHTML = '<p>Este es el contenido del modal para el botón 2</p>';
        break;
      case 'Facepass7pro':
        modalContent.innerHTML = '<p>Este es el contenido del modal para el botón 3</p>';
        break;
      case 'C2pro':
        modalContent.innerHTML = '<p>Este es el contenido del modal para el botón 4</p>';
        break;
      case 'VF30':
        modalContent.innerHTML = '<p>Este es el contenido del modal para el botón 5</p>';
        break;
      case 'W2pro':
        modalContent.innerHTML = '<p>Este es el contenido del modal para el botón 6</p>';
        break;
    }
  });
});

// captura el botón de cierre del modal
const closeButton = document.querySelector('.modal-close-button');

// asigna un evento click al botón de cierre del modal
closeButton.addEventListener('click', event => {
  // obtiene el modal
  const modal = document.getElementById('modal');

  // oculta el modal
  modal.style.display = 'none';
});


