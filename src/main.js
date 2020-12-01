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

    obtenerCercano100(numero1, numero2, numero3)
    {
        if ((numero1 >= 100) && (numero2 > numero1) && (numero3 > numero2))
        {
            return numero1;
        }
        else if ((numero1 > numero2) && (numero3 > numero2))
        {
            return numero2;
        }
        else if ((numero1 > numero3) && (numero2 > numero3))
        {
            return numero3;
        }
        else if ((numero1 < numero2) && (numero2 < numero3))
        {
            return numero3;
        }
        else if ((numero1 == numero2) && (numero3 > numero2))
        {
            return numero3;
        }
    }

    calcular(numero1, numero2, operador)
    {
        let operacion;
        switch(operador)
        {
            case '+':
                operacion = numero1 + numero2;
                break;
            case '-':
                operacion = numero1 - numero2;
                break;
            case '*':
                operacion = numero1 * numero2;
                break;
            case '/':
                operacion = numero1 / numero2;
                break;
            case '%':
                operacion = numero1 % numero2;
                break;
            default:
                operacion = -1;

        }
        return operacion;  
    }
    costoRenta(peliculas, dia)
    {
        let costo;
        if((dia == 1) || (dia == 5))
        {
            let a = peliculas - (peliculas % 3);
            let b = peliculas - a; 
            if (peliculas % 3 == 0)
            {
                costo = 60 * (a/3); 
            }
            else if (peliculas % 3 != 0 && peliculas > 3) 
            {
                costo = 60 * (a / 3) + (b * 25);
            }
            else
            {
                costo = peliculas * 25;
            }
            
        }
        else if ((dia == 2) || (dia == 4))
        {
            if(peliculas % 2 == 0)
            {
                costo = peliculas / 2 * 25;
            }
            else if (peliculas % 2 != 0)
            {
                costo = ((peliculas - 1) / 2) * 25 + 25;
            }
            
        }
        else if (dia == 3)
        {
            let descuento = 21.25
            costo = peliculas * descuento; 
        }
        else if ((dia == 6) || (dia == 7))
        {
            costo = peliculas * 25;
        }
        else
        {
            costo = -1;
        }
        return costo;
    }
    costoBoletos(boletos, zona)
    {
        let costo;
        if (zona==1)
        {
            costo = boletos * 300;
            if(boletos >= 7)
            {
                let descuento;
                descuento = costo * 0.07;
                costo = costo - descuento;
            }
        }
        else if (zona == 2)
        {
            costo = boletos * 450;
            if (boletos >= 5)
            {
                let descuento;
                descuento = costo * 0.07;
                costo = costo - descuento;
            }
        }
        else if (zona == 3)
        {
            costo = boletos * 700;
            if (boletos >= 3)
            {
                let descuento;
                descuento = costo * 0.07;
                costo = costo - descuento;
            }
        }
        else
        {
            costo = -1;
        }
        return costo;
    }
    
    estaEnRango(limiteInicial, limiteFinal, numero)
    {
        if((numero > limiteInicial) && (numero < limiteFinal))
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

console.log("Probando obtenerCercano100()");
console.log(app.obtenerCercano100(200,300,400)); //Resultado debe ser 200
console.log(app.obtenerCercano100(300,200,400)); //Resultado debe ser 200
console.log(app.obtenerCercano100(300,400,200)); //Resultado debe ser 200
console.log(app.obtenerCercano100(-100,50,105)); //Resultado debe ser 105
console.log(app.obtenerCercano100(10,20,30)); //Resultado debe ser 30
console.log(app.obtenerCercano100(10,10,30)); //Resultado debe ser 30

console.log("Probando calcular()");
console.log(app.calcular(8,4,'+')); //Resultado debe ser 12
console.log(app.calcular(8,4,'-')); //Resultado debe ser 4
console.log(app.calcular(8,4,'*')); //Resultado debe ser 32
console.log(app.calcular(8,4,'/')); //Resultado debe ser 2
console.log(app.calcular(8,4,'%')); //Resultado debe ser 0
console.log(app.calcular(8,4,'{')); //Resultado debe ser -1

console.log("Probando costoRenta()");
console.log(app.costoRenta(6,1));
console.log(app.costoRenta(2,1));
console.log(app.costoRenta(5,2));
console.log(app.costoRenta(5,3));
console.log(app.costoRenta(4,6));
console.log(app.costoRenta(4,8));

console.log("Probando costoBoletos()")
console.log(app.costoBoletos(5,1));
console.log(app.costoBoletos(8,1));
console.log(app.costoBoletos(3,2));
console.log(app.costoBoletos(5,2));
console.log(app.costoBoletos(2,3));
console.log(app.costoBoletos(4,3));
console.log(app.costoBoletos(3,9));

console.log("Probando estaEnRango()");
console.log(app.estaEnRango(5,10,8));
console.log(app.estaEnRango(5,10,12));
