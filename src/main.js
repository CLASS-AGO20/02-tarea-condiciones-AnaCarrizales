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
 
}

let app = new App();

console.log("Probando esPar()");
console.log(app.esPar(8)); //Resultado debe ser true
console.log(app.esPar(5)); //Resultado debe ser false
console.log(app.esPar(0)); //Resultado debe ser false
