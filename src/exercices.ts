/**
 * Partie 1 - ✏️ Exercice 01
 */

/**
 * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., il faudra type le tout au maximum, préparer 2 fonctions pour ça
 */ 

// const btnPlus: HTMLButtonElement | null = document.querySelector("#compteurP");
// const btnMoins: HTMLButtonElement | null = document.querySelector("#compteurM");
// const total: HTMLSpanElement | null = document.querySelector("#total");
// let actual: number;

// if (total)
//     actual = parseInt(total.innerText);

// const increment: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual + 1;
//     if (total) {
//         //total //do'ffice un element
//         total.innerText = actual.toString();
//     }
// };
// const decrement: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual - 1;
//     if (total)
//         total.innerText = actual.toString();

// };


// if (btnPlus)
//     btnPlus.addEventListener("click", increment);

// if (btnMoins)
//     btnMoins.addEventListener("click", decrement);

/**
 * Partie 4 - ✏️ Exercice 02
 */

/**
 * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
 */

// const btnPlus = document.querySelector<HTMLButtonElement>("#compteurP");
// const btnMoins = document.querySelector<HTMLButtonElement>("#compteurM");
// const total = document.querySelector<HTMLSpanElement>("#total")!;
// let actual = <number>parseInt(total.innerText);

// const increment: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual + 1;
//     total.innerText = actual.toString();
// };


// function setActual<ArgType> (nb: ArgType): number {
//     let a = nb as unknown as number;
//     a = a - 1;
//     return a;
// }

// function decrement (event: Event): void {
//     event.preventDefault();
//     actual = setActual<number>(actual);
//     total.innerText = actual.toString();

// }



// btnPlus?.addEventListener("click", increment);
// btnMoins?.addEventListener<keyof HTMLElementEventMap>("click", decrement);

/**
 * Partie 5 - ✏️ Exercice 03
 */
 
/**
 * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster, 
 * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
 * ils devront être stocker dans un objet tableau grace a une fonction, 
 * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
 * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
 * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
 * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
 */