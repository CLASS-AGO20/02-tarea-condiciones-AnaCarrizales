export default class App {

    esPar(numero)
    {
        if(numero == 0)
        {
            return false;
        }
        else if(numero % 2 == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    esMultiplo(numero1, numero2)
    {
        if(numero1 % numero2 == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    calcularSalario(tipoTrabajador, horasTrabajadas)
    {
        let salario;
        switch(tipoTrabajador)
        {
            case 1:
                salario = 20 * horasTrabajadas;
                break;
            case 2:
                salario = 22 * horasTrabajadas;
                break;
            case 3:
                salario = 25 * horasTrabajadas;
                break;
            default:
                salario = -1;
        }
        return salario;
    }

    obtenerCalificacion(calificacionNumerica)
    {
        let letra;
        switch(calificacionNumerica)
        {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                letra = "C";
                break;
            case 6:
            case 7:
                letra = "B"
                break;
            case 8:
            case 9:
                letra = "A";
                break;
            case 10:
                letra ="A+"
                break;
            default:
                letra = "ERROR";
        }
        return letra;
    }
 
}

let app = new App();

console.log("Probando esPar()");
console.log(app.esPar(8)); //Resultado debe ser true
console.log(app.esPar(5)); //Resultado debe ser false
console.log(app.esPar(0)); //Resultado debe ser false

console.log("Probando esMultiplo()")
console.log(app.esMultiplo(8,2)); //Resultado debe ser true
console.log(app.esMultiplo(6,4)); //Resultado debe ser false

console.log("Probando calcularSalario()")
console.log(app.calcularSalario(1,5)); //Resultado debe ser 100
console.log(app.calcularSalario(2,6)); //Resultado debe ser 132
console.log(app.calcularSalario(3,7)); //Resultado debe ser 175
console.log(app.calcularSalario(5,8)); //Resultado debe ser -1

console.log("Probando obtenerCalificacion()")
console.log(app.obtenerCalificacion(0)); //Resultado debe ser C
console.log(app.obtenerCalificacion(1)); //Resultado debe ser C
console.log(app.obtenerCalificacion(2)); //Resultado debe ser C
console.log(app.obtenerCalificacion(3)); //Resultado debe ser C
console.log(app.obtenerCalificacion(4)); //Resultado debe ser C
console.log(app.obtenerCalificacion(5)); //Resultado debe ser C
console.log(app.obtenerCalificacion(6)); //Resultado debe ser B
console.log(app.obtenerCalificacion(7)); //Resultado debe ser B
console.log(app.obtenerCalificacion(8)); //Resultado debe ser A
console.log(app.obtenerCalificacion(9)); //Resultado debe ser A
console.log(app.obtenerCalificacion(10)); //Resultado debe ser A+
console.log(app.obtenerCalificacion(13)); //Resultado debe ser ERROR
