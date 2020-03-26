// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// Stampare i numeri da 1 a 100
var Numeri = [];
var i = 1;
while (i <= 100) {
  Numeri.push(i);
  i++;
}
console.log(Numeri);
// 1 Identificare i numeri multipli di 3 che per definizione sono i numeri divisibili per 3; Ovvero che divisi per 3 non danno resto.
// 2 Sostituirli con la parola fizz
// 3 Identificare i numeri multipli di 5 che per definizione sono i numeri divisibili per 5; Ovvero che divisi per 5 non danno resto.

// 4 Sostituirli con la parola FizzBuzz

// 5 Identifica i numeri che sono divisibili sia per 3 che per 5

// 6 Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”
for (var j = 0; j < Numeri.length; j++) {
  if (((Numeri[j] % 3) === 0) & (Numeri[j] % 5) !== 0) {
    Numeri[j] = "Fizz"
  } else if (((Numeri[j] % 5) === 0) & (Numeri[j] % 3) !== 0) {
    Numeri[j] = "Buzz"
  } else if (((Numeri[j] % 5) === 0) & (Numeri[j] % 3) === 0) {
    Numeri[j] = "FizzBuzz"
  }
}
console.log(Numeri);
