/* Co je za úkol v tomto projektu:

1) Do prvku s id="receptar" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html. */
let kategorie;
let receptar = document.querySelector('.receptar');
receptar.classList.add('receptar');
let kontejner = document.querySelector('.kontejner');

let hlavicka = document.querySelector('.hlavicka');

function pridejReceptDoMenu(recept) {
    let divRecept = document.createElement('div');
    divRecept.classList.add('recept');
    receptar.appendChild(divRecept);
    divRecept.onclick = function() {
        precistRecept(recept.id);
    };
    
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
    kategorie = select.value;
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
function seraditPodleHodnoceni(select) {
    if (!select) {
        return;
    }
    receptar.innerHTML = '';
    let razeni = select.value;
    if (razeni === '') {
        vypisRecepty();
    } else if (razeni === "1") {
        recepty.sort(function(recept1, recept2){
            return recept2.hodnoceni - recept1.hodnoceni
        });
        vypisRecepty();
        } else {
            if (razeni === "2") {
                recepty.sort(function(recept1, recept2){
                    return recept1.hodnoceni - recept2.hodnoceni
                });
                vypisRecepty();
            }
            
        }
    }
  seraditPodleHodnoceni();


/* 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */
function receptInfo(recept) {
        let receptFoto = document.querySelector('#recept-foto');
        receptFoto.src = recept.img;
    
        let receptIdKategorie = document.querySelector('#recept-kategorie');
        receptIdKategorie.innerHTML = recept.kategorie;
    
        let receptIdHodnoceni = document.querySelector('#recept-hodnoceni');
        receptIdHodnoceni.innerHTML = recept.hodnoceni;
    
        let receptNazev = document.querySelector('#recept-nazev');
        receptNazev.innerHTML = recept.nadpis;
    
        let receptPopis = document.querySelector('#recept-popis');
        receptPopis.innerHTML = recept.popis;
};

function precistRecept(id) {
    for (let i = 0; i < recepty.length; i++) {
            if (recepty[i].id === id) {
                receptInfo(recepty[i]);
                localStorage.receptid = id;
            }
    } 
};

/* 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

    function nacteniPoslednihoReceptu() {
        let receptid = localStorage.receptid;
        if (receptid != undefined) {
            precistRecept(Number(receptid));
        } else {
            precistRecept(0);
        }
    }
    nacteniPoslednihoReceptu();

    
     
