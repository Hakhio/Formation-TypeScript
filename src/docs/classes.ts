/**
 * Partie 5 - Classes
 */


class Human {

    public gender: string = '';
    public height: number = 0;
    public weight: number = 0;

    private _etnic: string = '';
    protected __colorEyes: string = 'red';

}

// Les niveaux de portée des props dans une classe sont :
// public    → disponible partout
// private   → disponible uniquement dans la classe (seulement en TS !)
// protected → disponible uniquement dans la classe et ses sous-classes (seulement en TS !)
// #         → cfr. private - rend invisible en dehors de la classe (JS)

// Pour faire hériter une classe d'une autre => extends
// Attention, on ne peut pas accéder à une propriété enfant depuis un parent
// Attention, le constructeur du parent devra toujours être appelé dans l'enfant

// Initialisation des propriétés
// prop: type = valeur  → Initialisation par défaut des valeurs
// prop!: type          → Pas besoin d'initialiser lors de la déclaration mais doit être initialisé dans le constructeur (sauf abstract)
// prop?: type          → Peut prendre la valeur du type associé ou undefined


class Person extends Human {
    public id?: number;
    public name?: string;
    private lastName?: string;
    #_password?: string; // Private (JS)

    private _upperPassword: Function = (password: string) => {
        return password.toUpperCase();
    };

    constructor (id?: number, name?: string, lastName?: string, password?: string) {
        super(); // Permet simplement de créer le parent

        if (!password) password = 'coucou';
        this.#_password = this._upperPassword(password);
        this.id = id;
        this.lastName = lastName;

        this.__colorEyes = 'blue';
    }
}

export class Uuser extends Person {
    login: string = '';
    constructor () {
        super();
        this.__colorEyes = 'yellow';
    }
}

// Attention au Duck Typing (mauvaise pratique)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard

export class Point {
    x: number = 5;
    y: number = 6;
}

export class Geometry {
    x: number = 10;
    y: number = 100;
    other1: string = 'ok';
    other2: boolean = true;
}

// Geometry contient les mêmes propriétés que Point
// Alors Geometry est un point
// Attention que l'ensemble des props doit être présent

export function getX (p: Point) {
    return p.x * p.y;
}

export function getY (p: Point | Geometry): number | string {
    if (p instanceof Geometry) return p.other1;
    else return p.x * p.y;
}

// Manière plus propre
// Introduction à l'abstract

abstract class AGeometry {
    x: number = 0;
    y: number = 0;

    abstract perimetre (): number;
    abstract air (): number;
}

// Une classe abstraite ne peut pas être instanciée car elle n'est pas terminée (not implemented)
// Obligation redéfinir les méthodes non implémentées au plus tard dans les classes 
// enfants qui héritent de la classe abstraite

// CTRL + ; sur la classe => Implement all inherited abstract classes
class Triangle extends AGeometry {
    perimetre (): number {
        throw new Error("Method not implemented.");
    }
    air (): number {
        throw new Error("Method not implemented.");
    }
}

class Points extends AGeometry {
    constructor () {
        super();
    }
    perimetre (): number {
        return (this.x + this.y);
    }
    air (): number {
        return (this.x * this.x);
    }
}

export class Carre extends AGeometry {
    cote: number = 0;

    constructor () {
        super();
    }

    perimetre (): number {
        return (this.x * 4);
    }
    air (): number {
        return this.x * this.x;
    }
}

// Mot-clefs : static
export abstract class AGeometryS {
    x!: number;
    y?: number;

    abstract surface (): number;
    static origin = { x: 0, y: 0 };
}

export class DateConverter {
    static convertTimeStampToDate (timestamp: string): Date {
        return new Date(parseInt(timestamp))
    }
}

// Interfaces
// Les interfaces sont des contracts. 
// Une classe qui implémente une interface se doit d'implémenter tous les membres de celle-ci.

interface Voiture {
    carburant: string;
    typeMoteur: string;
    giletJaune: number;
    boiteVitesse: { auto: boolean, manual: boolean; };

    avance (vitesseActuel: number): number;
    recule (vitesseActuel: number): number;
}

export class Allemande implements Voiture {
    name: string = "Vive les allemandes";
    carburant: string = '';
    typeMoteur: string = '';
    giletJaune: number = 1;
    boiteVitesse: { auto: boolean; manual: boolean; } = { auto: false, manual: true };

    avance (vitesseActuel: number): number {
        throw new Error("Method not implemented.");
    }
    recule (vitesseActuel: number): number {
        throw new Error("Method not implemented.");
    }
}

// ✏️ Exercice 3