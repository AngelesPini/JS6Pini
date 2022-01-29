
let total = 0;

class ingredientes {
    constructor(id , plato , porciones , precio){
    this.id = id;
    this.plato = plato;
    this.porciones = porciones;
    this.precio = precio;
}
}

const receta = []; 

receta.push(new ingredientes (001 , "asado" , 1 , 1000))
receta.push(new ingredientes (002 , "asado" , 2 , 1800))
receta.push(new ingredientes (003 , "asado" , 3 , 2500))


let comida = prompt("Selecciones cuantas personas son en su mesa, el menú de hoy es Asado('A', 'B', 'C'): \nA-1 \nB-2 \nC-3 \nPara finalizar, presione 0");
alert("Listado de comidas seleccionadas:")
while(comida != "0"){
    switch (comida){
        case "A": total = total + receta[0].precio
        alert("Añadiste a tu mesa " + receta[0].plato + " " + receta[0].porciones + " $" + receta[0].precio)
        break;
        case "B": total = total + receta[1].precio
        alert("Añadiste a tu mesa " + receta[1].plato + " " + receta[1].porciones + " $" + receta[1].precio)
        break;
        case "C": total = total + receta[2].precio
        alert("Añadiste a tu mesa " + receta[2].plato + " " + receta[2].porciones + " $" + receta[2].precio)
        break;
        default: alert("No ingresaste un producto válido");
    }
    comida = prompt("Selecciones cuantas personas son en su mesa, el menú de hoy es Asado('A', 'B', 'C'): \nA-1 \nB-2 \nC-3 \nPara finalizar, presione 0")
}

alert("El precio total es: $" + total);

// esto es del tp anterior, no se como fusionarlo. No se me cae una idea
let comidas = prompt("Usted quiere \na)Desayunar $500 +IVA \nb)Almorzar $900 +IVA o \nc)Cenar $800 +IVA? \nSeleccione a - b - c")
let precios = parseInt(prompt("Cuántas personas son en su mesa?: 1 - 2 - 3"))

let costo;
function costoinicial (a,b){
    return costo = a*b
}

let IVA;
function suma(c,d){
    return IVA = (c*d)/100
}
let valorTotal;
function totals(e,f) {
    return valorTotal = e+f
}


if (comidas == "a"){
    switch(precios) {
        case 1:
        costoinicial (500 , 1);
        suma (500 , 21);
        totals (costo , IVA);
        alert("Su desayuno individual costará $" + valorTotal);
        break;

        case 2:
            costoinicial (500 , 2);
            suma (500 , 21);
            totals (costo , IVA);
            alert("Su desayuno para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
            break;
        case 3:
            costoinicial (500 , 3);
            suma (500 , 21);
            totals (costo , IVA);
            alert("Su desayuno para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
            break;
    }
} else if (comidas == "b"){
    switch(precios){
    case 1:
        costoinicial (900 , 1);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El menú de hoy es asado. Su almuerzo individual costará $" + valorTotal);
        break; 
    case 2:
        costoinicial (900 , 2);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El menú de hoy es asado. Su almuerzo para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;
    case 3:
        costoinicial (900 , 3);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El manú de hoy es asado. Su almuerzo para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
}
}else if(comidas == "c"){
    switch(precios) {
        case 1:
            costoinicial (800 , 1);
            suma (800 , 21);
            totals (costo , IVA);
            alert("Su cena individual costará $" + valorTotal);
            break;

        case 2: 
        costoinicial (800 , 2);
        suma (800 , 21);
        totals (costo , IVA);
        alert("Su cena para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;

        case 3: 
        costoinicial (800 , 3);
        suma (800 , 21);
        totals (costo , IVA);
        alert("Su cena para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
    }
} else{
    alert("Por favor, ingrese una opción adecuada")
}

let condicion = true;
let tarjeta;
let codigo;

while (condicion) {    
 valorTotal = prompt("seleccione su método de pago: \na) Efectivo \nb) Tarjeta ")
 if (valorTotal == "a"){
     let cambio = prompt("Necesita cambio? Diga 'si' o 'no'")
     if(cambio != "no"){
         cambio = prompt("De cuánto?")
         alert("Gracias por su compra!")
     }else{
         alert("Gracias por su compra!")
     }
     break;
 } else if (valorTotal == "b"){
    tarjeta = prompt("Ingrese su numero de tarjeta")
    codigo = prompt("Ingrese el codigo de su tarjeta")
    alert("Gracias por su compra!")
    break;
 } else{
     alert("Ingrese un valor correcto")
 }

}
