window.onload = function() {
  base_preguntas = [
    {
      "categoria": "Arte y literatura",
      "pregunta": "¿Quién pintó la mona lisa?",
      "respuesta": "Leonardo da Vinci",
      "incorrecta1": "Picasso",
      "incorrecta2": "Miguel Ángel",
      "incorrecta3": "Monet",
      "imagen": "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
      "objectFit": "cover"
  },/*
  {
    "categoria": "Arte y literatura",
    "pregunta": "Pintor de  \"El jardín de las delicias\"",
    "respuesta": "El Bosco",
    "incorrecta1": "Velásquez",
    "incorrecta2": "Picasso",
    "incorrecta3": "Dalí\r",
    "imagen": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
    "objectFit": "cover"
},
{
    "categoria": "Arte y literatura",
    "pregunta": "significado de  \"El jardín de las delicias\"",
    "respuesta": "Mundo Terrenal",
    "incorrecta1": "Es Mejor Morir",
    "incorrecta2": "Dios Es El Camino",
    "incorrecta3": "Adán Y Eva\r",
    "imagen": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
    "objectFit": "cover"
},
{
    "categoria": "Arte y literatura",
    "pregunta": "Ciudad fetiche del escritor Paul Auster",
    "respuesta": "Nueva York",
    "incorrecta1": "París",
    "incorrecta2": "Ámsterdam",
    "incorrecta3": "Bogotá\r",
    "imagen": "https://i.ibb.co/zfM2Vyd/paul-auster.jpg"
},
{
    "categoria": "Arte y literatura",
    "pregunta": "Escritor de \"El viejo y el mar\"",
    "respuesta": "Ernest Hemingway",
    "incorrecta1": "Julio Verne",
    "incorrecta2": "Gabriel García Márquez",
    "incorrecta3": "Ernesto Sábato\r",
    "imagen": "https://i.ibb.co/WHd1NnL/el-viejo-y-el-mar.jpg"
},
{
    "categoria": "Arte y literatura",
    "pregunta": "Vivía en el 221B de Backer Street.",
    "respuesta": "Sherlock Holmes",
    "incorrecta1": "Katniss Everdeen",
    "incorrecta2": "Hermione Jean Granger",
    "incorrecta3": "Harry James Potter \r",
    "imagen": "https://i.ibb.co/SPqsRyx/221b.jpg"
},
{
    "categoria": "Arte y literatura",
    "pregunta": "Género al que pertenece la novela \"La historia del ojo\" de George Bataille",
    "respuesta": "Erótico",
    "incorrecta1": "Drama",
    "incorrecta2": "Terror",
    "incorrecta3": "Suspenso\r",
    "imagen": "https://i.ibb.co/dgfv8zK/el-ojo.gif"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Con qué nombre se conoce el ciclo del agua?",
  "respuesta": "Ciclo Hidrológico",
  "incorrecta1": "Ciclo Natural",
  "incorrecta2": "Ciclo Hidropónico",
  "incorrecta3": "Ciclo Acuoso\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿En qué parte del cuerpo tienen rayas el okapi?",
  "respuesta": "Las Patas",
  "incorrecta1": "La Cabeza",
  "incorrecta2": "El Torso",
  "incorrecta3": "No Tiene Rayas\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Cuántas cavidades estomacales tiene una vaca?",
  "respuesta": "Cuatro",
  "incorrecta1": "Una",
  "incorrecta2": "Dos",
  "incorrecta3": "Tres\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Por qué los cocodrilos mantienen la boca abierta durante largo rato?",
  "respuesta": "Para Calentarse",
  "incorrecta1": "Para Hacer La Digestión",
  "incorrecta2": "Para Beber Agua",
  "incorrecta3": "Por Si Se Cuela Algo Que Puedan Comerse\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Dónde están los meniscos?",
  "respuesta": "En Las Rodillas",
  "incorrecta1": "En Los Codos",
  "incorrecta2": "En La Punta Del Pie",
  "incorrecta3": "En El Peroné\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Qué hace la cochinilla de la humedad si la tocamos?",
  "respuesta": "Se Enrolla",
  "incorrecta1": "Pica",
  "incorrecta2": "Corre",
  "incorrecta3": "Se Muere\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Qué es lo que transforma la leche en yogur?",
  "respuesta": "Una Bacteria",
  "incorrecta1": "Un Virus",
  "incorrecta2": "Un Musgo",
  "incorrecta3": "El Tiempo\r",
  "imagen": "https://i.ibb.co/6ZWgY0f/recomendaciones-yogures.jpg",
  "objectFit": "contain"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "Las nutrias de mar ¿con que abren las ostras?",
  "respuesta": "Con Una Piedra",
  "incorrecta1": "Con Un Palo",
  "incorrecta2": "Con Los Dientes",
  "incorrecta3": "Con Las Uñas\r",
  "imagen": "https://i.ibb.co/3SSzLyQ/unnamed.jpg"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Qué tipo de mamífero es un conejo?",
  "respuesta": "Lagomorfo",
  "incorrecta1": "Roedor",
  "incorrecta2": "Marsupial",
  "incorrecta3": "Equino\r",
  "imagen": "https://i.ibb.co/TqKxXn6/cuidados-del-conejo-3170-orig.jpg"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Cuántos rayos gamma emite una neurona cuando hace sinapsis?",
  "respuesta": "Ninguno",
  "incorrecta1": "Uno",
  "incorrecta2": "Dos",
  "incorrecta3": "De Dos a Tres\r",
  "imagen": "https://i.ibb.co/T8nnYyV/00.jpg"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Cómo se llama a la sensibilidad dolorosa de los sonidos?",
  "respuesta": "Hiperacusia",
  "incorrecta1": "Hipoacusia",
  "incorrecta2": "Micropsia",
  "incorrecta3": "Hipoalgesia\r"
},
{
  "categoria": "Internet",
  "pregunta": "¿Cuál de estas redes sociales es de ámbito laboral?",
  "respuesta": "Linkedin",
  "incorrecta1": "Facebook",
  "incorrecta2": "Tuenti",
  "incorrecta3": "Jobfire\r"
},
{
  "categoria": "Ciencia y técnologia",
  "pregunta": "¿Cómo se llama la parte de la estructura de una cúpula que la sostiene?",
  "respuesta": "Tambor",
  "incorrecta1": "Nervaduras",
  "incorrecta2": "Contrafuerte",
  "incorrecta3": "Ninguna\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Para qué fue creado el plan Marshall en 1947?",
  "respuesta": "Reconstrucción",
  "incorrecta1": "Regalo",
  "incorrecta2": "Conquista",
  "incorrecta3": "Comercio\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Quién fue galardonado con el premio Nobel de la Paz en 2007?",
  "respuesta": "Albert Gore",
  "incorrecta1": "Albert Einstein",
  "incorrecta2": "Albert Schweitzer",
  "incorrecta3": "Albert Van Bommel\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Cómo llamaban a Dios los testigos de Jehová?",
  "respuesta": "Jehová",
  "incorrecta1": "Jesús",
  "incorrecta2": "Buda",
  "incorrecta3": "Mutante\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Cómo se llama la sustancia que se utiliza en la Iglesia para hacer mucho humo?",
  "respuesta": "Incienso",
  "incorrecta1": "Vino",
  "incorrecta2": "Carbón",
  "incorrecta3": "Aceite\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Cómo se llama la capital del antiguo imperio azteca?",
  "respuesta": "Tenochtitlan",
  "incorrecta1": "Quetzalcoatl",
  "incorrecta2": "Culhuacan",
  "incorrecta3": "Texcoco\r"
},
{
  "categoria": "Historia",
  "pregunta": "Los cuatro evangelistas de la Biblia son Mateo, Marcos, Lucas y…",
  "respuesta": "Juan",
  "incorrecta1": "Antonio",
  "incorrecta2": "Jesús",
  "incorrecta3": "José\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Quién gobernó Francia desde 1799 a 1815?",
  "respuesta": "Napoleón Bonaparte",
  "incorrecta1": "Adam Smith",
  "incorrecta2": "François Quesnay",
  "incorrecta3": "Louis Bonaldgug\r"
},
{
  "categoria": "Historia",
  "pregunta": "¿Qué modelo de Seat significó la motorización de los españoles?",
  "respuesta": "600",
  "incorrecta1": "500",
  "incorrecta2": "Ibiza",
  "incorrecta3": "León\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuáles son los ingredientes exclusivos de la paella valenciana son?",
  "respuesta": "Arroz, Judías Verdes, Carne De Pollo Y Conejo",
  "incorrecta1": "Arroz, Garbanzos, Costillas, Morcillas",
  "incorrecta2": "Arroz, Chorizo Y Mucho Limón",
  "incorrecta3": "Arroz, Mariscos, Guisantes\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuál es la capital de Kosovo?",
  "respuesta": "Prístina",
  "incorrecta1": "Kosovo",
  "incorrecta2": "Tenerife",
  "incorrecta3": "Malí\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuándo es verano en el hemisferio sur?",
  "respuesta": "De Diciembre A Marzo",
  "incorrecta1": "De Marzo A Junio",
  "incorrecta2": "De Junio A Septiembre",
  "incorrecta3": "De Septiembre A Diciembre\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Qué país NO se encuentra en Asia?",
  "respuesta": "Comores ",
  "incorrecta1": "Brunei",
  "incorrecta2": "Sri Lanka",
  "incorrecta3": "Indonesia\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuál es la capital de Japón?",
  "respuesta": "Tokio",
  "incorrecta1": "Kioto",
  "incorrecta2": "Pekín",
  "incorrecta3": "Ninguna Es Correcta\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuál de estos países africanos NO tiene costa ?",
  "respuesta": "Chad",
  "incorrecta1": "Marruecos",
  "incorrecta2": "Túnez",
  "incorrecta3": "Sudáfrica \r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Cuál es la capital de Belice ?",
  "respuesta": "Belmopán",
  "incorrecta1": "Kingston",
  "incorrecta2": "Managua",
  "incorrecta3": "Saint John\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿A qué país tienes que ir para visitar el turístico pueblo costero de Sidi Bou Said?",
  "respuesta": "Túnez",
  "incorrecta1": "Egipto",
  "incorrecta2": "Marruecos ",
  "incorrecta3": "Libia\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿En qué provincia desemboca el Ebro en el Mediterráneo ?",
  "respuesta": "Tarragona",
  "incorrecta1": "Zaragoza",
  "incorrecta2": "Barcelona",
  "incorrecta3": "Castellón \r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿Dónde creció Sigmund Freud ?",
  "respuesta": "Viena",
  "incorrecta1": "París",
  "incorrecta2": "Múnich",
  "incorrecta3": "Kiev\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿En qué continente queda Chile?",
  "respuesta": "América",
  "incorrecta1": "Asia",
  "incorrecta2": "Europa",
  "incorrecta3": "África\r"
},
{
  "categoria": "Geografía",
  "pregunta": "¿En qué continente queda Chile?",
  "respuesta": "América",
  "incorrecta1": "Asia",
  "incorrecta2": "Europa",
  "incorrecta3": "África\r"
}*/
  ]
  interprete_bp = base_preguntas
  escogerPreguntaAleatoria()
}

