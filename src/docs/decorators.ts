/**
 * Partie x - Decorators
 */

function Constraint ({ min, max }: { min: number, max: number; }) {

    // Si on veut rester générique
    // return function(target : User, key : keyof User ){  }

    // Uniquement utilisable sur la clef age
    // return function (target: User, key: 'age') { };

    // Totalement générique à la classe
    return function <T> (target: T, key: keyof T) {
        let val = target[key] as any;

        const getter = () => { return val; };
        const setter = (value: unknown) => {
            if (typeof value === 'number' && value >= min && value <= max) { 
                val = value; 
                return;
            }

            throw new Error(`On attend un nombre entre ${min} et ${max}`)
        };

        Object.defineProperty(target, key, { set: setter, get: getter });

    };
}

export class Userss {
    @Constraint({ min: 1, max: 100 })
    age: number = 10;
}


// --------------------------------------

function first() {
    console.log("Premier décorateur évalué");

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log('target :>> ', target);
        console.log('key :>> ', key);
        console.log('descriptor :>> ', descriptor);

        console.log("Permier décorateur appelé");
    }

}

function second() {
    console.log("Deuxième décorateur évalué");

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log('target :>> ', target);
        console.log('key :>> ', key);
        console.log('descriptor :>> ', descriptor);

        console.log("Deuxième décorateur appelé");
    }

}

export class ExempleDecorateurMethod {

    @first()
    @second()
    method() {}
}

// ---------------------------------

function methodEditable (value: boolean) {
    return function (target: any, prop: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value
        console.log(target);
        console.log(prop);
        console.log(descriptor);
    }
}

export class MathClass {

    @methodEditable(false)
    displayFive() {
        console.log(5);
    }

}