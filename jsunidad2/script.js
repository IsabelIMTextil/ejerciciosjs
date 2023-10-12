/* 9. solicita ingrese su nombre y luego su apellido. programa que arme y muestre el mensaje "Bienvenido", seguido del */
const SALUDO = "Bienvenida/o"
var nombreUsuario = prompt("Ingrese su nombre") 
var apellidoUsuario = prompt("Ingrese su apellido")

alert(SALUDO +" " + nombreUsuario +" " + apellidoUsuario)

/* 10. solicita ingrese el diámetro de un círculo. programa para calcular e informar el perímetro y el área del círculo.  */
diamCirculo= parseFloat(prompt("diámetro del círculo"))
const PI = 3.1416
var r = (diamCirculo / 2)
alert("Perímetro del círculo = " +" " + diamCirculo*PI)
alert("Área del círculo = " +" " + PI*r*r)

/* 11. solicita  ingrese 4 números. programa para calcular e informar la suma y el promedio.*/
num1= parseFloat(prompt("ingrese primer número"))
num2= parseFloat(prompt("ingrese segundo número"))
num3= parseFloat(prompt("ingrese tercer número"))
num4= parseFloat(prompt("ingrese cuarto número"))

var sumaTotal = (num1 + num2 + num3 + num4)
alert("Suma total = " + " " + sumaTotal)

var promedio = (sumaTotal/4)
alert("Promedio = " + " " + promedio)

/*12. sistema para cálculo de sueldos . solicita  ingrese  valor  hora y cantidad de horas trabajadas en el mes. programa para calcular e informar el sueldo mensual del empleado.*/
valorHora= parseFloat(prompt("valor de la hora"))
cantHoras= parseFloat(prompt("cantidad de horas"))

var sueldoMensual = (cantHoras*valorHora)
alert("Sueldo mensual del empleado = $" + " " + sueldoMensual)

/* 13. sistema para el cálculo de sueldos. solicita ingrese valor hora, cantidad de horas y  años de antigüedad. programa para calcular e informar el sueldo mensual, asigna bono mensual 15%   por año de antigüedad. */
valorHora= parseFloat(prompt("valor de la hora"))
cantHoras= parseFloat(prompt("cantidad de horas"))
antig= parseFloat(prompt("antigüedad"))

var sueldoMensual = (cantHoras*valorHora)
var SueldoAntig = (sueldoMensual*antig*0.15)
var sueldoBase = (SueldoAntig + sueldoMensual)

alert("Sueldo + antigüedad = $ " + " " + sueldoBase)

/* 14. sistema para el cálculo de sueldo empresa de seguros.  solicita ingrese valor hora, cantidad de horas, años antigüedad,  cantidad de seguros vendidos y el valor del seguro más caro vendido. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.
*/
valorHora= parseFloat(prompt("ingreser valor de la hora"))
cantHoras= parseFloat(prompt("ingrese cantidad de horas"))
antig= parseFloat(prompt("ingrese antigüedad"))

var sueldoMensual = (cantHoras*valorHora)
var SueldoAntig = (sueldoMensual*antig*0.15)
var sueldoBase = (sueldoMensual+SueldoAntig)
alert("Sueldo base = " + " " + sueldoBase)

segCant= parseFloat(prompt("ingreses cantidad de seguros vendidos"))
seguroPlus= parseFloat(prompt("ingrese valor del seguro más caro vendido"))
const BONO1 = seguroPlus*0.50
alert("Bono1 = 50% del seguro más caro vendido = $ " + " " + BONO1)
const BONO2 = sueldoBase*0.25*segCant
alert("Bono2 = 25% por cantidad de seguros vendidos = $ " + BONO2)

var sueldoTotal = (sueldoBase+BONO1+BONO2)
alert("Sueldo total = $ " + " " + sueldoTotal)

alert("Valor promedio de la hora = $" + " " + sueldoTotal/cantHoras)


alert("👍 Muchas gracias  " + nombreUsuario)