let pregunta
let posibles_respuestas
btn_correspondiente = [
  select_id("btn1"), select_id("btn2"),
  select_id("btn3"), select_id("btn4")
]
npreguntas = []

let preguntas_hechas = 0
let preguntas_correctas = 0

function escogerPreguntaAleatoria() {
  let n = Math.floor(Math.random() * interprete_bp.length)
  // n = 0

  while (npreguntas.includes(n)) {
    n++
    if (n >= interprete_bp.length) {
      n = 0
    }
    if (npreguntas.length == interprete_bp.length) {
      npreguntas = []
    }
  }
  npreguntas.push(n)
  preguntas_hechas++
  
  escogerPregunta(n)
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n]
  select_id("categoria").innerHTML = pregunta.categoria
  select_id("pregunta").innerHTML = pregunta.pregunta
  select_id("numero").innerHTML = n
  let pc = preguntas_correctas
  if(preguntas_hechas>1){
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas-1)
  }else{
     select_id("puntaje").innerHTML = ""
  }
    
  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta)
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen)
    style("imagen").height = "200px"
    style("imagen").width = "100%"
  } else {
    style("imagen").height = "0px"
    style("imagen").width = "0px"
    setTimeout(() => {
            select_id("imagen").setAttribute("src", "")
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3
  ]
  posibles_respuestas.sort(() => Math.random() - 0.5)

  select_id("btn1").innerHTML = posibles_respuestas[0]
  select_id("btn2").innerHTML = posibles_respuestas[1]
  select_id("btn3").innerHTML = posibles_respuestas[2]
  select_id("btn4").innerHTML = posibles_respuestas[3]
}

let suspender_botones = false

function oprimir_btn(i) {
  if (suspender_botones) {
    return
  }
  suspender_botones = true
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++
    btn_correspondiente[i].style.background = "lightgreen"
  } else {
    btn_correspondiente[i].style.background = "pink"
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen"
      break
    }
  }
  setTimeout(() => {
    reiniciar()
    suspender_botones = false
  }, 3000);
}

// let p = prompt("numero")

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white"
  }
  escogerPreguntaAleatoria()
}

function select_id(id) {
  return document.getElementById(id)
}

function style(id) {
  return select_id(id).style
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}