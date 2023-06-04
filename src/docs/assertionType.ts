/**
 * Partie 1.2 - Assertion de type
 */

// Attention à l'assertion de type
// Vous ne devez pas laisser le système renvoyer un null
// Sinon des erreurs potentielles de type peuvent se déclencher

let compteur1 = document.querySelector('#compteur'); // Type : Element | null
// Peut être Element ou null → l'union
// compteur1.innerHTML = "Hello there !"; // Ne fonctionne pas car peut être null

let compteur2 = document.querySelector('#compteur') as HTMLButtonElement; // Type : HTMLButtonElement
compteur2.innerHTML = "Hello there !";

// Ou de manière générics (abordés plus tard)

let compteur3 = <HTMLButtonElement>document.querySelector('#compteur'); // Type : HTMLButtonElement

const increment = (e: string | number) => {
    // compteur3.querySelector('span').innerText = e.toString()
    // compteur3.querySelector('span')!.innerText = e.toString()
    // (<HTMLButtonElement>compteur3.querySelector('span')).innerText = e.toString()
}