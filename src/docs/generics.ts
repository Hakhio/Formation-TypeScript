/**
 * Partie 4 - Generics
 */

export function identity (arg: any): any {
    return arg;
}

export function identity2<Type> (arg: Type): Type {
    return arg;
}

export function identity3<T, E> (arg: T): T {
    return arg;
}

// Exemple avec un tableau
export function fnTab<T> (arg: T[]): T {
    return arg[0];
}

// Autre exemple avec un tableau de 2 types
export function fnTab2<T, E> (arg: Array<T | E>): T | E {
    return arg[0];
}

// Définir que le générique va contenir une propriété 'length'
export function getLength<Type extends { length: number; }> (arg: Type): Type {
    console.log('arg.length :>> ', arg.length);
    return arg;
}

export function getUsers<T extends { id: number; }> (arg: T): number {
    console.log('arg.id :>> ', arg.id);
    return arg.id;
}

// Dans une classe générique
export class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

// Utilisation d'une clef qui fait partie de l'objet
export function getProperty<Type, Key extends keyof Type> (obj: Type, key: Key) {
    return obj[key];
}

// ✏️ Exercice 02