//Pago dia viernes.
let budget = 2500000;
let days = 0;
alert('¡Estás en el Aeropuerto El Dorado en Bogotá y tienes hambre!')

//Dia viernes 'Bogota' elección de comida.
const choiseFood = (selectFoot) => {
  const message = `Disfruta tu comida, recuerda que tu presupuesto restante es: $`;
  switch (selectFoot) {
    case "1":
      budget = budget - 15000;
      alert(message + budget);
      break;
    case "2":
      budget -= 23000;
      alert(message + budget);
      break;
    case "3":
      alert(
        `Deberás comprar comida al llegar a Medellín. Tu presupuesto sigue en: $
        ${budget}`);
      return;
    default:
      alert(
        "Opción incorrecta. Evento inesperado. ¡Error presentado en día viernes choiseFood....!!!"
      );
  }
  let choise = confirm("Deseas comprar algo mas?");
  if (choise) {
    footSelect();
  } else {
    return;
  }
};

const footSelect = () => {
  selectFoot = prompt(`Por favor escoge la elección del menú:
                        1.Almojábana con gaseosa $15000.
                        2.Subway con gaseosa $23000.
                        3.No quiero comer nada.`);
  if (selectFoot !== null && selectFoot.match(/^[1-3]$/)) {
    choiseFood(selectFoot);
  } else {
    alert(
      "Escogiste un valor distinto de 1 a 3 o no seleccionaste ninguna opción, vuelve a ingresar una opción válida."
    );
    footSelect();
  }

};

// Dia Viernes sala de espera
const waitingRoom = () => {
  const standarTallSuitcase = 55;
  const standarLengthSuitcase = 40;
  const standarWidthSuitcase = 20;

  let tallSuitcase = 60;
  let lengthSuitcase = 40;
  let widthSuitcase = 20;

  alert(`Hola, Hildebrando ahora te encuentras en la sala de espera, pero ha ocurrido un problema con tu equipaje. Este no cumple con las medidas estándar. Debes reducir el tamaño de tu maleta de mano. Las medidas permitidas son: 55 cm (alto) x 40 cm (largo) x 20 cm (ancho) y tus medidas actuales son:
    * alto ${tallSuitcase} cm
    * largo ${lengthSuitcase} cm
    * ancho ${widthSuitcase} cm\nAsi que debes sacar ropa!`);

  //Factor de reducción
  let factorTall = standarTallSuitcase / tallSuitcase;
  let factoLength = standarLengthSuitcase / lengthSuitcase;
  let factoWidth = standarWidthSuitcase / widthSuitcase;

  let factMin = Math.min(factorTall, factoLength, factoWidth);

  tallSuitcase *= factMin;
  lengthSuitcase *= factMin;
  widthSuitcase *= factMin;

  alert(`Que bien, as sacado el factor mínimo de las medidas y as disminuido correctamente tu equipaje. Las nuevas medidas que tienes ahora son:
    * alto ${Math.round(tallSuitcase)} cm
    * largo ${Math.round(lengthSuitcase)} cm
    * ancho ${Math.round(
    widthSuitcase
  )} cm \n¡Cumples con las políticas de la maleta continúa!`);
};

//Dia Sabado 'Medellin' 02:00
const hunger = () => {
  if (selectFoot === "3") {
    let choise = confirm(`As llegado a la ciudad de Medellín. ¿Hace un poco de Hambre, quieres comprar algo?`);
    if (choise) {
      let menu = confirm(
        `Son las 02:00, solo está abierto un restaurante, únicamente tiene un combo de hamburguesas a $60.000.`
      );
      if (menu) {
        budget -= 60000;
        alert(`Tu presupuesto restante es: $${budget}`);
      } else {
        alert(`No compraste nada, tu presupuesto seguirá en: ${budget}`);
      }
    }
  }
};

