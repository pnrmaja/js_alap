import { adatLista } from "./adat.js";
import { feladat1, kiirAsideDivbe, tablazatKiir, veletlenLista12 } from "./fuggvenyek.js";

let eredmenyElem = document.getElementById("eredmeny")
let inputElem = document.getElementById("ertekeles")
let gombElem = document.getElementById("gomb")
let asideElem = document.getElementById("szamok")
let articleElem = document.getElementById("tablazat");


gombElem.addEventListener("click", kiir)
function kiir(){
    feladat1(inputElem,eredmenyElem)

    
}


let lista=veletlenLista12()
console.log(lista)
kiirAsideDivbe(lista,asideElem)

tablazatKiir(adatLista,articleElem)