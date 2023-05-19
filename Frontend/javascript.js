if (sessionStorage.getItem('uporabniki') == null) {
  document.getElementById('odjava').style.display = 'none';
}

if (sessionStorage.getItem('uporabniki') != null) {
  document.getElementById('registracija').style.display = 'none';
  document.getElementById('prijava').style.display = 'none';
  if (sessionStorage.getItem('uporabniki') === '1') {
    document.getElementById('vcasihNeviden').style.display = 'block';
  }
}

function datumUra() {
  var danes = new Date();
  var danesDatum = danes.toLocaleDateString();
  var danesUra = danes.toLocaleTimeString();
  document.getElementById("datum").innerHTML = danesDatum + " " + danesUra;

  setInterval(datumUra, 1000);
}

function dobiPodatke() {
  fetch('https://motoshop.fly.dev/izdelki')
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById('container-glavni');

      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-lg-3 col-md-6 col-sm-6';
        productCard.innerHTML = `
            <div class="card, myBad">
                <img class="card-img-top"
                    src="${product.povezavaSlike}">
                <div class="card-body">
                    <h5 class="card-title"><a href="${product.povezavaDoIzdelka}" class="moto_ime">${product.naziv}</a></h5>
                    <p class="card-text">${product.cena}</p>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
      });
    });
}

function dobiAkcijskePodatke() {
  fetch('https://motoshop.fly.dev/akcijski_izdelki')
    .then(response => response.json())
    .then(data => {
      const akcijaContainer = document.getElementById('container-akcija');

      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-lg-4 col-md-6 col-sm-6';
        productCard.innerHTML = `
          <div class="card, myBad">
            <img class="card-img-top" src="${product.povezavaSlike}">
              <div class="card-body">
                <h5 class="card-title">${product.naziv}</h5>
                  <p class="card-text">${product.cena}</p>
              </div>
                <p class="odstevanje" id="odstevalnik${product.id}"></p>
              </div>
      `;
        akcijaContainer.appendChild(productCard);
      });
    });
}

async function izpisPodatkov() {
  try {
    await dobiPodatke();
    await dobiAkcijskePodatke();
    setTimeout(odstevaj, 500);
  } catch (error) {
    console.error(error);
  }
}

function odstevaj() {
  odstevalnik(new Date(2023, 5, 3, 12, 00, 00), 'odstevalnik1');
  odstevalnik(new Date(2023, 5, 29, 1, 40, 00), 'odstevalnik2');
  odstevalnik(new Date(2023, 5, 18, 2, 57, 00), 'odstevalnik3');

  setInterval(odstevaj, 1000);
}

function odstevalnik(datumKonca, imeZnacke) {
  var danes = new Date().getTime();
  var konecPonudbe = datumKonca;
  var preostanek = konecPonudbe - danes;
  var sekunde = preostanek / 1000;
  sekunde = Math.floor(sekunde);

  var minute = sekunde / 60;
  minute = Math.floor(minute);
  sekunde = sekunde - minute * 60;

  var ure = minute / 60;
  ure = Math.floor(ure);
  minute = minute - ure * 60;

  var dnevi = ure / 24;
  dnevi = Math.floor(dnevi);
  ure = ure - dnevi * 24;
  document.getElementById(imeZnacke).innerHTML = dnevi + " dni " + ure + " h " + minute + " min " + sekunde + " s";

  setInterval(odstevalnik, 1000);
}


function validateForm() {
  document.getElementById("rdeci").innerHTML = "";
  document.getElementById("rumeni").innerHTML = "";

  let x = document.forms["obrazec"]["username"].value;
  if (x == "") {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Ime ne sme biti prazno</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }
  var dolzina = x.length;
  if (dolzina < 3) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Ime mora biti daljše od 3 znakov</div>";
    document.getElementById("rumeni").innerHTML = warningMessage;
    return false;
  }

  let y = document.forms["obrazec"]["password"].value;
  if (y == "") {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Geslo ne sme biti prazno</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }
  var dolzina = y.length;
  if (dolzina < 5) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Geslo mora biti daljše od 5 znakov</div>";
    document.getElementById("rdeci").innerHTML = warningMessage;
    return false;
  }
  if (x == y) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Ime in geslo ne smeta biti enaka</div>";
    document.getElementById("rumeni").innerHTML = warningMessage;
    return false;
  }

  let z = document.forms["obrazec"]["repeat_password"].value;
  if (y != z) {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Gesli se ne ujemata</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }

  let e = document.forms["obrazec"]["email"].value;
  let rezultat = e.includes("@")
  if (!rezultat) {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Neveljavna oblika e-maila</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }

  zberiPodatke();
}

function dolociCeno() {
  if (document.getElementById("letna").checked) {
    izpisCene.innerHTML = "30 €";
  }
  else if (document.getElementById("polletna").checked) {
    izpisCene.innerHTML = "15 €";
  }
  else if (document.getElementById("mesecna").checked) {
    izpisCene.innerHTML = "5 €";
  }
  setInterval(dolociCeno, onclick);
}

class Uporabnik {
  constructor(username, email, narocnina) {
    this.username = username;
    this.email = email;
    this.narocnina = narocnina;
  }
}

function getData(id) {
  fetch('https://motoshop.fly.devs/sport_izdelki')
    .then(response => response.json())
    .then(data => {
      const item = data.sportMotorji.find(item => item.id === id);
      dodajVKosarico(item.naziv, item.opis, item.cena, item.popust);
    });
}

function dodajVKosarico(imeIzdelka, opisIzdelka, cenaIzdelka, popust) {
  if (sessionStorage.getItem("poljeIzdelkov") == null) {
    poljeIzdelkov = [];
  }
  else {
    poljeIzdelkov = JSON.parse(sessionStorage.poljeIzdelkov);
  }
  let izdelek = [imeIzdelka, opisIzdelka, cenaIzdelka, 1, popust];
  for (let i = 0; i < poljeIzdelkov.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (poljeIzdelkov[i][j] == izdelek[j]) {
        poljeIzdelkov[i][3]++;
        sessionStorage.setItem("poljeIzdelkov", JSON.stringify(poljeIzdelkov));
        return;
      }
    }
  }
  poljeIzdelkov.push(izdelek);
  console.table(poljeIzdelkov);
  sessionStorage.setItem("poljeIzdelkov", JSON.stringify(poljeIzdelkov));
}

function izrisiKosarico() {
  poljeIzdelkov = JSON.parse(sessionStorage.poljeIzdelkov);
  console.table(poljeIzdelkov);
  const glava = tabela.insertRow(0);
  var celica = glava.insertCell(0);
  celica.innerHTML = "NAZIV";
  var celica = glava.insertCell(1);
  celica.innerHTML = "OPIS";
  var celica = glava.insertCell(2);
  celica.innerHTML = "CENA";
  var celica = glava.insertCell(3);
  celica.innerHTML = "KOLIČINA";
  var celica = glava.insertCell(4);
  celica.innerHTML = "POPUST";

  for (let i = 0; i < poljeIzdelkov.length; i++) {
    const vrstica = tabela.insertRow(i + 1);
    for (let j = 0; j < 5; j++) {
      var cell = vrstica.insertCell(j);
      cell.innerHTML = poljeIzdelkov[i][j];
    }
    var celica = vrstica.insertCell(5);
    celica.innerHTML = `<button onclick="odstraniObjekt(${i})">Odstrani</button>`;

  }

  const cena = tabela.insertRow(poljeIzdelkov.length + 1);
  var celica = cena.insertCell(0);
  var celica = cena.insertCell(1);
  var celicaCena = cena.insertCell(2);
  celicaCena.innerHTML = "Cena " + (izracunajCeno().toFixed(2));
  const brezDDV = tabela.insertRow(poljeIzdelkov.length + 2);
  var celica = brezDDV.insertCell(0);
  var celica = brezDDV.insertCell(1);
  var celicaBrezDDV = brezDDV.insertCell(2);
  celicaBrezDDV.innerHTML = "Cena brez DDV" + (izracunajCeno() * 0.78).toFixed(2);
}

function izracunajCeno() {
  znesek = 0;
  for (let i = 0; i < poljeIzdelkov.length; i++) {
    znesek = znesek + poljeIzdelkov[i][2] * ((100 - poljeIzdelkov[i][4]) / 100) * poljeIzdelkov[i][3];
  }
  popustnaCena = znesek;
  return popustnaCena;
}

function dolociObresti() {
  if (document.getElementById("6").checked) {
    izpisObresti.innerHTML = (izracunajCeno() * 1.2).toFixed(2);
    izpisObroka.innerHTML = ((izracunajCeno() * 1.2) / 6).toFixed(2);
  }
  else if (document.getElementById("12").checked) {
    izpisObresti.innerHTML = (izracunajCeno() * 1.5).toFixed(2);
    izpisObroka.innerHTML = ((izracunajCeno() * 1.5) / 12).toFixed(2);
  }
  else if (document.getElementById("24").checked) {
    izpisObresti.innerHTML = (izracunajCeno() * 1.6).toFixed(2);
    izpisObroka.innerHTML = ((izracunajCeno() * 1.6) / 24).toFixed(2);
  }
  setInterval(dolociObresti, onclick);
}

function odstraniObjekt(index) {
  let vsebina = JSON.parse(sessionStorage.getItem("poljeIzdelkov")) || [];
  if (vsebina.length > index && vsebina[index].length >= 4) {
    let kolicina = parseInt(vsebina[index][3]);
    if (kolicina > 1) {
      vsebina[index][3] = (kolicina - 1).toString();
    } else {
      vsebina.splice(index, 1);
    }
    sessionStorage.setItem("poljeIzdelkov", JSON.stringify(vsebina));
    location.reload();
  }
}

function ponudbaSportMotorjevAA() {
  fetch('https://motoshop.fly.dev/sport_izdelki')
    .then(response => response.json())
    .then(data => {
      const sportContainer = document.getElementById('container-sport');
      localStorage.setItem('sportMotorji', JSON.stringify(data));
      const table = document.createElement('table');
      table.className = 'table table-bordered';
      const thead = document.createElement('thead');
      thead.innerHTML = (`
        <tr>
          <th scope="col">Slika</th>
          <th scope="col">Naziv</th>
          <th scope="col">Opis</th>
          <th scope="col">Cena</th>
          <th scope="col">Popust</th>
          <th scope="col"></th>
        </tr>
      `);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML =
          `<td><img src="${product.povezavaSlike}" alt="${product.naziv}" style="max-width: 200px;"></td>` +
          `<td><a href="${product.povezavaDoIzdelka}">${product.naziv}</a></td>` +
          `<td>${product.opis}</td>` +
          `<td>${product.cena}</td>` +
          `<td>${product.popust}</td>` +
          `<td>
        <button onclick="dodajVKosarico('${product.naziv}', '${product.opis}', '${product.cena}', '${product.popust}')">DODAJ V KOŠARICO
        </button>`
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      sportContainer.appendChild(table);
    });
}

function ponudbaSportMotorjevZaAdmine() {
  fetch('https://motoshop.fly.dev/sport_izdelki')
    .then(response => response.json())
    .then(data => {
      const sportContainer = document.getElementById('container-sport');
      localStorage.setItem('sportMotorji', JSON.stringify(data));
      const table = document.createElement('table');
      table.className = 'table table-bordered';
      const thead = document.createElement('thead');
      thead.innerHTML = (`
        <tr>
          <th scope="col">Slika</th>
          <th scope="col">Naziv</th>
          <th scope="col">Opis</th>
          <th scope="col">Cena</th>
          <th scope="col">Popust</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      `);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML =
          `<td><img src="${product.povezavaSlike}" alt="${product.naziv}" style="max-width: 200px;"></td>` +
          `<td><a href="${product.povezavaDoIzdelka}">${product.naziv}</a></td>` +
          `<td>${product.opis}</td>` +
          `<td>${product.cena}</td>` +
          `<td>${product.popust}</td>` +
          `<td>
        <button onclick="dodajVKosarico('${product.naziv}', '${product.opis}', '${product.cena}', '${product.popust}')">DODAJ V KOŠARICO
        </button>
        <button onclick="odstraniIzdelek(${product.id})">IZBRIŠI IZDELEK</button>`
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      sportContainer.appendChild(table);
    });
}

function prijava() {
  const uporabniskoIme = document.getElementById('username').value;
  const geslo = document.getElementById('password').value;

  const poslji = {
    uporabnisko_ime: uporabniskoIme,
    geslo: geslo
  };

  fetch('https://motoshop.fly.dev/users', {
    method: 'POST',
    body: JSON.stringify(poslji),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not found') {
        const napaka = document.getElementById('napaka');
        napaka.innerText = 'Uporabniško ime ali geslo nista pravilna.';
        napaka.style.display = 'block';
      } else {
        sessionStorage.setItem('uporabniki', JSON.stringify(data.id));
        window.location.href = "index.html";
      }
    })
    .catch(error => console.error(error));

}

function odstraniIzdelek(indeksIzdelka) {
  indeksIzdelka = indeksIzdelka;

  $.ajax({
    type: "DELETE",
    data: indeksIzdelka,
    url: "http://localhost:3000/sport_izdelki/" + indeksIzdelka,
    success: function (odgovor) {
      alert("Izdelek je bil uspešno odstranjen");
      location.reload()
    },
    error: function () {
      alert('Napaka pri odstranjevanju izdelka.');
    }
  })
}

function validacija() {
  document.getElementById("rdeci").innerHTML = "";
  document.getElementById("rumeni").innerHTML = "";

  let x = document.getElementById("username").value;
  if (x == "") {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Ime ne sme biti prazno</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }
  var dolzina = x.length;
  if (dolzina < 3) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Ime mora biti daljše od 3 znakov</div>";
    document.getElementById("rumeni").innerHTML = warningMessage;
    return false;
  }

  let y = document.getElementById("password").value;
  if (y == "") {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Geslo ne sme biti prazno</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }
  var dolzina = y.length;
  if (dolzina < 5) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Geslo mora biti daljše od 5 znakov</div>";
    document.getElementById("rdeci").innerHTML = warningMessage;
    return false;
  }
  if (x == y) {
    let warningMessage = "<div class='alert alert-warning' role='alert'>Ime in geslo ne smeta biti enaka</div>";
    document.getElementById("rumeni").innerHTML = warningMessage;
    return false;
  }

  let z = document.getElementById("repeat_password").value;
  if (y != z) {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Gesli se ne ujemata</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }

  let e = document.getElementById("email").value;
  let rezultat = e.includes("@")
  if (!rezultat) {
    let errorMessage = "<div class='alert alert-danger' role='alert'>Neveljavna oblika e-maila</div>";
    document.getElementById("rdeci").innerHTML = errorMessage;
    return false;
  }

  class noviUporabnik {
    constructor(username, password) {
      this.username = username;
      this.password = password
    }
  }

  if (localStorage.getItem("podatkiOUporabnikih") == null) {
    podatkiOUporabnikih = [];
  }
  else {
    podatkiOUporabnikih = JSON.parse(localStorage.podatkiOUporabnikih);
  }
  var primer = new noviUporabnik(document.getElementById("username").value, document.getElementById("password").value);
  podatkiOUporabnikih.push(primer);
  localStorage.setItem("podatkiOUporabnikih", JSON.stringify(podatkiOUporabnikih));
  
  fetch('https://motoshop.fly.dev/users/registracija', {
    method: 'POST',
    body: JSON.stringify(primer),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        alert('Registracija je bila uspešna.');
        window.location.href = "prijava.html";
      } 
      else {
        alert('Registracija ni uspela. Prosimo, poskusite znova.');
      }
    })
    .catch(error => {
      alert('Napaka pri pošiljanju podatkov na strežnik. Prosimo, poskusite znova.');
    });
  return false;
}

function odjaviUporabnika() {
  sessionStorage.removeItem('uporabniki');
  location.reload();
}