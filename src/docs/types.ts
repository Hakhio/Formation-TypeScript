/**
 * Partie - Types
 */

const a: string = "Bonjour à tous";
const b: number = 42;
const c: boolean = true;
const d: null = null;
const e: string[] = ["Bonjour", "à", "tous"];
const f: number[] = [1, 2, 3, 4, 5];
const g: any[] = ["Hello", {}, [], 42, false];
const h: {} = {};
const i: { firstname: string, age: number; } = { firstname: 'Quentin', age: 26 };
const j: { [key: string]: string; } = { hello: "Coucou" };
const k: Date = new Date();
const l: Function = (): void => { };
const m: () => void = (): void => { };
const n: (i: number, s: string, b: boolean) => string[] = (i, s, b): string[] => ['a', 'b'];
// const o: HTMLSpanElement = new HTMLSpanElement();
// const p: Element = new Element();
const q: () => never = () => { throw new Error('Not implemented'); }; // lorsque la fonction ne renvoit JAMAIS rien
let r: unknown = 'a';
r = 1; // Pas sûr du contenu
r = true; // Pas sûr du contenu


export let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n };

// Export grâce à module.exports, un objet lambda, qui contiendra toutes les variables
// Ce qui par la suite, dans notre app.ts, nous évitera des erreurs de nommage de variables déjà existantes

// Attention à l'indexation

const p = { 0: 'Quentin', 1: 42 }; // Tableau classique (clef: number)

// L'indexation transforme fictivement un objet en tableau associatif
const obj = { firstname: 'Quentin', age: 26 };

console.log('obj.age :>> ', obj.age); // output : 31
console.log('obj.firstname :>> ', obj.firstname); // output : Quentin
console.log('obj.["firstname"] :>> ', obj["firstname"]); // output : Quentin

// Attention que la dernière version est moins propre
// → dangeureux en cas de undefined ou unknow


// ✏️ Exercice 01