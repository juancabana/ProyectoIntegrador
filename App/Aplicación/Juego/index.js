window.onload = function () {
  base_preguntas = [
    {
      "categoria": "Pila, Cola",
      "pregunta": "¿Qué estructura de datos (se permite marcar más de una respuesta) utilizaría     para simular el comportamiento de clientes en un sistema de cajas de un supermercado?",
      "respuesta": "Cola incluyendo la operación borrar.",
      "incorrecta1": "Pila con ordenación",
      "incorrecta2": "Pila sin Prioridad",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/N2tFV8m/personas-pie-cola-larga-supermercado-haciendo-fila-esperando-servicio-al-cliente-horizontal-composic.jpg",
      "objectFit": "cover"
    },
    {
      "categoria": "Pila",
      "pregunta": "Marque la respuesta Correcta",
      "respuesta": "En una pila los elementos se añaden y eliminan solo por un extremo: la cima",
      "incorrecta1": "En una pila solo puedes tener elementos limitados",
      "incorrecta2": "La pila solo guarda valores enteros, nada de letras",
      "incorrecta3": "La pila es tan eficiente para aplicarla a nuestra vida cotidiana",
    },
    {
      "categoria": "Cola",
      "pregunta": "La representación en memoria de las estructuras de datos tipo Colas se lleva a cabo por medio de: ",
      "respuesta": "listas enlazadas y arreglos",
      "incorrecta1": " Arreglos ",
      "incorrecta2": " Listas doblemente enlazadas ",
      "incorrecta3": "Listas enlazadas",
    },
    {
      "categoria": "Pila",
      "pregunta": "Uno de los principales usos de las estructuras de datos tipo pila es:",
      "respuesta": "Tipo Tratamiento de expresiones matemáticas",
      "incorrecta1": "Control de problemas matemáticos ",
      "incorrecta2": "Almacenar datos de cualquier",
      "incorrecta3": "Ingresar datos y conservar el orden de llegada",
    },
    {
      "categoria": "Cola",
      "pregunta": "Una cola es una estructura de datos lineal conocida como Lista:",
      "respuesta": " FIFO ",
      "incorrecta1": " FIFO/LIFO ",
      "incorrecta2": "LIFO",
      "incorrecta3": "LIFO/LIFO ",
    },
    {
      "categoria": "Pila",
      "pregunta": " La representación en memoria de las estructuras de datos tipo pila se lleva a cabo por medio de: ",
      "respuesta": "listas enlazadas y arreglos ",
      "incorrecta1": "Arrays",
      "incorrecta2": "Variables",
      "incorrecta3": " Listas doblemente enlazadas ",
    },
    {
      "categoria": "Cola",
      "pregunta": " Según la fundamentación teórica, una de las siguientes opciones no corresponde a las operaciones básicas que se puede realizar con la implementación de una estructura de datos de tipo cola. ",
      "respuesta": " Ordenación ",
      "incorrecta1": " Eliminación ",
      "incorrecta2": " Inserción ",
      "incorrecta3": " Visualización ",

    },
    {
      "categoria": "Pila & Cola",
      "pregunta": "Si tuvieras que elegir un procedimiento para un banco, ¿Qué opción tomarías?",
      "respuesta": "Cola",
      "incorrecta1": "Pila",
      "incorrecta2": "null",
      "incorrecta3": "null",
    },
    {
      "categoria": "Pila",
      "pregunta": " Las pilas se conocen también como estructuras ",
      "respuesta": " LIFO ",
      "incorrecta1": " FIFO ",
      "incorrecta2": " FIFO/LIFO ",
      "incorrecta3": " LIFO/LIFO ",
    },
    {
      "categoria": "Pila",
      "pregunta": "¿Cuándo una pila no tiene elementos como podría denominarse?",
      "respuesta": " Pila vacía",
      "incorrecta1": "Pila llena",
      "incorrecta2": "Pila sin elementos",
      "incorrecta3": "Una pila Nula",
    },
    {
      "categoria": "Pila",
      "pregunta": "¿Qué debe proporcionar una pila con sus operadores",
      "respuesta": " Una Pila Vacía y llena",
      "incorrecta1": "Una Pila llena y una Ordenada",
      "incorrecta2": "Una Pila con múltiples respuestas",
      "incorrecta3": "Una pila Vacía con un mensaje diciendo Nulo",

    },
    {
      "categoria": "Cola",
      "pregunta": "¿Qué afirmación es correcta sobre la Cola?",
      "respuesta": "Añadir elementos por un extremo, final de la cola",
      "incorrecta1": "La operación Insertar añade un elemento por el Frente de cola",
      "incorrecta2": "El servicio de atención a clientes en un ejemplo claro de una pila",
      "incorrecta3": "Una cola es una estructura de datos cuyos elementos mantienen un cierto preOrden",

    }
  ]
  LlamarPregunta()
}

