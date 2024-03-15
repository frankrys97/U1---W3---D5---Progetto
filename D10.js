/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const generateRandomValue = function () {
  return Math.floor(Math.random() * 21);
};

let random = generateRandomValue();

console.log(random);
random = generateRandomValue();
console.log(random);
random = generateRandomValue();
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Francesco",
  surname: "Cristiano",
  age: 26,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let skills = ["HTML", "CSS", "JAVASCRIPT"];

me.skills = skills;

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("JAVA");

console.log(me);
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  return Math.ceil(Math.random() * 6);
};

console.log(dice());
console.log(dice());
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return `I due numeri sono uguali`;
  }
};

console.log(whoIsBigger(2, 4));
console.log(whoIsBigger(5, 4));
console.log(whoIsBigger(4, 4));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  let arrayOfString = string.split(" ");
  for (let i = 0; i < arrayOfString.length; i++) {
    arrayOfString[i] =
      arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1);
  }
  return arrayOfString;
};

console.log(splitMe("A me piace il calcio"));
console.log(splitMe("sono un epicoder"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, bool) {
  if (bool === true) {
    return string.substring(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne("Epicode", true));
console.log(deleteOne("Epicode", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (string) {
  let arrayOfString = string.split(" ");
  let finalString = [];
  for (let i = 0; i < arrayOfString.length; i++) {
    let arrayElement = arrayOfString[i];
    if (isNaN(parseInt(arrayElement))) {
      finalString.push(arrayElement);
    }
  }
  return finalString.join(" ");
};

console.log(onlyLetters("Ho 42 cani e 5 gatti"));
console.log(onlyLetters("44 gatti in fila per 3 col resto di 2"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (string) {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Ho trovato questa che viene definita espressione regolare, quindi un modello
  // che viene usato con le stringhe per verificarne una combinazione di caratteri
  return emailValid.test(string);
  // il metodo test è una proprietà delle espressioni regolari grazie al quale possiamo fare appunto un test
  // sulla stringa che gli passiamo come parametro
};

console.log(isThisAnEmail("frankrys97@gmail.com"));
console.log(isThisAnEmail("frankrys97@gmail@.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  let dayNow = new Date().toLocaleDateString("it-IT", { weekday: "long" });
  let dayNowUp = dayNow.charAt(0).toUpperCase() + dayNow.slice(1);
  return dayNowUp;
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDice = function (number) {
  const values = [];
  let sum = 0;

  for (let i = 0; i < number; i++) {
    const random = dice();
    values.push(random);
    sum += random;
  }
  return {
    sum: sum,
    values: values,
  };
};

console.log(rollTheDice(6));

/* ESERCIZIO 9
Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (day) {
  const dateInput = new Date(day);
  const now = new Date();
  const diffMill = now - dateInput; // Questa è la differenza dei giorni in millisecondi

  const daysBetween = diffMill / (1000 * 60 * 60 * 24); // Formula per convertire i millisecondi in giorni
  return Math.floor(daysBetween); // Mi dava un numero decimale, quindi ho inserito Math.floor
};

console.log(howManyDays("2024-01-24"));

/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  const myBirthday = new Date(new Date().getFullYear(), 4, 27);

  const now = new Date();

  if (
    myBirthday.getDate() === now.getDate() &&
    myBirthday.getMonth() === now.getMonth()
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, string) {
  if (obj.hasOwnProperty(string)) {
    delete obj[string];
  }
  return obj;
};

console.log(
  deleteProp({ name: "Francesco", surname: "Cristiano", age: 26 }, "name")
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (arrayOfFilms) {
  // Ho preferito impostare come parametro della funzione un array generico
  // cosi che potevo rendere la funzione più dinamica e passargli diversi array di film, non solo quello dell'esercizio
  let youngestFilm = movies[0];
  arrayOfFilms.forEach((film) => {
    if (parseInt(film.Year) > parseInt(youngestFilm.Year)) {
      // Ho inserito parseInt per evitare
      // che Javascript effettuasse una type coertion
      youngestFilm = film;
    }
  });
  return youngestFilm;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

let countMovies = function (arrayOfFilms) {
  return arrayOfFilms.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (arrayOfFilms) {
  let titlesOfFilms = arrayOfFilms.map((film) => film.Title);
  return titlesOfFilms;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (arrayOfFilms) {
  let millennialFilms = arrayOfFilms.filter(
    (film) => parseInt(film.Year) >= 2000
  ); // va inserito il parseInt
  // proprio perchè film.Year è una stringa e quindi va trasformata in numero, nonostante JS effettuasse una type coertion

  return millennialFilms;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (arrayOfFilms) {
  let sum = arrayOfFilms.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.Year),
    0
  );
  return sum;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (arrayOfFilms, string) {
  let searchedTitle = arrayOfFilms.filter((film) =>
    film.Title.toLowerCase().includes(string.toLowerCase())
  );
  return searchedTitle;
};

console.log(searchByTitle(movies, "lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (arrayOfFilms, string) {
  const match = arrayOfFilms.filter((film) =>
    film.Title.toLowerCase().includes(string.toLowerCase())
  );

  const unmatch = arrayOfFilms.filter(
    (film) => !film.Title.toLowerCase().includes(string.toLowerCase())
  );

  return {
    match,
    unmatch,
  };
};

console.log(searchAndDivide(movies, "lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (arrayOfFilms, number) {
  if (number >= 0 && number < arrayOfFilms.length) {
    arrayOfFilms.splice(number, 1);
    return arrayOfFilms;
  } else {
    return "L'indice non è presente nell'array";
  }
};

console.log(removeIndex(movies, 13));
console.log(removeIndex(movies, 16));
console.log(removeIndex(movies, -1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const findContainer = function () {
  let container = document.getElementById("container");
  return container;
};

findContainer().style.backgroundColor = "lightgray"; // Come prova della selezione
findContainer().style.marginBlock = "20px";
findContainer().style.borderRadius = "10px";
findContainer().style.color = "#A05A93";

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const findTd = function () {
  let cell = document.getElementsByTagName("td");
  return cell;
};

for (let i = 0; i < findTd().length; i++) {
  findTd()[i].style.backgroundColor = "lightgray";
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = function () {
  for (let i = 0; i < findTd().length; i++) {
    console.log(findTd()[i].textContent); // findTd() è la funzione precedentemente creata che restituisce tutti i tag "td"
  }
};

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const anchor = document.getElementsByTagName("a");

const redA = function () {
  for (let i = 0; i < anchor.length; i++) {
    anchor[i].style.backgroundColor = "red";
  }
};

redA();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const list = document.getElementById("myList");

const addLi = function (text) {
  const newLi = document.createElement("li");
  newLi.innerText = text;
  list.appendChild(newLi);
};

addLi("Java");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const allLi = document.querySelectorAll("#myList li");

const removeList = function () {
  allLi.forEach((item) => item.remove());
};

/* removeList()    // Rimossa perchè altrimenti non si vedevano più gli li, ma funziona
 */

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const allTd = document.getElementsByTagName("tr");

const addClassTr = function () {
  for (let i = 0; i < allTd.length; i++) {
    allTd[i].classList.add("test");
  }
};

addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const tree = document.getElementById("halfTree");

const halfTree = function (number) {
  if (number > 0) {
    for (let i = 0; i <= number; i++) {
      let leaves = "";
      for (let j = 0; j < i; j++) {
        leaves += "*";
      }
      const prg = document.createElement("p");
      prg.innerText = leaves;
      tree.appendChild(prg);
    }
  }
};

halfTree(9);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const TreeCentrate = function (number) {
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      // Utilizzo il primo ciclo for per iterare per un numero di volte pari
      // al parametro indicato nella funzione, questo mi darà le righe dell'albero
      let leaves = ""; // Inizializzo la variabile delle foglie pari ad una stringa
      for (let j = 0; j < number - i - 1; j++) {
        // itero all'interno del ciclo for per aggiungere spazi bianchi all'albero
        leaves += " ";
        // in linea generica con questo ciclo, in base alla riga data dall'iterazione di i ed in base alla grandezza
        // number dell'albero, diminuisco gli spazi bianchi all'aumentare dell'iteratore delle righe
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        // Inoltre itero ancora nel ciclo perchè oltre che stampare gli spazi, devo
        // stampare gli asterischi, che hanno un comportamento che deve essere quello di raddoppiare l'iterazione ed aggiungere
        // 1 al risultato, questo per fare in modo che ogni riga che venga presa in considerazione sia stampato, come asterischi,
        // il suo valore raddoppiato ed aggiunto di uno, in modo da far venire l'effetto di aumento a due a due.
        leaves += "*";
      }
      const prg = document.createElement("pre"); // Ho usato il tag pre al posto degli p
      // perchè ho ricercato e ho trovato che in html gli spazi multipli degli p
      // vengono considerati come singoli spazi, mentre con i tag pre questo non avviene
      prg.innerText = leaves;
      tree.appendChild(prg);
    }
  }
};
TreeCentrate(2);
TreeCentrate(4);
TreeCentrate(20);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const primeNum = function (numero) {
  if (numero < 2) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(primeNum(4));
console.log(primeNum(17));
console.log(primeNum(5));
console.log(primeNum(19));
console.log(primeNum(12));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
