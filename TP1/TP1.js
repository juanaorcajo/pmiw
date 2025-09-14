let imagen; 

function preload() {
  imagen = loadImage("data/M_5.png"); 
}

let escala = 1.3;
let separacion = 12 * escala;

let nRojas = 13;
let nAmarillas = 9;
let nCelestes = 6;

let minRojo = 170 * escala;
let maxRojo = 220 * escala;
let minAmarillo = 130 * escala;
let maxAmarillo = 160 * escala;
let minCeleste = 90 * escala;
let maxCeleste = 120 * escala;

let posXInicio;

//https://youtu.be/kkS_mSVQYMk

// Colores rojoss
let rojo0, rojo1, rojo2, rojo3, rojo4, rojo5, rojo6, rojo7, rojo8, rojo9, rojo10, rojo11, rojo12;
// Colores amarillos
let amarillo0, amarillo1, amarillo2, amarillo3, amarillo4, amarillo5, amarillo6, amarillo7, amarillo8;
// Colores celestes
let celeste0, celeste1, celeste2, celeste3, celeste4, celeste5;

let colorFondo;

function setup() {
  createCanvas(800, 400);
  posXInicio = 410 * escala;
  inicializarColores();
  reiniciarVariables();
  noLoop();
}

function inicializarColores() {
  rojo0 = rojo1 = rojo2 = rojo3 = rojo4 = rojo5 = rojo6 = rojo7 = rojo8 = rojo9 = rojo10 = rojo11 = rojo12 = color(255, 0, 0);
  amarillo0 = amarillo1 = amarillo2 = amarillo3 = amarillo4 = amarillo5 = amarillo6 = amarillo7 = amarillo8 = color(255, 255, 0);
  celeste0 = celeste1 = celeste2 = celeste3 = celeste4 = celeste5 = color(0, 255, 255);
}

function reiniciarVariables() {
  colorFondo = color(0);
  background(colorFondo);
  escala = 1.3;
}

function draw() {
  background(colorFondo);
  image(imagen, 0, 0, 400, 400);

  // ROJAS
  for (let i = 0; i < nRojas; i++) {
    let altura = map(i, 0, nRojas - 1, minRojo, maxRojo);
    let c = obtenerColorRojo(i);
    let grosorBase = 0.5 + i * 0.08 * escala;

    for (let j = 0; j < 2; j++) {
      let desplazamiento = j * 2;
      let x = posXInicio + i * separacion + desplazamiento;

      for (let k = 0; k < 2; k++) {
        let yDesplazamiento = k * 1;
        dibujarLinea(x, (height - altura) / 2 + yDesplazamiento, (height + altura) / 2 + yDesplazamiento, c, grosorBase);
      }
    }
  }

  // AMARILLAS
  for (let i = 0; i < nAmarillas; i++) {
    let x = posXInicio + separacion * (i + 0.5);
    let altura = map(nAmarillas - 1 - i, 0, nAmarillas - 1, minAmarillo, maxAmarillo);
    let c = obtenerColorAmarillo(i);
    let grosor = (1.5 - i * 0.1) * escala;
    dibujarLinea(x, (height - altura) / 2, (height + altura) / 2, c, grosor);
  }

  // CELESTES
  for (let i = 0; i < nCelestes; i++) {
    let inicioCeleste = 3;
    let finCeleste = nAmarillas - 1;
    let xInicio = posXInicio + separacion * (inicioCeleste + 0.5);
    let xFin = posXInicio + separacion * (finCeleste + 0.5);
    let x = map(i, 0, nCelestes - 1, xInicio, xFin);
    let altura = map(i, 0, nCelestes - 1, minCeleste, maxCeleste);
    let c = obtenerColorCeleste(i);
    let grosor = map(i, 0, nCelestes - 1, 0.5, 1.5) * escala;
    dibujarLinea(x, (height - altura) / 2, (height + altura) / 2, c, grosor);
  }
}

function dibujarLinea(x, y1, y2, c, grosor) {
  stroke(c);
  strokeWeight(grosor);
  line(x, y1, x, y2);
}

// colores individuales
function obtenerColorRojo(i) {
  switch(i) {
    case 0: return rojo0;
    case 1: return rojo1;
    case 2: return rojo2;
    case 3: return rojo3;
    case 4: return rojo4;
    case 5: return rojo5;
    case 6: return rojo6;
    case 7: return rojo7;
    case 8: return rojo8;
    case 9: return rojo9;
    case 10: return rojo10;
    case 11: return rojo11;
    case 12: return rojo12;
  }
  return color(255, 0, 0);
}

function obtenerColorAmarillo(i) {
  switch(i) {
    case 0: return amarillo0;
    case 1: return amarillo1;
    case 2: return amarillo2;
    case 3: return amarillo3;
    case 4: return amarillo4;
    case 5: return amarillo5;
    case 6: return amarillo6;
    case 7: return amarillo7;
    case 8: return amarillo8;
  }
  return color(255, 255, 0);
}

function obtenerColorCeleste(i) {
  switch(i) {
    case 0: return celeste0;
    case 1: return celeste1;
    case 2: return celeste2;
    case 3: return celeste3;
    case 4: return celeste4;
    case 5: return celeste5;
  }
  return color(0, 255, 255);
}


function mousePressed() {
  // Rojos
  rojo0 = color(random(150, 255), 0, 0);
  rojo1 = color(random(150, 255), 0, 0);
  rojo2 = color(random(150, 255), 0, 0);
  rojo3 = color(random(150, 255), 0, 0);
  rojo4 = color(random(150, 255), 0, 0);
  rojo5 = color(random(150, 255), 0, 0);
  rojo6 = color(random(150, 255), 0, 0);
  rojo7 = color(random(150, 255), 0, 0);
  rojo8 = color(random(150, 255), 0, 0);
  rojo9 = color(random(150, 255), 0, 0);
  rojo10 = color(random(150, 255), 0, 0);
  rojo11 = color(random(150, 255), 0, 0);
  rojo12 = color(random(150, 255), 0, 0);

  // Amarillos
  amarillo0 = color(random(150, 255), random(150, 255), 0);
  amarillo1 = color(random(150, 255), random(150, 255), 0);
  amarillo2 = color(random(150, 255), random(150, 255), 0);
  amarillo3 = color(random(150, 255), random(150, 255), 0);
  amarillo4 = color(random(150, 255), random(150, 255), 0);
  amarillo5 = color(random(150, 255), random(150, 255), 0);
  amarillo6 = color(random(150, 255), random(150, 255), 0);
  amarillo7 = color(random(150, 255), random(150, 255), 0);
  amarillo8 = color(random(150, 255), random(150, 255), 0);

  // Celestes
  celeste0 = color(0, random(150, 255), random(150, 255));
  celeste1 = color(0, random(150, 255), random(150, 255));
  celeste2 = color(0, random(150, 255), random(150, 255));
  celeste3 = color(0, random(150, 255), random(150, 255));
  celeste4 = color(0, random(150, 255), random(150, 255));
  celeste5 = color(0, random(150, 255), random(150, 255));

  redraw();
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    inicializarColores();
    reiniciarVariables();
    redraw();
  }
}