let pregunta
let posibles_respuestas
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
]
npreguntas = []

let preguntas_hechas = 0
let preguntas_correctas = 0


function LlamarPregunta() {

  let n = 0  // n = 0
  while (npreguntas.includes(n)) {
    n++
    if (n >= base_preguntas.length) {
      n = 0
    }
    if (npreguntas.length == base_preguntas.length) {
      npreguntas = []
    }
  }
  npreguntas.push(n)
  preguntas_hechas++

  OrdenarPregunta(n)
}


function OrdenarPregunta(n) {
  /*Se lee la base de las preguntas */

  pregunta = base_preguntas[n]
  select_id("categoria").innerHTML = pregunta.categoria
  select_id("pregunta").innerHTML = pregunta.pregunta
  select_id("numero").innerHTML = n
  let pc = preguntas_correctas
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1)
  } else {
    select_id("puntaje").innerHTML = ""
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta)

  /**Aquí se pregunta si la pregunta tiene imagen*/
  /*Si no tiene, se ponen todos sur valores en cero, caso contrario, se le invocan sus estilos*/
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



  /*Si la cantidad de preguntas hechas es mayor que la longitud del array, termine el juego*/
  if (preguntas_hechas > base_preguntas.length) {
    Resultados()
  }

}



function Resultados() {
  let porcentaje = Math.round((preguntas_correctas / preguntas_hechas) * 100)


  if (porcentaje <= 33) {
    alert("Necesitas estudiar más \n" +
      "Has sacado " + preguntas_correctas + " Preguntas buenas, de " + (preguntas_hechas - 1) + " Preguntas hechas \n" 
      + "El porcetaje de acierto es: " + porcentaje + "%")
  } else if (porcentaje > 33 && porcentaje <= 66) {
    alert("Vamos, un poco más y puedes lograrlo \n"
      + "Has sacado " + preguntas_correctas + " Preguntas buenas, de " + (preguntas_hechas - 1) + " Preguntas hechas \n"
      + "El porcetaje de acierto es: " + porcentaje + "%")
  } else if (porcentaje > 66) {
    alert("Tienes un muy buen nivel \n"
      + "Has sacado " + preguntas_correctas + " Preguntas buenas, de " + (preguntas_hechas - 1) + " Preguntas hechas \n"
      + "El porcetaje de acierto es: " + porcentaje + "%")

  }

  window.location.href = "../Paginas/first.html"/**Si se da click en el botón juego, te traslada a esta pagina */
}



function desordenarRespuestas(pregunta) {
  /*Se crea un array de las respuestas, para poder desordenarlas */
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3
  ]
  /*Con el ".sort" se desordenan todos los elementos del array*/
  posibles_respuestas.sort(() => Math.random() - 0.5)
  /*Se le da un indice a cada boton, para así poder desordenar las respuestas */
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
  /*Si la respuesta elegida, es CORRECTA, se colorea el boton de verde*/
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++
    btn_correspondiente[i].style.background = "lightgreen"
  } else {
    /*Si la respuesta elegida, es INCORRECTA, se colorea el boton de roro*/
    btn_correspondiente[i].style.background = "pink"
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen"
      break
    }
  }
  /*Tiempo de botones  */
  setTimeout(() => {
    reiniciar()
    suspender_botones = false
  }, 1000);
}

// let p = prompt("numero")

function reiniciar() {
  /*Esta funcion es para devolver los estilos por defecto de los boto */
  for (const btn of btn_correspondiente) {
    btn.style.background = "white"
  }

  //while (preguntas_hechas < 5) {
  LlamarPregunta()

  //}
}

/*Se identifica el id del objeto*/
function select_id(id) {
  return document.getElementById(id)
}

/**Se invoca el estilo de cada objeto */
function style(id) {
  return select_id(id).style
}
