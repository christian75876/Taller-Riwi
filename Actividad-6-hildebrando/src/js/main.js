//Pago dia viernes.
let budget = 2500000;

//Dia viernes 'Bogota' elección de comida.
const choiseFood = (selectFoot) => {
  const message = `Disfruta tu comida, recuerda tu presupuesto restante es: $`;
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
        `Deberas comprar comida al llegar a medellin tu presupuesto sigue en: $${budget}`);
      return;
    default:
      alert(
        "Opción incorrecta. Evento inesperado. Error presentado en dia viernes choiseFood....!!!"
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
  selectFoot = prompt(`Por favor escoge la elección del menu:
                        1.Almojábana con gaseosa $15000.
                        2.Subway con gaseosa $23000.
                        3.No quiero comer nada.`);
  if (selectFoot.match(/^[1-3]$/)) {
    choiseFood(selectFoot);
  } else {
    alert(
      "Escogiste un valor distinto de 1 a 3, vuelve a ingresar  una opción válida."
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

  alert(`Hola Hildebrando ahora te encuentras en la sala de espera pero a ocurrido un problema con tu equipaje, este no cumple con las medidas estandar debes reducir el tamaño de tu maleta de mano las medidas permitidas son: 55 cm (alto) x 40 cm (largo) x 20 cm (ancho) y tus medidas actuales son: 
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

  alert(`Que bien as sacado el factor minimo de las medidas y as disminuido correctamente tu equipaje. las nuevas medidas que tienes ahora son:
    * alto ${Math.round(tallSuitcase)} cm
    * largo ${Math.round(lengthSuitcase)} cm
    * ancho ${Math.round(
      widthSuitcase
    )} cm \nCumples con las politcas de la maleta continua!`);
};

//Dia Sabado 'Medellin' 02:00
const hunger = () => {
  if (selectFoot === "3") {
    let choise = confirm(`As llegado a la ciudad de Medellin. Hace un poco de Hambre, quieres comprar algo?`);
    if (choise) {
      let menu = confirm(
        `son las 02:00 solo esta abierto un restaurante, unicamente tiene combo de hamburger a $60.000`
      );
      if (menu) {
        budget -= 60000;
        alert(`Tu presupuesto restante es: $${budget}`);
      }
    }
  }
};

const binPassword = () => {
  let option = confirm("Vas a usar el wifi? recuerda que cada hora tiene un precio de $50.000");
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
    let hours = parseInt(prompt("Ingresa cuantas horas utilizaste el wifi"));
    budget -= hours * 50000;
    alert(`Tu presupuesto restante es: $${budget}`);
  } else {
    alert(
      "Si no te conectas, no podras reservar el hotel, no debes dejar nada a la suerte!"
    );
    binPassword();
  }
};

//Macondo
const vocal = () => {
  let string = "Taxi me puede llevar al hotel mariposas amarillas";
  let aux = confirm(
    `As llegado a macondo, todos hablan con la vocal "i" unicamente\nAs solicitado un taxi debes usar un traductor para que te entienda! confirma vas a usar el traductor en la frase ${string}`
  );
  if (aux) {
    translate(string);
  } else {
    alert("No te entendio.!");
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
  if(select == random){
    alert(`Empate no pasa nada, y no pagas nada tu presupuesto es ${budget}`);
    return
  }
  if ((select == 1 && random == 3) || (select == 2 && random == 1) || (select == 3 && random == 2)) {
    budget -= 300000;
    alert(`El taxista escogio ${getChoice(random)}
          tu escogiste ${getChoice(select)}`);
    alert(`Perdiste, ahora pagarás $300.000 y tu presupuesto es de ${budget}`);
  } else {
    alert(`El taxista escogio ${getChoice(random)}
          tu escogiste ${getChoice(select)}`);
    alert(`Has ganado, no debes pagar nada. Tu presupuesto es ${budget}`);
  }
};

const priceTaxi = () => {
  alert(
    "As llegado al hotel y el taxi, te pide que pagues $300.000 pesos, y as quedado sorprendido, asi que empiezas a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata, no pasa nada."
  );
  let choise = parseInt(prompt(
    "¿Quieres ganar papel, piedra o tijera? \n1.Papel \n2.Piedra \n3.Tijera"
  ));
  if (choise >= 1 && choise <=3) {
    let taxi = getRandomInt();
    papperRockScissors(taxi,choise);
  }else{
    alert('As escogido un valor no valido! PERDISTE debes pagar $300.000');
    budget-=300000;
    alert(`Tu presupuesto restante es: $${budget}`);

  }
};

//Hotel actividades
const yellow = () => {
  alert('as elegido venir a piscina, el agua huele bastante extraño como a "ClO-" mezclado con "Na"');
  let choice = confirm('Vas a ingresar a la piscina con ese olor y gases tan fuertes?');
  if(choice){
   //++++++++++++++++++++++++++++ finally();
  }
  activityHotel();
}

const green = () => {
  alert('As elegido realizar caminatas, y tomar agua para el camino');
  let choice = prompt('Vas a realizar toda la caminata , al final hay una hermosa cascada');
  if(!choice){
    alert('Como as elegido devolverte, te as perdido y es de noche!')
  //+++++++++++++++++++++ finally();
  };
  alert('Disfruta del paisaje y toma muchas fotos!');
  activityHotel();
}

const red = () => {
  alert(`As elegido actividades en la playa:
        - voleibol, juega y la pasa genial.
        - nada en el mar, y monta moto
        - se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia.`);
  // ++++++++++++++++++++++++ finish()
}

let bingo = Math.random();

const blue = () => {
  alert(`As elegido realizar actividades dentro del hotel.
        - bailas, y la pasa muy bien`);
  let luck = confirm('Quieres probar suerte con el bingo a lo mejor ganas');
  if(luck){
    let money = budget * bingo;
    budget += money;
    alert(`As ganado ahora tu presupuesto aumento en $${money} y tu total es de $ ${budget}`);
  }
  activityHotel()
}


const activitySelect = (select) => {
  switch(select){
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
      break
  }
}

const activityHotel = () => {
  let choise = confirm('Deseas hacer una actividad hoy en el hotel:');
  while (choise === true){
    let select = prompt(`Ingrese que actividad desea realizar:
                        1. Ir a la piscina, pero el agua huele raro!
                        2. Realizar caminatas y agüita para el camino!
                        3. Actividades en la playa!
                        4.Actividaddes dentro del hotel`);
      activitySelect(select);
  }
}

//footSelect();
//waitingRoom();
//hunger();
//binPassword();
//vocal();
//priceTaxi()
