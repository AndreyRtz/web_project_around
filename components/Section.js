// ---------- Clase Section ----------
// Esta clase se encarga de manejar un conjunto de elementos (ej: tarjetas)
// y agregarlos al contenedor en el DOM. Funciona tanto con las tarjetas iniciales
// como con las que el usuario vaya creando.

export default class Section {
  // ---------- Constructor ----------
  // Recibe:
  // - item: array de elementos iniciales (ej: las 6 tarjetas por defecto)
  // - renderer: función que sabe cómo crear/renderizar cada item
  // - containerSelector: selector CSS del contenedor donde se insertarán
  constructor({ item, renderer }, containerSelector) {
    this._items = item; // Guarda los datos iniciales
    this._renderer = renderer;  // Guarda la función de renderizado
    this._container = document.querySelector(containerSelector); // Localiza el contenedor en el DOM
  }

   // ---------- Renderizado inicial ----------
  // Recorre el array de items iniciales y llama al renderer con cada uno.
  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);  // El renderer decidirá cómo construir y añadir el elemento
    });
  }

  // ---------- Agregar un nuevo elemento ----------
  // Recibe un nodo DOM (ya creado por otra clase, ej: Card) y lo inserta en el contenedor.
  addItem(element) {
  
    this._container.prepend(element); // prepend lo coloca al inicio del contenedor
  }
}