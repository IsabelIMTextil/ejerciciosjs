//1) nombre y apellido del usuario
var nombreUsuario = prompt("Ingrese su nombre") 
var apellidoUsuario = prompt("Ingrese su apellido")

alert("1) Nombre y apellido de usuario: " + nombreUsuario +" " + apellidoUsuario)


// 2) promedio de 3 notas
 var nota1 = 8
 var nota2 = 6
 var nota3 = 6
 var sumNot = nota1 + nota2 + nota3

 console.log("2) promedio de las notas 8 + 6 + 6 = " + sumNot/3)

//3) perímetro del triángulo
var lado1 = 12
var lado2 = 12
var lado3 = 15
var perimTri = lado1 + lado2 + lado3

console.log("3) perímetro del triángulo = " + " " + perimTri + "cm")

//4) perímetro y área del cuadrado
var lado4 = 3
var perCuad = lado4*4
var areaCuad = lado4*lado4

console.log("4) perímetro del cuadrado 3cm x lado = " + " " + perCuad)
console.log("4) área del cuadrado  3cm x lado = " + " " + areaCuad)

//5) perímetro y área del rectángulo
lados5 = 6
lados6 = 3
var perRect = (lados5*2) + (lados6*2)
var areaRect = lados5*lados6

console.log("5) perímetro del rectángulo, lados 6 y 3 cm = " + " " + perRect)
console.log("5) área del rectángulo, lados 6 y 3 cm = " + " " + areaRect)

//6) resto de la división entera entre los valores
console.log("6) resto de la división entera entre 9 y 5 = " + " " + 9%5)

//7) mensaje "Bienvenido", seguido del nombre y apellido del usuario
console.log("7)")
const SALUDO = "Bienvenida/o"
console.log(SALUDO +" " + nombreUsuario +" " + apellidoUsuario)

//8) Perímetro = pi x diámetro o 2(pi) x radio. Área = pi x radio al cuadrado
const pi= 3.1416
var r = 8
var perCirc = (2*8*pi)
var areaCirc = (r*r*pi)

console.log("8) perímetro del círculo, con radio de 8 cm, = " + " " + perCirc)
console.log("8) área del círculo, con radio de 8 cm, = " + " " + areaCirc)



