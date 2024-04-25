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
        `Deberas comprar comida al llegar a medellin tu presupuesto sigue en: $${budget}`
      );
      break;
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
    let choise = confirm(`Hace un poco de Hambre. Quieres comprar algo?`);
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
  let confirm = confirm(
    "Vas a usar el wifi? recuerda que cada hora tiene un precio de $50.000"
  );
  if (confirm) {
    let pass = "01110010_01101001_01110111_01101001".split("_");
    let result = "";
    pass.forEach((num) => {
      let aux = parseInt(num, 2);
      let password = String.fromCharCode(aux);
      result += password;
    });
    alert(result);
    let hours = 0;
    while (hours < 0) {
      hours = parseInt("Ingresa cuantas horas utilizaste el wifi");
    }
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
    `As llegado a macondo, todos hablan con la vocal ´i´ unicamente\nAs solicitado un taxi debes usar un traductor para que te entienda! confirma vas a usar el traductor en la frase ${string}`
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
  return Math.floor(Math.random() * 4);
};

const priceTaxi = () => {
  alert(
    "El taxi, le pide que le 300.000 pesos, y as quedado sorprendido, asi que empiezas a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata, no pasa nada."
  );
  let choise = prompt(
    "¿Quieres ganar papel, piedra o tijera? \n1.Papel \n2.Piedra \n3.Tijera"
  );
  if (choise.match(/^[1-3]$/)) {
    let taxi = getRandomInt();
  }
};

// footSelect();
// waitingRoom();
// hunger();
//binPassword();
//vocal();
