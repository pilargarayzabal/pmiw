//Pilar Garayzabal 
//legajo 119036/5
//https://www.youtube.com/watch?v=WpaAGyEtwRo




// VARIABLES
let cuadriculaSize = 33;  // tamaño de la cuadrícula
let circleSize =  31; // tamaño de los circulos
let cambiodeColor = 500; 
let tiempocambiodecolor; //tiempo del ultimo cambio de color

function preload() { //carga antes que el resto del codigo
  dibujo = loadImage('data/dibujo.png'); //imagen
}

function setup() {
  createCanvas(800, 400);  //tamaño antes 'size'
  circleColor = color(0); 
  noStroke();
  tiempodecambiodecolor = millis();
}

function draw() {
  background(255);
   image(dibujo, 0, 0);

     //cuadricula de circulos
  for (let x = 400; x <= width; x += cuadriculaSize) {
    for (let y = 0; y <= height; y += cuadriculaSize) {
        let distance = abs((width - x)- y);
        let size = map(distance, 0, width, circleSize, -25)
        size += map(mouseX, 7, width, 0, 10);
        fill(circleColor);  
        ellipse(x, y, size, size);  
    }
  }

    // tiempo del cambio de color
  if (millis() - tiempodecambiodecolor > cambiodeColor && mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      circleColor = color(random(255), random(255), random(255));  // cambia el color de los círculos
      tiempodecambiodecolor = millis();  // actualiza el tiempo del ultimo cambio de color

    }
  }

}

// funcion que reinicia variables a su estado original
function resetVariables() {
  circleColor = color(0);
  resetMousePosition(); // reinicia el color de los circulos a negro
}
// Función para resetear la posición del ratón
function resetMousePosition() {
  mouseX = 200 // Centra el ratón en el ancho del canvas
  mouseY = 400  // Centra el ratón en el alto del canvas
}


function keyPressed() {
  // reinicia el programa con el espacio
  if (key === ' ') {
    resetVariables();
  }
}
