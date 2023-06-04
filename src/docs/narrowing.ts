/**
 * Partie - Narrowing
 * ou comment réduire la liste des types disponibles
 */

let btn_inc = document.querySelector('#increment'); // Element | Null
let btn_inc2 = document.querySelector('#increment')!; // Element
let btn_inc3 = document.querySelector('#increment') as HTMLButtonElement; // HTMLButtonElement

// 🪧 Attention pour btn_inc2 et btn_inc3, vous empêchez le querySelector de fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'

// Autre exemple
let btn_dec: (e: MouseEvent) => void = (event: MouseEvent): void => {

    event.preventDefault();

    const input = document.querySelector<HTMLInputElement>("#res"); // HTMLInputElement ou null

    if (input) {
        // HTMLInputElement
        // Premier élément du narrowing, j'ai éliminer le fait qu'il puisse être null
    }
    else {
        // null
    }


};

// Autre exemple (avec un id)
export function printId (id: string | number | null): void {

    if (id) {
        // string | number

        if (typeof id === "number") {
            console.log('id :>>', id); // Simulé, un algo de travail sur l'id, et enregistrement en db spécifique dans des fonctions
        }
        else {
            let tmpId = parseInt(id);
            console.log('id :>>', tmpId);
            // Traitement du cas number direct
        }

    }
    else {
        // null
        id = 42;
        console.log('id :>>', id);
    }

}

// ✏️ écrire l'exemple dans ./app.ts

// Autre exemple (double variable locale)
function exempleN (a: string | number, b: string | boolean) {

    if (a === b) {
        console.log(a); // ici il sera d'office en string
        // Le seul point commun entre a et b est string
    }

}

function exempleOperator (a: MouseEvent | HTMLInputElement) {

    // Exemple si a était un mouseEvent
    // MouseEvent étant un type TypeScript, il n'est pas reconnu par le typeof natif a JS! 
    // if (typeof a === "MouseEvent") { }

    if ("value" in a) {
        console.log(a); // value est une propriété de HTMLInputElement
    }
    else if ("toto" in a) {
        console.log(a); // Ne passera jamais
    }
    else {
        console.log(a); // MouseEvent
    }

}

// Autre cas
// Je veux définir obligatoirement un retour Date sur a
export function isDate (a: any): a is Date {
    return a instanceof Date;
}

// ✏️ écrire l'exemple dans ./app.ts

// Cas plus concret

export class TUser {
    name: string;
    constructor (name: string) { this.name = name; }
}

export function isUser(a: any) : a is TUser {
    return a instanceof TUser
}

// On aurait très bien pu mettre : boolean en retour de fonction
// Mais, dans la lecture de la doc au survol de la fonction,
// il est plus intéressant de savoir que le retour d'un booléen 
// sera sur un TUser et non d'un booléen

// ✏️ écrire l'exemple dans ./app.ts