const binPassword = () => {
  alert('Debes reservar el hotel antes de salir de Medellín.')
  let option = confirm("¿Vas a usar el wifi? Recuerda que cada hora tiene un precio de $50.000.");
  if (option) {
    alert('La contraseña esta en numeros binarios "01110010_01101001_01110111_01101001"; vamos a traducirla la contraseña es: ')
    let pass = "01110010_01101001_01110111_01101001".split("_");
    let result = "";
    pass.forEach((num) => {
      let aux = parseInt(num, 2);
      let password = String.fromCharCode(aux);
      result += password;
    });
    alert(result);
    let hours = parseInt(prompt("Ingresa cuántas horas utilizaste el wifi."));
    while (isNaN(hours)) {
      hours = parseInt(prompt("Al parecer as ingresado un carácter no válido, solo permitimos números."));
    }
    budget -= hours * 50000;
    alert(`Tu presupuesto restante es: $${budget}`);
  } else {
    alert(
      "Si no te conectas, no podrás reservar el hotel, ¡no debes dejar nada a la suerte!"
    );
    binPassword();
  }
};

//Macondo
const vocal = () => {
  alert('¡Llega un taxi!')
  let string = "Taxi; me puede llevar al hotel mariposas amarillas";
  alert('¡El taxista no te entiende!')
  let aux = confirm(
    `¡Has llegado a Macondo, todos hablan con la vocal "i" únicamente\nHas solicitado un taxi, debes usar un traductor para que te entienda! Confirma, si vas a usar el traductor en la frase. ${string}`
  );
  if (aux) {
    alert('El traductor dice:')
    translate(string);
  } else {
    alert("¡No te entendio!");
    vocal();
  }
};

const translate = (string) => {
  let word = string.replace(/[aeou]/g, "i");
  alert(word);
};

const getRandomInt = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const getChoice = (choice) => {
  switch (choice) {
    case 1:
      return 'papel';
    case 2:
      return 'piedra';
    case 3:
      return 'tijera';
    default:
      return 'opción no válida';
  }
};

const papperRockScissors = (select, random) => {
  if (select == random) {
    alert(`Empate, no pasa nada, y no pagas nada, tu presupuesto es. ${budget}`);
    return
  }
  if ((select == 1 && random == 3) || (select == 2 && random == 1) || (select == 3 && random == 2)) {
    budget -= 300000;
    alert(`El taxista escogió ${getChoice(random)}
           Tú escogiste ${getChoice(select)}`);
    alert(`Perdiste, ahora pagarás $300.000 y tu presupuesto es de: $${budget}`);
  } else {
    alert(`El taxista escogió ${getChoice(random)}
           Tú escogiste ${getChoice(select)}`);
    alert(`Has ganado, no debes pagar nada. Tu presupuesto es: $${budget}`);
  }
};

const priceTaxi = () => {
  alert(
    'Has llegado al hotel y el taxista te pide que pagues $300.000 pesos, lo cual te ha sorprendido. Comienzas a negociar con él y le propones un juego: si ganas en "piedra, papel o tijera", le pagarás los $300.000, pero si el taxista pierde, no le debes nada. Solo será una ronda y si hay empate, no habrá pago.');
  let choise = parseInt(prompt(
    "¿Quieres ganar papel, piedra o tijera? \n1.Papel \n2.Piedra \n3.Tijera"
  ));
  if (choise >= 1 && choise <= 3) {
    let taxi = getRandomInt();
    papperRockScissors(choise, taxi);
  } else {
    alert('¡As escogido un valor no válido! PERDISTE, debes pagar $300.000.');
    budget -= 300000;
    alert(`Tu presupuesto restante es: $${budget}`);

  }
};

//final
const finishTravel = (survived = true) => {
  let aux = 2500000 - budget;
  if (aux > 2500000) {
    alert('Increíblemente, has ganado dinero en este viaje. ¡Sigue viajando!');
  }
  if (survived) {
    alert('¡El viaje ha terminado con éxito!');
    alert(`Has sobrevivido ${days} días en Macondo.
           Regresaste vivo.
           El dinero gastado fue de ${aux}`);
    return;
  } else {
    alert(`Tus decisiones te han llevado a la muerte. No pudiste regresar.
           Estuviste en Macondo durante ${days} días y gastaste un total de ${aux}.
           Qué pena.`);
    return;
  }
};

