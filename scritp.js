console.log("hola_gente");
function imprimirnum (){
let resultado = "";
for (let i = 1; i <= 20; i++) {
    if( i % 2 === 0){
        resultado += 1 + " es par<br>";
    }
    else{
        resultado += i + "es impar<br>";
    }
}
document.getElementById("resultado").innerHTML = resultado;
};