window.onload = function () {
  base_preguntas = [
    {
      "categoria": "Mixto",
      "pregunta": "¿Qué estructura de datos se debería utilizar para simular el comportamiento de clientes en un sistema de cajas de un supermercado?",
      "respuesta": "Colas",
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
      "incorrecta3": "La pila se puede implementar en bancos",
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
      "respuesta": "Tratamiento de expresiones matemáticas",
      "incorrecta1": "Descontrol de problemas matemáticos ",
      "incorrecta2": "Almacenar datos sin poder eliminarlos",
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
      "pregunta": "¿Qué tipo de datos se pueden almacenar en esta pila?",
      "respuesta": "Enteros",
      "incorrecta1": "Enteros largos",
      "incorrecta2": "String",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/Y3yKpB3/Pila8.png",
      "objectFit": "contain"
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
      "pregunta": "Si tuvieras que elegir una estructura a inplementar en el procedimiento para un banco, ¿Qué opción tomarías?",
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
      "categoria": "Mixto",
      "pregunta": "¿A qué estructura de datos se está haciendo alusión aquí?",
      "respuesta": "Colas",
      "incorrecta1": "Pila con ordenación",
      "incorrecta2": "Pila y colas",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/fpB9hTt/Cola1.png",
      "objectFit": "contain"
    },
    {
      "categoria": "Pila",
      "pregunta": "¿Cuando una pila no tiene elementos como podría denominarse?",
      "respuesta": " Pila vacía",
      "incorrecta1": "Pila llena",
      "incorrecta2": "Pila sin elementos",
      "incorrecta3": "Una pila por llenar",
    },
    {
      "categoria": "Cola",
      "pregunta": "¿Qué afirmación es correcta sobre la Cola?",
      "respuesta": "Añadir elementos por un extremo, final de la cola",
      "incorrecta1": "La operación Insertar añade un elemento por el Frente de cola",
      "incorrecta2": "El servicio de atención a clientes en un ejemplo claro de una pila",
      "incorrecta3": "Una cola es una estructura de datos cuyos elementos mantienen un cierto preOrden",

    },
    {
      "categoria": "Mixto",
      "pregunta": "¿Qué son las pilas y colas?",
      "respuesta": "Estructuras de datos",
      "incorrecta1": "Estructuras solo de enteros",
      "incorrecta2": "Estructuras de enteros y objetos",
      "incorrecta3": "Estructuras solo de strings",

    },
    {
      "categoria": "Mixto",
      "pregunta": "Las estructuras de datos nos permiten tener una mejor gestión de...",
      "respuesta": "Información",
      "incorrecta1": "Números enteros",
      "incorrecta2": "Objetos",
      "incorrecta3": "Riesgo",

    },
    {
      "categoria": "Mixto",
      "pregunta": "¿En cual de las estructuras (Pilas y colas), es necesario modificar directamente el programa para insertar o eliminar elementos?",
      "respuesta": "Ningúna",
      "incorrecta1": "Pilas",
      "incorrecta2": "Colas",
      "incorrecta3": "Pilas y colas",

    },
    {
      "categoria": "Mixto",
      "pregunta": "¿A qué estructura de datos se está haciendo alusión aquí?",
      "respuesta": "Colas",
      "incorrecta1": "Pila con ordenación",
      "incorrecta2": "Pila y colas",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/KNzyrZ6/Cola2.png",
      "objectFit": "contain"
    },
    {
      "categoria": "Pilas",
      "pregunta": "Una pila es una colección ordenada de...",
      "respuesta": "Elementos",
      "incorrecta1": "Enteros",
      "incorrecta2": "Strings",
      "incorrecta3": "Numeros largos",

    },
    {
      "categoria": "Colas",
      "pregunta": "Una Cola es una colección ordenada de...",
      "respuesta": "Elementos",
      "incorrecta1": "Enteros",
      "incorrecta2": "Strings",
      "incorrecta3": "Numeros largos",
      
    },
    {
      "categoria": "Pilas",
      "pregunta": "Las siglas 'LIFO' significan",
      "respuesta": "Last-In, First-Out",
      "incorrecta1": "Last-Integer, First-Object",
      "incorrecta2": "Last-Int, First-Out",
      "incorrecta3": "Last-In, First-Output",
      
    },
    {
      "categoria": "Mixto",
      "pregunta": "¿A qué estructura de datos se está haciendo alusión aquí?",
      "respuesta": "Pilas",
      "incorrecta1": "Colas con ordenación",
      "incorrecta2": "Pila y colas",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/C7g6YZd/Pila2.png",
      "objectFit": "contain"
    },
    {
      "categoria": "Pilas",
      "pregunta": "Las pilas cuentan con dos operaciones imprescindibles...",
      "respuesta": "Apilar - Desapilar",
      "incorrecta1": "Apilar - Insertar",
      "incorrecta2": "Insertar - Mostrar",
      "incorrecta3": "Revelar - Desapilar",
      
    },
    {
      "categoria": "Pilas",
      "pregunta": "En la operación 'Crear' se hace lo siguiente:",
      "respuesta": "Se crea la pila vacía",
      "incorrecta1": "Se crea el primer elemento de la pila",
      "incorrecta2": "Se vacía la pila",
      "incorrecta3": "Se insertan todos los elementos de la pila",
      
    },
    {
      "categoria": "Mixto",
      "pregunta": "¿A qué estructura de datos se está haciendo alusión aquí?",
      "respuesta": "Pilas",
      "incorrecta1": "Colas con ordenación",
      "incorrecta2": "Pila y colas",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/hRrkyxY/Pila5.png",
      "objectFit": "contain"
    },
    {
      "categoria": "Pilas",
      "pregunta": "En la operación 'Apilar' se hace lo siguiente:",
      "respuesta": "Se añade un elemento a la pila",
      "incorrecta1": "Se ordenan los elementos de la pila",
      "incorrecta2": "Se vacía la pila",
      "incorrecta3": "Se insertan todos los elementos de la pila de una vez",
      
    },
    {
      "categoria": "Pilas",
      "pregunta": "En la operación 'Desapilar' se hace lo siguiente:",
      "respuesta": "Se extrae un elemento de la pila (cima)",
      "incorrecta1": "Se eliminan todos los elementos de la pila",
      "incorrecta2": "Se vacía la pila, menos el último",
      "incorrecta3": "Se elimina el primer elemento y el último",
      
    },
    {
      "categoria": "Colas",
      "pregunta": "Las siglas 'FIFO' significan",
      "respuesta": "First-In, First-Out",
      "incorrecta1": "First-Ingeniery, First-Out",
      "incorrecta2": "First-Index, First-Out",
      "incorrecta3": "First-In, First-Output",
      
    },
    {
      "categoria": "Mixto",
      "pregunta": "¿A qué estructura de datos se está haciendo alusión aquí?",
      "respuesta": "Pilas",
      "incorrecta1": "Colas con ordenación",
      "incorrecta2": "Pila y colas",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/HKBKLc2/Pila1.png",
      "objectFit": "contain"
    },
    {
      "categoria": "Pilas",
      "pregunta": "Si se implementa una pila con arrays... ¿Se puede aumentar o decrecer la longitud de esta?",
      "respuesta": "No, ya que el array tiene longitud fija",
      "incorrecta1": "Si, ya que el vector tiene longitud infija",
      "incorrecta2": "No, ya que el vector tiene longitud infija",
      "incorrecta3": "Si, ya que el array tiene longitud fija",
      
    },
    {
      "categoría":"Pilas",
      "pregunta":"Si un programa intenta sacar un elemento de una pila vacía, este retornará un error denominado:",
      "respuesta": "Desbordamiento negativo (underflow)",
      "incorrecta1":"Desbordamiento (overflow)",
      "incorrecta2":"No tendrá errores",
      "incorrecta3":"El programa seguirá corriendo sin problemas" ,
      },
    {
      "categoria": "Pilas",
      "pregunta": "Una pila es una estructura de datos de entradas ordenadas que solo se pueden introducir y eliminar por un extremo llamado:",
      "respuesta": "Cima",
      "incorrecta1": "Fondo",
      "incorrecta2": "Medio",
      "incorrecta3": "Elemento",
      
    },
    {
      "categoria": "Cola",
      "pregunta": "¿Qué tipo de datos se pueden almacenar en esta pila?",
      "respuesta": "Enteros",
      "incorrecta1": "Enteros largos",
      "incorrecta2": "String",
      "incorrecta3": "Objetos",
      "imagen": "https://i.ibb.co/WycShv5/Cola8.png",
      "objectFit": "contain"
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


  let porcentaje = Math.round((preguntas_correctas  / (preguntas_hechas - 1)) * 100)

  if (preguntas_correctas <= (preguntas_hechas -1) / 3) {
    Swal.fire({
      title: 'Necesitas estudiar más',
      text: "Has sacado " + preguntas_correctas + " Preguntas buenas, de "
        + (preguntas_hechas - 1)
        + " Preguntas hechas \n" + "tu porcentaje de acierto es del: " + porcentaje + "%",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#14CEA8',
      cancelButtonColor: '#0CA9A8',
      confirmButtonText: 'Jugar de nuevo',
      cancelButtonText: 'Estudiar de nuevo'
    }).then((result) => {
      if (result.isConfirmed) {

        window.location.href = "index.html"
        
      } else {

        window.location.href = "../Paginas/first.html"

      }
    })

  } else if (preguntas_correctas > ((preguntas_hechas -1) / 3) && preguntas_correctas < ((preguntas_hechas -1) / 2)) {

    Swal.fire({
      title: 'Vamos, puedes llegar más alto',
      text: "Has sacado " + preguntas_correctas + " Preguntas buenas, de "
        + (preguntas_hechas - 1)
        + " Preguntas hechas \n" + "tu porcentaje de acierto es del: " + porcentaje + "%",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#14CEA8',
      cancelButtonColor: '#0CA9A8',
      confirmButtonText: 'Jugar de nuevo',
      cancelButtonText: 'Estudiar de nuevo'
    }).then((result) => {
      if (result.isConfirmed) {

        window.location.href = "index.html"
        
      } else {

        window.location.href = "../Paginas/first.html"

      }
    })
  } else if (preguntas_correctas > ((preguntas_hechas -1) / 2)) {

    Swal.fire({
      title: 'Tienes muy buen nivel, felicidades',
      text: "Has sacado " + preguntas_correctas + " Preguntas buenas, de "
        + (preguntas_hechas - 1)
        + " Preguntas hechas \n" + "tu porcentaje de acierto es del: " + porcentaje + "%",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#14CEA8',
      cancelButtonColor: '#0CA9A8',
      confirmButtonText: 'Jugar de nuevo',
      cancelButtonText: 'Estudiar de nuevo'
    }).then((result) => {
      if (result.isConfirmed) {

        window.location.href = "index.html"
        
      } else {

        window.location.href = "../Paginas/first.html"

      }
    })
  }

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
  }, 100);
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

