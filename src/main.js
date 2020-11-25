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
