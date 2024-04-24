//Pago dia viernes.
let budget = 2500000;

//Dia viernes elección de comida.
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

//Sala de espera
const suitcaseSizeEstandar = 55*40*20;
