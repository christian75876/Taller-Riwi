//Pago dia viernes.
let budget = 2500000;

//Dia viernes 'Bogota' elección de comida.
const choiseFood = (selectFoot) => {
    const message = `Disfruta tu comida, recuerda tu presupuesto restante es: $`;
    switch (selectFoot) {
        case '1':
            budget = budget - 15000;
            alert(message + budget);
            break;
        case '2':
            budget -= 23000;
            alert(message + budget);
            break;
        case '3':
            alert(`Deberas comprar comida al llegar a medellin tu presupuesto sigue en: $${budget}`)
            break;
        default:
            alert('Opción incorrecta. Evento inesperado. Error presentado en dia viernes choiseFood....!!!');
    }
    let choise = confirm('Deseas comprar algo mas?');
    if (choise) {
        footSelect()
    } else {
        return
    }
}

const footSelect = () => {
    selectFoot = prompt(`Por favor escoge la elección del menu:
                        1.Almojábana con gaseosa $15000.
                        2.Subway con gaseosa $23000.
                        3.No quiero comer nada.`);
    if (selectFoot.match(/^[1-3]$/)) {
        choiseFood(selectFoot);
    } else {
        alert('Escogiste un valor distinto de 1 a 3, vuelve a ingresar  una opción válida.');
        footSelect();
    }

}

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
    * ancho ${widthSuitcase} cm\nAsi que debes sacar ropa!`)

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
    * ancho ${Math.round(widthSuitcase)} cm \nCumples con las politcas de la maleta continua!`)

}

//Dia Sabado 'Medellin' 02:00
const hunger = () => {
    if(selectFoot === '3'){
        let choise = confirm(`Hace un poco de Hambre. Quieres comprar algo?`)
        if (choise){
            let menu = prompt(`son las 02:00 solo esta abierto `)
        }
    }
}


footSelect();
waitingRoom();