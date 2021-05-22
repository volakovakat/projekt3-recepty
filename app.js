/* Co je za úkol v tomto projektu:

1) Do prvku s id="receptar" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html. */
let receptar = document.querySelector('.receptar');
receptar.classList.add('receptar');

let hlavicka = document.querySelector('.hlavicka');


function pridejReceptDoMenu(recept) {
    let divRecept = document.createElement('div');
    divRecept.classList.add('recept');
    receptar.appendChild(divRecept);
    
    let divReceptObrazek = document.createElement('div');
    divReceptObrazek.classList.add('recept-obrazek');

    let receptObrazek = document.createElement('img');
    receptObrazek.src = recept.img;
    divReceptObrazek.appendChild(receptObrazek);
    divRecept.appendChild(divReceptObrazek);

    let divReceptInfo = document.createElement('div');
    divReceptInfo.classList.add('recept-info');
    divRecept.appendChild(divReceptInfo);
    
    let h3NazevReceptu = document.createElement('h3');
    h3NazevReceptu.innerText = recept.nadpis;
    divReceptInfo.appendChild(h3NazevReceptu);
}

function vypisRecepty(vyhledat) {
   /*  for (let i = 0; i < receptar.children.length; i++) {
        receptar.removeChild(receptar.children[i]);
    } */
    receptar.innerHTML = '';

    if (vyhledat == undefined) {
        for (let i = 0; i < recepty.length; i++) {
            pridejReceptDoMenu(recepty[i]);
        } 
    }  else {
        for (let i = 0; i < recepty.length; i++) {
            if (recepty[i].nadpis.toLowerCase().includes(vyhledat.toLowerCase())) {
                pridejReceptDoMenu(recepty[i]);
            } 
        } 
    }
}
vypisRecepty();

/* 2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova. */
function hledatRecept() {
    let inputHledat = document.getElementById("hledat");
    vypisRecepty(inputHledat.value);
}

/* 3) Doplň filtrovanání receptů podle kategorie. */
function hledatPodleKategorie(select) {
    if (!select) {
        return;
    }
    receptar.innerHTML = '';
    let kategorie = select.value;
    if (kategorie === '') {
        vypisRecepty();
    } else {
        for (let i = 0; i < recepty.length; i++) {
            if (recepty[i].kategorie === kategorie) {
                pridejReceptDoMenu(recepty[i]);
            } 
        }
    }
  }


hledatPodleKategorie();
/* 4) Doplň řazení receptů podle hodnocení. */

/* 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */

/* 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/