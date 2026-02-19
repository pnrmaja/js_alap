
export function feladat1(inputElem, eredmenyElem) {
    let ertek = (Number(inputElem.value));
    let szoveg = ""
    if (ertek === 1) {
        szoveg = "Elégtelen";
    } else if (ertek === 2) {
        szoveg = "Elégséges";
    } else if (ertek === 3) {
        szoveg = "Közepes";
    } else if (ertek === 4) {
        szoveg = "Jó";
    } else if (ertek === 5) {
        szoveg = "Jeles";
    } else {
        szoveg = "Kérlek 1 és 5 közötti számot adj meg!";
    }
    eredmenyElem.innerHTML = szoveg
}

export function veletlenLista12() {
  let lista = [];
  

  for (let i = 0; i < 12; i++) {
    let szam = Math.floor(Math.random() * (100 -(-10)+1))+(-10);
    lista.push(szam);
  }

  return lista;
}

export function kiirAsideDivbe(lista, asideElem) {
    let html="";

    for (let i = 0; i < lista.length; i++) {
        html+= `<div class="kor">${lista[i]}</div>`;
        
    }
    asideElem.innerHTML=html
}
export function tablazatKiir(adatLista, articleElem) {

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Átlag</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < adatLista.length; i++) {
        html += `
            <tr>
                <td>${adatLista[i].nev}</td>
                <td>${adatLista[i].atlag}</td>
            </tr>
        `;
    }

    html += `
            </tbody>
        </table>
    `;

    articleElem.innerHTML = html;
}