//Hotel actividades
const yellow = () => {
  alert('Has elegido venir a la piscina, ¿verdad? El agua aquí huele bastante extraño, como a una mezcla de "ClO-" y "Na".');
  let choice = confirm('¿Vas a entrar a la piscina con ese olor tan fuerte y esos gases?');
  if (choice) {
    finishTravel(false);
    return;
  } else {
    alert('Has regresado a tu habitación de hotel y comenzará un nuevo día.');
    activityHotel();
  }

}

const green = () => {
  alert('Has decidido hacer caminatas y llevar agua contigo en el camino.');
  let choice = confirm('¿Vas a completar toda la caminata? Al final, te espera una hermosa cascada.');
  if (!choice) {
    alert(`Al elegir regresar, te has perdido y ahora es de noche. Sin embargo, todavía puedes ver. Te encuentras con tres sorpresas inesperadas:

    - Las hormigas de fuego: enormes hormigas rojas que devoran todo a su paso y representan una plaga destructiva en Macondo.
    - Los peces dorados: estos peces, que aparecen en el río, tienen la particularidad de volar en el aire y caer sobre las personas que pasan cerca.
    - La rana piojosa: es una rana afectada por una infestación de piojos y se utiliza como símbolo de decadencia y corrupción en Macondo.`)
    finishTravel(false);
  };
  if(choice){
    alert('¡Disfruta del paisaje y captura muchos recuerdos en fotos! Cuando regreses al hotel, te espera un nuevo día lleno de posibilidades.');
    activityHotel();
  }
}
const red = () => {
  alert(`As elegido actividades en la playa:
        - voleibol, juega y la pasa genial.
        - nada en el mar, y monta moto
        - se pone a tomar cocteles mientras descansa, de pronto siente un fuerte      dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia.`);
  finishTravel(false);
}

let bingo = Math.random();

const blue = () => {
  alert(`Has decidido participar en actividades dentro del hotel:
  - ¡Te diviertes bailando y pasas un momento excelente!`);
  let luck = confirm('¿Te animas a probar suerte con el bingo? Quién sabe, ¡quizás te lleves un premio!');
  if (luck) {
    let money = budget * bingo;
    budget += Math.floor(money);
    alert(`¡Has ganado! Ahora tu presupuesto aumenta en $${Math.floor(money)} y tu total es de $ ${budget}`);
  }
  let backLuck = confirm('¡Estás en una racha de suerte increíble! ¿Por qué no apuestas en el casino? ¡Quizás ganes todavía más!');
  if (backLuck) {
    alert('Has apostado más de lo debido y has perdido. Ahora solo te queda el pasaje de regreso. Estas vacaciones han llegado a su fin.')
    budget = 150000;
    finishTravel();
  }
  if ((!luck || !backLuck)) {
    activityHotel();
  }
}


const activitySelect = (select) => {
  switch (select) {
    case '1':
      yellow();
      break;
    case '2':
      green();
      break;
    case '3':
      red();
      break;
    case '4':
      blue();
      break;
    case '5':
      finishTravel();
      break;
    default:
      console.error('Evento inesperado ActivitySelect')
  }
}



const activityHotel = () => {
  let choise = confirm('¿Te gustaría participar en alguna actividad hoy en el hotel?');
  if (choise) {
    let select = prompt(`Por favor, elige la actividad que deseas realizar:
                        1. Ir a la piscina, pero el agua huele raro!
                        2. Realizar caminatas y agüita para el camino!
                        3. Actividades en la playa!
                        4. Actividades dentro del hotel!
                        5. Regresar a casa`);

    if (select >= 1 && select <= 5) {
      days++;
      activitySelect(select);
    } else {
      alert('Valor no válido. Por favor, seleccione una opción válida.');
      activityHotel();
    }
  } else {
    alert('No quieres hacer nada el día de hoy. ¡Bien!');
    days++;
    alert('Nuevo día - "Fundido a negro"');
    activityHotel();
  }
};

footSelect();
waitingRoom();
hunger();
binPassword();
vocal();
priceTaxi();
activityHotel();


