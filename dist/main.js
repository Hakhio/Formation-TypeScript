/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/classes.ts":
/*!*****************************!*\
  !*** ./src/docs/classes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGeometryS": () => (/* binding */ AGeometryS),
/* harmony export */   "Allemande": () => (/* binding */ Allemande),
/* harmony export */   "Carre": () => (/* binding */ Carre),
/* harmony export */   "DateConverter": () => (/* binding */ DateConverter),
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Uuser": () => (/* binding */ Uuser),
/* harmony export */   "getX": () => (/* binding */ getX),
/* harmony export */   "getY": () => (/* binding */ getY)
/* harmony export */ });
/**
 * Partie 5 - Classes
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person__password;
class Human {
    constructor() {
        this.gender = '';
        this.height = 0;
        this.weight = 0;
        this._etnic = '';
        this.__colorEyes = 'red';
    }
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
    constructor(id, name, lastName, password) {
        super(); // Permet simplement de créer le parent
        _Person__password.set(this, void 0); // Private (JS)
        this._upperPassword = (password) => {
            return password.toUpperCase();
        };
        if (!password)
            password = 'coucou';
        __classPrivateFieldSet(this, _Person__password, this._upperPassword(password), "f");
        this.id = id;
        this.lastName = lastName;
        this.__colorEyes = 'blue';
    }
}
_Person__password = new WeakMap();
class Uuser extends Person {
    constructor() {
        super();
        this.login = '';
        this.__colorEyes = 'yellow';
    }
}
// Attention au Duck Typing (mauvaise pratique)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard
class Point {
    constructor() {
        this.x = 5;
        this.y = 6;
    }
}
class Geometry {
    constructor() {
        this.x = 10;
        this.y = 100;
        this.other1 = 'ok';
        this.other2 = true;
    }
}
// Geometry contient les mêmes propriétés que Point
// Alors Geometry est un point
// Attention que l'ensemble des props doit être présent
function getX(p) {
    return p.x * p.y;
}
function getY(p) {
    if (p instanceof Geometry)
        return p.other1;
    else
        return p.x * p.y;
}
// Manière plus propre
// Introduction à l'abstract
class AGeometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// Une classe abstraite ne peut pas être instanciée car elle n'est pas terminée (not implemented)
// Obligation redéfinir les méthodes non implémentées au plus tard dans les classes 
// enfants qui héritent de la classe abstraite
// CTRL + ; sur la classe => Implement all inherited abstract classes
class Triangle extends AGeometry {
    perimetre() {
        throw new Error("Method not implemented.");
    }
    air() {
        throw new Error("Method not implemented.");
    }
}
class Points extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        return (this.x + this.y);
    }
    air() {
        return (this.x * this.x);
    }
}
class Carre extends AGeometry {
    constructor() {
        super();
        this.cote = 0;
    }
    perimetre() {
        return (this.x * 4);
    }
    air() {
        return this.x * this.x;
    }
}
// Mot-clefs : static
class AGeometryS {
}
AGeometryS.origin = { x: 0, y: 0 };
class DateConverter {
    static convertTimeStampToDate(timestamp) {
        return new Date(parseInt(timestamp));
    }
}
class Allemande {
    constructor() {
        this.name = "Vive les allemandes";
        this.carburant = '';
        this.typeMoteur = '';
        this.giletJaune = 1;
        this.boiteVitesse = { auto: false, manual: true };
    }
    avance(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
}
// ✏️ Exercice 3


/***/ }),

/***/ "./src/docs/decorators.ts":
/*!********************************!*\
  !*** ./src/docs/decorators.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExempleDecorateurMethod": () => (/* binding */ ExempleDecorateurMethod),
/* harmony export */   "MathClass": () => (/* binding */ MathClass),
/* harmony export */   "Userss": () => (/* binding */ Userss)
/* harmony export */ });
/**
 * Partie x - Decorators
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Constraint({ min, max }) {
    // Si on veut rester générique
    // return function(target : User, key : keyof User ){  }
    // Uniquement utilisable sur la clef age
    // return function (target: User, key: 'age') { };
    // Totalement générique à la classe
    return function (target, key) {
        let val = target[key];
        const getter = () => { return val; };
        const setter = (value) => {
            if (typeof value === 'number' && value >= min && value <= max) {
                val = value;
                return;
            }
            throw new Error(`On attend un nombre entre ${min} et ${max}`);
        };
        Object.defineProperty(target, key, { set: setter, get: getter });
    };
}
class Userss {
    constructor() {
        this.age = 10;
    }
}
__decorate([
    Constraint({ min: 1, max: 100 }),
    __metadata("design:type", Number)
], Userss.prototype, "age", void 0);
// --------------------------------------
function first() {
    console.log("Premier décorateur évalué");
    return function (target, key, descriptor) {
        console.log('target :>> ', target);
        console.log('key :>> ', key);
        console.log('descriptor :>> ', descriptor);
        console.log("Permier décorateur appelé");
    };
}
function second() {
    console.log("Deuxième décorateur évalué");
    return function (target, key, descriptor) {
        console.log('target :>> ', target);
        console.log('key :>> ', key);
        console.log('descriptor :>> ', descriptor);
        console.log("Deuxième décorateur appelé");
    };
}
class ExempleDecorateurMethod {
    method() { }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExempleDecorateurMethod.prototype, "method", null);
// ---------------------------------
function methodEditable(value) {
    return function (target, prop, descriptor) {
        descriptor.writable = value;
        console.log(target);
        console.log(prop);
        console.log(descriptor);
    };
}
class MathClass {
    displayFive() {
        console.log(5);
    }
}
__decorate([
    methodEditable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MathClass.prototype, "displayFive", null);


/***/ }),

/***/ "./src/docs/generics.ts":
/*!******************************!*\
  !*** ./src/docs/generics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericNumber": () => (/* binding */ GenericNumber),
/* harmony export */   "fnTab": () => (/* binding */ fnTab),
/* harmony export */   "fnTab2": () => (/* binding */ fnTab2),
/* harmony export */   "getLength": () => (/* binding */ getLength),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "identity2": () => (/* binding */ identity2),
/* harmony export */   "identity3": () => (/* binding */ identity3)
/* harmony export */ });
/**
 * Partie 4 - Generics
 */
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
// Exemple avec un tableau
function fnTab(arg) {
    return arg[0];
}
// Autre exemple avec un tableau de 2 types
function fnTab2(arg) {
    return arg[0];
}
// Définir que le générique va contenir une propriété 'length'
function getLength(arg) {
    console.log('arg.length :>> ', arg.length);
    return arg;
}
function getUsers(arg) {
    console.log('arg.id :>> ', arg.id);
    return arg.id;
}
// Dans une classe générique
class GenericNumber {
}
// Utilisation d'une clef qui fait partie de l'objet
function getProperty(obj, key) {
    return obj[key];
}
// ✏️ Exercice 02


/***/ }),

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TUser": () => (/* binding */ TUser),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isUser": () => (/* binding */ isUser),
/* harmony export */   "printId": () => (/* binding */ printId)
/* harmony export */ });
/**
 * Partie - Narrowing
 * ou comment réduire la liste des types disponibles
 */
let btn_inc = document.querySelector('#increment'); // Element | Null
let btn_inc2 = document.querySelector('#increment'); // Element
let btn_inc3 = document.querySelector('#increment'); // HTMLButtonElement
// 🪧 Attention pour btn_inc2 et btn_inc3, vous empêchez le querySelector de fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'
// Autre exemple
let btn_dec = (event) => {
    event.preventDefault();
    const input = document.querySelector("#res"); // HTMLInputElement ou null
    if (input) {
        // HTMLInputElement
        // Premier élément du narrowing, j'ai éliminer le fait qu'il puisse être null
    }
    else {
        // null
    }
};
// Autre exemple (avec un id)
function printId(id) {
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
function exempleN(a, b) {
    if (a === b) {
        console.log(a); // ici il sera d'office en string
        // Le seul point commun entre a et b est string
    }
}
function exempleOperator(a) {
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
function isDate(a) {
    return a instanceof Date;
}
// ✏️ écrire l'exemple dans ./app.ts
// Cas plus concret
class TUser {
    constructor(name) { this.name = name; }
}
function isUser(a) {
    return a instanceof TUser;
}
// On aurait très bien pu mettre : boolean en retour de fonction
// Mais, dans la lecture de la doc au survol de la fonction,
// il est plus intéressant de savoir que le retour d'un booléen 
// sera sur un TUser et non d'un booléen
// ✏️ écrire l'exemple dans ./app.ts


/***/ }),

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mesTypes": () => (/* binding */ mesTypes)
/* harmony export */ });
/**
 * Partie - Types
 */
const a = "Bonjour à tous";
const b = 42;
const c = true;
const d = null;
const e = ["Bonjour", "à", "tous"];
const f = [1, 2, 3, 4, 5];
const g = ["Hello", {}, [], 42, false];
const h = {};
const i = { firstname: 'Quentin', age: 26 };
const j = { hello: "Coucou" };
const k = new Date();
const l = () => { };
const m = () => { };
const n = (i, s, b) => ['a', 'b'];
// const o: HTMLSpanElement = new HTMLSpanElement();
// const p: Element = new Element();
const q = () => { throw new Error('Not implemented'); }; // lorsque la fonction ne renvoit JAMAIS rien
let r = 'a';
r = 1; // Pas sûr du contenu
r = true; // Pas sûr du contenu
let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n };
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


/***/ }),

/***/ "./src/models/Users.model.ts":
/*!***********************************!*\
  !*** ./src/models/Users.model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
class Users {
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
/* harmony import */ var _docs_generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/generics */ "./src/docs/generics.ts");
/* harmony import */ var _models_Users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Users.model */ "./src/models/Users.model.ts");
/* harmony import */ var _docs_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/classes */ "./src/docs/classes.ts");
/* harmony import */ var _docs_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs/decorators */ "./src/docs/decorators.ts");
/**
 * Partie 1 - Types
 */
console.warn("Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);
console.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);
console.log('mesTypes.d :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.d);
console.log('mesTypes.e :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.e);
console.log('mesTypes.f :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.f);
console.log('mesTypes.g :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.g);
console.log('mesTypes.h :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.h);
console.log('mesTypes.i :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.i);
console.log('mesTypes.j :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.j);
console.log('mesTypes.k :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.k);
console.log('mesTypes.l :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.l);
console.log('mesTypes.m :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.m);
console.log('mesTypes.n :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.n);
/**
 * Partie 2 - Indexation
 */
/**
 * Partie 3 - Assertion de type
 */
/**
 * Partie 2 - Narrowing
 * ou comment réduire la liste des types disponibles
 */
console.warn("Narrowing");

(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(12);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)('a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(null);
let birthDate = new Date('03/04/1996');
console.log('Date [03/04/1996]', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));
console.log('String [03/04/1996]', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('03/04/1996'));
let user = new _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.TUser('Quentin');
console.log('isUser(user)', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)(user));
let y = (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)('Toto');
console.log('y :>> ', y);
/**
 * Partie 3 - Types custom
 * On peut créer ses propres types
 */
console.warn("Custom Types");
let admin = {
    lastName: 'Geerts',
    firstName: 'Quentin',
    roleId: 42
};
console.log('admin :>> ', admin);
let idTmpInt = 42;
let idTmpString = "42";
// let idTmpBoolean: Id = true; // Ne fonctionne pas
console.log('idTmpType :>> ', idTmpInt);
console.log('idTmpType :>> ', idTmpString);
let dateTmp = "03/04/1996";
console.log('dateTmp :>> ', dateTmp);
/**
 * Partie 4 - Generics
 */
console.warn("Generics");

const id1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3); // On perd le typage dynamique passé en paramètre à cause du any
console.log('id1 :>> ', id1);
console.log('typeof id1 :>> ', typeof id1);
const id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('Hello');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);
const id3a = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Coucou'); // Type literal de "Coucou"
const id3b = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Heyo'); // Récupercussion du type string sur le type de arg et retour
console.log('id3a :>> ', id3a);
console.log('typeof id3a :>> ', typeof id3a);
console.log('id3b :>> ', id3a);
console.log('typeof id3b :>> ', typeof id3a);
const ft = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.fnTab)(['a', 'b', 'c']);
console.log('ft :>> ', ft);
const ft2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.fnTab2)([26, 1, 'C', 42]);
console.log('ft2 :>> ', ft2);
const myLength = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getLength)('Bonjour');
// const myLength2 = getLength(6); // Ne fonctionne pas car un number ne possède pas la propriété length
const myLength3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getLength)(['a', 1, true]);
console.log('myLength :>> ', myLength);
console.log('myLength3 :>> ', myLength3);

let myUser = new _models_Users_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
myUser = { lastName: "Geerts", firstName: "Quentin", id: 4 };
const gu1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getUsers)(myUser);
const gu2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getUsers)(myUser);
console.log('gu1 :>> ', gu1);
console.log('gu2 :>> ', gu2);
// Avec classe générique

let nb = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.GenericNumber();
nb.zeroValue = 0;
nb.add = (x, y) => x + y;
// Utilisation d'une clef qui fait partie d'un objet
let x = { a: 1, b: 2, c: 3, d: 4 };
(0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getProperty)(x, 'a');
// getProperty(x, 'z'); // Ne fonctionne pas car x n'a pas de propriété z
/**
 * Partie 5 - Classes
 */
console.warn("Classes");

let uuser = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Uuser();
console.log('uuser :>> ', uuser);
// Duck Typing

console.log('getX(new Point) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Point));
console.log('getX(new Geometry) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Geometry));
console.log('getY(new Point) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Point));
console.log('getY(new Geometry) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Geometry));
console.log('new Carre :>> ', new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Carre);
// Mot-clef : static

const ags = _docs_classes__WEBPACK_IMPORTED_MODULE_4__.AGeometryS.origin; // On peut accéder à une propriété sans avoir à instancier la class (comme elle est abstrait, je ne peux déjà pas l'instancier 😉)
console.log('ags :>> ', ags);
console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_4__.DateConverter.convertTimeStampToDate(new Date().getTime().toString()));
// Interfaces

let mercedes = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Allemande();
let audi = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Allemande();
audi.name = 'Vive les audis !';
console.log('mercedes :>> ', mercedes);
console.log('audi :>> ', audi);
/**
 * Partie x - Decorators
 */
console.warn('Partie 6 - Decorators');

let u = new _docs_decorators__WEBPACK_IMPORTED_MODULE_5__.Userss();
u.age = 2;
console.log('u :>> ', u);
console.log('u :>> ', u.age);

const ed = new _docs_decorators__WEBPACK_IMPORTED_MODULE_5__.ExempleDecorateurMethod();
ed.method();

const mc = new _docs_decorators__WEBPACK_IMPORTED_MODULE_5__.MathClass();
mc.displayFive();
mc.displayFive = function () {
    console.log(10);
};
mc.displayFive();

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvY2xhc3Nlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL2dlbmVyaWNzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL25hcnJvd2luZy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kZWxzL1VzZXJzLm1vZGVsLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4ZXJjaWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIDUgLSBDbGFzc2VzXHJcbiAqL1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufTtcclxudmFyIF9QZXJzb25fX3Bhc3N3b3JkO1xyXG5jbGFzcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdlbmRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLndlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXRuaWMgPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3JlZCc7XHJcbiAgICB9XHJcbn1cclxuLy8gTGVzIG5pdmVhdXggZGUgcG9ydMOpZSBkZXMgcHJvcHMgZGFucyB1bmUgY2xhc3NlIHNvbnQgOlxyXG4vLyBwdWJsaWMgICAg4oaSIGRpc3BvbmlibGUgcGFydG91dFxyXG4vLyBwcml2YXRlICAg4oaSIGRpc3BvbmlibGUgdW5pcXVlbWVudCBkYW5zIGxhIGNsYXNzZSAoc2V1bGVtZW50IGVuIFRTICEpXHJcbi8vIHByb3RlY3RlZCDihpIgZGlzcG9uaWJsZSB1bmlxdWVtZW50IGRhbnMgbGEgY2xhc3NlIGV0IHNlcyBzb3VzLWNsYXNzZXMgKHNldWxlbWVudCBlbiBUUyAhKVxyXG4vLyAjICAgICAgICAg4oaSIGNmci4gcHJpdmF0ZSAtIHJlbmQgaW52aXNpYmxlIGVuIGRlaG9ycyBkZSBsYSBjbGFzc2UgKEpTKVxyXG4vLyBQb3VyIGZhaXJlIGjDqXJpdGVyIHVuZSBjbGFzc2UgZCd1bmUgYXV0cmUgPT4gZXh0ZW5kc1xyXG4vLyBBdHRlbnRpb24sIG9uIG5lIHBldXQgcGFzIGFjY8OpZGVyIMOgIHVuZSBwcm9wcmnDqXTDqSBlbmZhbnQgZGVwdWlzIHVuIHBhcmVudFxyXG4vLyBBdHRlbnRpb24sIGxlIGNvbnN0cnVjdGV1ciBkdSBwYXJlbnQgZGV2cmEgdG91am91cnMgw6p0cmUgYXBwZWzDqSBkYW5zIGwnZW5mYW50XHJcbi8vIEluaXRpYWxpc2F0aW9uIGRlcyBwcm9wcmnDqXTDqXNcclxuLy8gcHJvcDogdHlwZSA9IHZhbGV1ciAg4oaSIEluaXRpYWxpc2F0aW9uIHBhciBkw6lmYXV0IGRlcyB2YWxldXJzXHJcbi8vIHByb3AhOiB0eXBlICAgICAgICAgIOKGkiBQYXMgYmVzb2luIGQnaW5pdGlhbGlzZXIgbG9ycyBkZSBsYSBkw6ljbGFyYXRpb24gbWFpcyBkb2l0IMOqdHJlIGluaXRpYWxpc8OpIGRhbnMgbGUgY29uc3RydWN0ZXVyIChzYXVmIGFic3RyYWN0KVxyXG4vLyBwcm9wPzogdHlwZSAgICAgICAgICDihpIgUGV1dCBwcmVuZHJlIGxhIHZhbGV1ciBkdSB0eXBlIGFzc29jacOpIG91IHVuZGVmaW5lZFxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgbGFzdE5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgc3VwZXIoKTsgLy8gUGVybWV0IHNpbXBsZW1lbnQgZGUgY3LDqWVyIGxlIHBhcmVudFxyXG4gICAgICAgIF9QZXJzb25fX3Bhc3N3b3JkLnNldCh0aGlzLCB2b2lkIDApOyAvLyBQcml2YXRlIChKUylcclxuICAgICAgICB0aGlzLl91cHBlclBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzd29yZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFwYXNzd29yZClcclxuICAgICAgICAgICAgcGFzc3dvcmQgPSAnY291Y291JztcclxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9QZXJzb25fX3Bhc3N3b3JkLCB0aGlzLl91cHBlclBhc3N3b3JkKHBhc3N3b3JkKSwgXCJmXCIpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9ICdibHVlJztcclxuICAgIH1cclxufVxyXG5fUGVyc29uX19wYXNzd29yZCA9IG5ldyBXZWFrTWFwKCk7XHJcbmV4cG9ydCBjbGFzcyBVdXNlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3llbGxvdyc7XHJcbiAgICB9XHJcbn1cclxuLy8gQXR0ZW50aW9uIGF1IER1Y2sgVHlwaW5nIChtYXV2YWlzZSBwcmF0aXF1ZSlcclxuLy8gU2kgamUgdm9pcyB1biBvaXNlYXUgcXVpIHZvbGUgY29tbWUgdW4gY2FuYXJkLCBjYW5jYW5lIGNvbW1lIHVuIGNhbmFyZCwgZXQgbmFnZSBjb21tZSB1biBjYW5hcmRcclxuLy8gYWxvcnMgaidhcHBlbGxlIGNldCBvaXNlYXUgdW4gY2FuYXJkXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnggPSA1O1xyXG4gICAgICAgIHRoaXMueSA9IDY7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDEwO1xyXG4gICAgICAgIHRoaXMueSA9IDEwMDtcclxuICAgICAgICB0aGlzLm90aGVyMSA9ICdvayc7XHJcbiAgICAgICAgdGhpcy5vdGhlcjIgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8vIEdlb21ldHJ5IGNvbnRpZW50IGxlcyBtw6ptZXMgcHJvcHJpw6l0w6lzIHF1ZSBQb2ludFxyXG4vLyBBbG9ycyBHZW9tZXRyeSBlc3QgdW4gcG9pbnRcclxuLy8gQXR0ZW50aW9uIHF1ZSBsJ2Vuc2VtYmxlIGRlcyBwcm9wcyBkb2l0IMOqdHJlIHByw6lzZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRYKHApIHtcclxuICAgIHJldHVybiBwLnggKiBwLnk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFkocCkge1xyXG4gICAgaWYgKHAgaW5zdGFuY2VvZiBHZW9tZXRyeSlcclxuICAgICAgICByZXR1cm4gcC5vdGhlcjE7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHAueCAqIHAueTtcclxufVxyXG4vLyBNYW5pw6hyZSBwbHVzIHByb3ByZVxyXG4vLyBJbnRyb2R1Y3Rpb24gw6AgbCdhYnN0cmFjdFxyXG5jbGFzcyBBR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG59XHJcbi8vIFVuZSBjbGFzc2UgYWJzdHJhaXRlIG5lIHBldXQgcGFzIMOqdHJlIGluc3RhbmNpw6llIGNhciBlbGxlIG4nZXN0IHBhcyB0ZXJtaW7DqWUgKG5vdCBpbXBsZW1lbnRlZClcclxuLy8gT2JsaWdhdGlvbiByZWTDqWZpbmlyIGxlcyBtw6l0aG9kZXMgbm9uIGltcGzDqW1lbnTDqWVzIGF1IHBsdXMgdGFyZCBkYW5zIGxlcyBjbGFzc2VzIFxyXG4vLyBlbmZhbnRzIHF1aSBow6lyaXRlbnQgZGUgbGEgY2xhc3NlIGFic3RyYWl0ZVxyXG4vLyBDVFJMICsgOyBzdXIgbGEgY2xhc3NlID0+IEltcGxlbWVudCBhbGwgaW5oZXJpdGVkIGFic3RyYWN0IGNsYXNzZXNcclxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBBR2VvbWV0cnkge1xyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgYWlyKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFBvaW50cyBleHRlbmRzIEFHZW9tZXRyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICsgdGhpcy55KTtcclxuICAgIH1cclxuICAgIGFpcigpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCAqIHRoaXMueCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcnJlIGV4dGVuZHMgQUdlb21ldHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb3RlID0gMDtcclxuICAgIH1cclxuICAgIHBlcmltZXRyZSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCAqIDQpO1xyXG4gICAgfVxyXG4gICAgYWlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLng7XHJcbiAgICB9XHJcbn1cclxuLy8gTW90LWNsZWZzIDogc3RhdGljXHJcbmV4cG9ydCBjbGFzcyBBR2VvbWV0cnlTIHtcclxufVxyXG5BR2VvbWV0cnlTLm9yaWdpbiA9IHsgeDogMCwgeTogMCB9O1xyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbnZlcnRlciB7XHJcbiAgICBzdGF0aWMgY29udmVydFRpbWVTdGFtcFRvRGF0ZSh0aW1lc3RhbXApIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQodGltZXN0YW1wKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFsbGVtYW5kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlZpdmUgbGVzIGFsbGVtYW5kZXNcIjtcclxuICAgICAgICB0aGlzLmNhcmJ1cmFudCA9ICcnO1xyXG4gICAgICAgIHRoaXMudHlwZU1vdGV1ciA9ICcnO1xyXG4gICAgICAgIHRoaXMuZ2lsZXRKYXVuZSA9IDE7XHJcbiAgICAgICAgdGhpcy5ib2l0ZVZpdGVzc2UgPSB7IGF1dG86IGZhbHNlLCBtYW51YWw6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGF2YW5jZSh2aXRlc3NlQWN0dWVsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICByZWN1bGUodml0ZXNzZUFjdHVlbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbi8vIOKcj++4jyBFeGVyY2ljZSAzXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgeCAtIERlY29yYXRvcnNcclxuICovXHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5mdW5jdGlvbiBDb25zdHJhaW50KHsgbWluLCBtYXggfSkge1xyXG4gICAgLy8gU2kgb24gdmV1dCByZXN0ZXIgZ8OpbsOpcmlxdWVcclxuICAgIC8vIHJldHVybiBmdW5jdGlvbih0YXJnZXQgOiBVc2VyLCBrZXkgOiBrZXlvZiBVc2VyICl7ICB9XHJcbiAgICAvLyBVbmlxdWVtZW50IHV0aWxpc2FibGUgc3VyIGxhIGNsZWYgYWdlXHJcbiAgICAvLyByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogVXNlciwga2V5OiAnYWdlJykgeyB9O1xyXG4gICAgLy8gVG90YWxlbWVudCBnw6luw6lyaXF1ZSDDoCBsYSBjbGFzc2VcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgY29uc3QgZ2V0dGVyID0gKCkgPT4geyByZXR1cm4gdmFsOyB9O1xyXG4gICAgICAgIGNvbnN0IHNldHRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9uIGF0dGVuZCB1biBub21icmUgZW50cmUgJHttaW59IGV0ICR7bWF4fWApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7IHNldDogc2V0dGVyLCBnZXQ6IGdldHRlciB9KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVzZXJzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFnZSA9IDEwO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgQ29uc3RyYWludCh7IG1pbjogMSwgbWF4OiAxMDAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBVc2Vyc3MucHJvdG90eXBlLCBcImFnZVwiLCB2b2lkIDApO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBmaXJzdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJlbWllciBkw6ljb3JhdGV1ciDDqXZhbHXDqVwiKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0IDo+PiAnLCB0YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXkgOj4+ICcsIGtleSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0b3IgOj4+ICcsIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGVybWllciBkw6ljb3JhdGV1ciBhcHBlbMOpXCIpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBzZWNvbmQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRldXhpw6htZSBkw6ljb3JhdGV1ciDDqXZhbHXDqVwiKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0IDo+PiAnLCB0YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXkgOj4+ICcsIGtleSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0b3IgOj4+ICcsIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGV1eGnDqG1lIGTDqWNvcmF0ZXVyIGFwcGVsw6lcIik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFeGVtcGxlRGVjb3JhdGV1ck1ldGhvZCB7XHJcbiAgICBtZXRob2QoKSB7IH1cclxufVxyXG5fX2RlY29yYXRlKFtcclxuICAgIGZpcnN0KCksXHJcbiAgICBzZWNvbmQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIHZvaWQgMClcclxuXSwgRXhlbXBsZURlY29yYXRldXJNZXRob2QucHJvdG90eXBlLCBcIm1ldGhvZFwiLCBudWxsKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1ldGhvZEVkaXRhYmxlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB2YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3ApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0b3IpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgTWF0aENsYXNzIHtcclxuICAgIGRpc3BsYXlGaXZlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDUpO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgbWV0aG9kRWRpdGFibGUoZmFsc2UpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxyXG5dLCBNYXRoQ2xhc3MucHJvdG90eXBlLCBcImRpc3BsYXlGaXZlXCIsIG51bGwpO1xyXG4iLCIvKipcclxuICogUGFydGllIDQgLSBHZW5lcmljc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkyKGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG4vLyBFeGVtcGxlIGF2ZWMgdW4gdGFibGVhdVxyXG5leHBvcnQgZnVuY3Rpb24gZm5UYWIoYXJnKSB7XHJcbiAgICByZXR1cm4gYXJnWzBdO1xyXG59XHJcbi8vIEF1dHJlIGV4ZW1wbGUgYXZlYyB1biB0YWJsZWF1IGRlIDIgdHlwZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGZuVGFiMihhcmcpIHtcclxuICAgIHJldHVybiBhcmdbMF07XHJcbn1cclxuLy8gRMOpZmluaXIgcXVlIGxlIGfDqW7DqXJpcXVlIHZhIGNvbnRlbmlyIHVuZSBwcm9wcmnDqXTDqSAnbGVuZ3RoJ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVuZ3RoKGFyZykge1xyXG4gICAgY29uc29sZS5sb2coJ2FyZy5sZW5ndGggOj4+ICcsIGFyZy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMoYXJnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXJnLmlkIDo+PiAnLCBhcmcuaWQpO1xyXG4gICAgcmV0dXJuIGFyZy5pZDtcclxufVxyXG4vLyBEYW5zIHVuZSBjbGFzc2UgZ8OpbsOpcmlxdWVcclxuZXhwb3J0IGNsYXNzIEdlbmVyaWNOdW1iZXIge1xyXG59XHJcbi8vIFV0aWxpc2F0aW9uIGQndW5lIGNsZWYgcXVpIGZhaXQgcGFydGllIGRlIGwnb2JqZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbn1cclxuLy8g4pyP77iPIEV4ZXJjaWNlIDAyXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgLSBOYXJyb3dpbmdcclxuICogb3UgY29tbWVudCByw6lkdWlyZSBsYSBsaXN0ZSBkZXMgdHlwZXMgZGlzcG9uaWJsZXNcclxuICovXHJcbmxldCBidG5faW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50IHwgTnVsbFxyXG5sZXQgYnRuX2luYzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnRcclxubGV0IGJ0bl9pbmMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBIVE1MQnV0dG9uRWxlbWVudFxyXG4vLyDwn6qnIEF0dGVudGlvbiBwb3VyIGJ0bl9pbmMyIGV0IGJ0bl9pbmMzLCB2b3VzIGVtcMOqY2hleiBsZSBxdWVyeVNlbGVjdG9yIGRlIGZvbmN0aW9ubmVyIGNvcnJlY3RlbWVudCBlbiBjYXMgZGUgbnVsbFxyXG4vLyBMZSBtaWV1eCBzZXJhIGQndXRpbGlzZXIgZGVzIGNvbmRpdGlvbnMgYXUgbGlldSBkdSBuYXJyb3dpbmcgJyEnIG91ICdhcydcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG5sZXQgYnRuX2RlYyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNcIik7IC8vIEhUTUxJbnB1dEVsZW1lbnQgb3UgbnVsbFxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgLy8gSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIC8vIFByZW1pZXIgw6lsw6ltZW50IGR1IG5hcnJvd2luZywgaidhaSDDqWxpbWluZXIgbGUgZmFpdCBxdSdpbCBwdWlzc2Ugw6p0cmUgbnVsbFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgfVxyXG59O1xyXG4vLyBBdXRyZSBleGVtcGxlIChhdmVjIHVuIGlkKVxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJZChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgLy8gc3RyaW5nIHwgbnVtYmVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgOj4+JywgaWQpOyAvLyBTaW11bMOpLCB1biBhbGdvIGRlIHRyYXZhaWwgc3VyIGwnaWQsIGV0IGVucmVnaXN0cmVtZW50IGVuIGRiIHNww6ljaWZpcXVlIGRhbnMgZGVzIGZvbmN0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRtcElkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgOj4+JywgdG1wSWQpO1xyXG4gICAgICAgICAgICAvLyBUcmFpdGVtZW50IGR1IGNhcyBudW1iZXIgZGlyZWN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgICAgIGlkID0gNDI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIGlkKTtcclxuICAgIH1cclxufVxyXG4vLyDinI/vuI8gw6ljcmlyZSBsJ2V4ZW1wbGUgZGFucyAuL2FwcC50c1xyXG4vLyBBdXRyZSBleGVtcGxlIChkb3VibGUgdmFyaWFibGUgbG9jYWxlKVxyXG5mdW5jdGlvbiBleGVtcGxlTihhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyBpY2kgaWwgc2VyYSBkJ29mZmljZSBlbiBzdHJpbmdcclxuICAgICAgICAvLyBMZSBzZXVsIHBvaW50IGNvbW11biBlbnRyZSBhIGV0IGIgZXN0IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGV4ZW1wbGVPcGVyYXRvcihhKSB7XHJcbiAgICAvLyBFeGVtcGxlIHNpIGEgw6l0YWl0IHVuIG1vdXNlRXZlbnRcclxuICAgIC8vIE1vdXNlRXZlbnQgw6l0YW50IHVuIHR5cGUgVHlwZVNjcmlwdCwgaWwgbidlc3QgcGFzIHJlY29ubnUgcGFyIGxlIHR5cGVvZiBuYXRpZiBhIEpTISBcclxuICAgIC8vIGlmICh0eXBlb2YgYSA9PT0gXCJNb3VzZUV2ZW50XCIpIHsgfVxyXG4gICAgaWYgKFwidmFsdWVcIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7IC8vIHZhbHVlIGVzdCB1bmUgcHJvcHJpw6l0w6kgZGUgSFRNTElucHV0RWxlbWVudFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoXCJ0b3RvXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyBOZSBwYXNzZXJhIGphbWFpc1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7IC8vIE1vdXNlRXZlbnRcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBjYXNcclxuLy8gSmUgdmV1eCBkw6lmaW5pciBvYmxpZ2F0b2lyZW1lbnQgdW4gcmV0b3VyIERhdGUgc3VyIGFcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZShhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuLy8g4pyP77iPIMOpY3JpcmUgbCdleGVtcGxlIGRhbnMgLi9hcHAudHNcclxuLy8gQ2FzIHBsdXMgY29uY3JldFxyXG5leHBvcnQgY2xhc3MgVFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlcihhKSB7XHJcbiAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFRVc2VyO1xyXG59XHJcbi8vIE9uIGF1cmFpdCB0csOocyBiaWVuIHB1IG1ldHRyZSA6IGJvb2xlYW4gZW4gcmV0b3VyIGRlIGZvbmN0aW9uXHJcbi8vIE1haXMsIGRhbnMgbGEgbGVjdHVyZSBkZSBsYSBkb2MgYXUgc3Vydm9sIGRlIGxhIGZvbmN0aW9uLFxyXG4vLyBpbCBlc3QgcGx1cyBpbnTDqXJlc3NhbnQgZGUgc2F2b2lyIHF1ZSBsZSByZXRvdXIgZCd1biBib29sw6llbiBcclxuLy8gc2VyYSBzdXIgdW4gVFVzZXIgZXQgbm9uIGQndW4gYm9vbMOpZW5cclxuLy8g4pyP77iPIMOpY3JpcmUgbCdleGVtcGxlIGRhbnMgLi9hcHAudHNcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zdCBhID0gXCJCb25qb3VyIMOgIHRvdXNcIjtcclxuY29uc3QgYiA9IDQyO1xyXG5jb25zdCBjID0gdHJ1ZTtcclxuY29uc3QgZCA9IG51bGw7XHJcbmNvbnN0IGUgPSBbXCJCb25qb3VyXCIsIFwiw6BcIiwgXCJ0b3VzXCJdO1xyXG5jb25zdCBmID0gWzEsIDIsIDMsIDQsIDVdO1xyXG5jb25zdCBnID0gW1wiSGVsbG9cIiwge30sIFtdLCA0MiwgZmFsc2VdO1xyXG5jb25zdCBoID0ge307XHJcbmNvbnN0IGkgPSB7IGZpcnN0bmFtZTogJ1F1ZW50aW4nLCBhZ2U6IDI2IH07XHJcbmNvbnN0IGogPSB7IGhlbGxvOiBcIkNvdWNvdVwiIH07XHJcbmNvbnN0IGsgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCBsID0gKCkgPT4geyB9O1xyXG5jb25zdCBtID0gKCkgPT4geyB9O1xyXG5jb25zdCBuID0gKGksIHMsIGIpID0+IFsnYScsICdiJ107XHJcbi8vIGNvbnN0IG86IEhUTUxTcGFuRWxlbWVudCA9IG5ldyBIVE1MU3BhbkVsZW1lbnQoKTtcclxuLy8gY29uc3QgcDogRWxlbWVudCA9IG5ldyBFbGVtZW50KCk7XHJcbmNvbnN0IHEgPSAoKSA9PiB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7IH07IC8vIGxvcnNxdWUgbGEgZm9uY3Rpb24gbmUgcmVudm9pdCBKQU1BSVMgcmllblxyXG5sZXQgciA9ICdhJztcclxuciA9IDE7IC8vIFBhcyBzw7tyIGR1IGNvbnRlbnVcclxuciA9IHRydWU7IC8vIFBhcyBzw7tyIGR1IGNvbnRlbnVcclxuZXhwb3J0IGxldCBtZXNUeXBlcyA9IHsgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIG1vZHVsZS5leHBvcnRzLCB1biBvYmpldCBsYW1iZGEsIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUsIGRhbnMgbm90cmUgYXBwLnRzLCBub3VzIMOpdml0ZXJhIGRlcyBlcnJldXJzIGRlIG5vbW1hZ2UgZGUgdmFyaWFibGVzIGTDqWrDoCBleGlzdGFudGVzXHJcbi8vIEF0dGVudGlvbiDDoCBsJ2luZGV4YXRpb25cclxuY29uc3QgcCA9IHsgMDogJ1F1ZW50aW4nLCAxOiA0MiB9OyAvLyBUYWJsZWF1IGNsYXNzaXF1ZSAoY2xlZjogbnVtYmVyKVxyXG4vLyBMJ2luZGV4YXRpb24gdHJhbnNmb3JtZSBmaWN0aXZlbWVudCB1biBvYmpldCBlbiB0YWJsZWF1IGFzc29jaWF0aWZcclxuY29uc3Qgb2JqID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgYWdlOiAyNiB9O1xyXG5jb25zb2xlLmxvZygnb2JqLmFnZSA6Pj4gJywgb2JqLmFnZSk7IC8vIG91dHB1dCA6IDMxXHJcbmNvbnNvbGUubG9nKCdvYmouZmlyc3RuYW1lIDo+PiAnLCBvYmouZmlyc3RuYW1lKTsgLy8gb3V0cHV0IDogUXVlbnRpblxyXG5jb25zb2xlLmxvZygnb2JqLltcImZpcnN0bmFtZVwiXSA6Pj4gJywgb2JqW1wiZmlyc3RuYW1lXCJdKTsgLy8gb3V0cHV0IDogUXVlbnRpblxyXG4vLyBBdHRlbnRpb24gcXVlIGxhIGRlcm5pw6hyZSB2ZXJzaW9uIGVzdCBtb2lucyBwcm9wcmVcclxuLy8g4oaSIGRhbmdldXJldXggZW4gY2FzIGRlIHVuZGVmaW5lZCBvdSB1bmtub3dcclxuLy8g4pyP77iPIEV4ZXJjaWNlIDAxXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIHtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJUeXBlc1wiKTtcclxuaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG4vKipcclxuICogUGFydGllIDIgLSBJbmRleGF0aW9uXHJcbiAqL1xyXG4vKipcclxuICogUGFydGllIDMgLSBBc3NlcnRpb24gZGUgdHlwZVxyXG4gKi9cclxuLyoqXHJcbiAqIFBhcnRpZSAyIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJOYXJyb3dpbmdcIik7XHJcbmltcG9ydCB7IHByaW50SWQsIGlzRGF0ZSwgaXNVc2VyLCBUVXNlciB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZSgnMDMvMDQvMTk5NicpO1xyXG5jb25zb2xlLmxvZygnRGF0ZSBbMDMvMDQvMTk5Nl0nLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzA0LzE5OTZdJywgaXNEYXRlKCcwMy8wNC8xOTk2JykpO1xyXG5sZXQgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpJywgaXNVc2VyKHVzZXIpKTtcclxubGV0IHkgPSBpc1VzZXIoJ1RvdG8nKTtcclxuY29uc29sZS5sb2coJ3kgOj4+ICcsIHkpO1xyXG4vKipcclxuICogUGFydGllIDMgLSBUeXBlcyBjdXN0b21cclxuICogT24gcGV1dCBjcsOpZXIgc2VzIHByb3ByZXMgdHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIkN1c3RvbSBUeXBlc1wiKTtcclxubGV0IGFkbWluID0ge1xyXG4gICAgbGFzdE5hbWU6ICdHZWVydHMnLFxyXG4gICAgZmlyc3ROYW1lOiAnUXVlbnRpbicsXHJcbiAgICByb2xlSWQ6IDQyXHJcbn07XHJcbmNvbnNvbGUubG9nKCdhZG1pbiA6Pj4gJywgYWRtaW4pO1xyXG5sZXQgaWRUbXBJbnQgPSA0MjtcclxubGV0IGlkVG1wU3RyaW5nID0gXCI0MlwiO1xyXG4vLyBsZXQgaWRUbXBCb29sZWFuOiBJZCA9IHRydWU7IC8vIE5lIGZvbmN0aW9ubmUgcGFzXHJcbmNvbnNvbGUubG9nKCdpZFRtcFR5cGUgOj4+ICcsIGlkVG1wSW50KTtcclxuY29uc29sZS5sb2coJ2lkVG1wVHlwZSA6Pj4gJywgaWRUbXBTdHJpbmcpO1xyXG5sZXQgZGF0ZVRtcCA9IFwiMDMvMDQvMTk5NlwiO1xyXG5jb25zb2xlLmxvZygnZGF0ZVRtcCA6Pj4gJywgZGF0ZVRtcCk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNCAtIEdlbmVyaWNzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJHZW5lcmljc1wiKTtcclxuaW1wb3J0IHsgZm5UYWIsIGZuVGFiMiwgZ2V0TGVuZ3RoLCBnZXRQcm9wZXJ0eSwgZ2V0VXNlcnMsIGlkZW50aXR5LCBpZGVudGl0eTIsIGlkZW50aXR5MyB9IGZyb20gXCIuL2RvY3MvZ2VuZXJpY3NcIjtcclxuY29uc3QgaWQxID0gaWRlbnRpdHkoMyk7IC8vIE9uIHBlcmQgbGUgdHlwYWdlIGR5bmFtaXF1ZSBwYXNzw6kgZW4gcGFyYW3DqHRyZSDDoCBjYXVzZSBkdSBhbnlcclxuY29uc29sZS5sb2coJ2lkMSA6Pj4gJywgaWQxKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDEgOj4+ICcsIHR5cGVvZiBpZDEpO1xyXG5jb25zdCBpZDIgPSBpZGVudGl0eTIoJ0hlbGxvJyk7XHJcbmNvbnNvbGUubG9nKCdpZDIgOj4+ICcsIGlkMik7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQyIDo+PiAnLCB0eXBlb2YgaWQyKTtcclxuY29uc3QgaWQzYSA9IGlkZW50aXR5MygnQ291Y291Jyk7IC8vIFR5cGUgbGl0ZXJhbCBkZSBcIkNvdWNvdVwiXHJcbmNvbnN0IGlkM2IgPSBpZGVudGl0eTMoJ0hleW8nKTsgLy8gUsOpY3VwZXJjdXNzaW9uIGR1IHR5cGUgc3RyaW5nIHN1ciBsZSB0eXBlIGRlIGFyZyBldCByZXRvdXJcclxuY29uc29sZS5sb2coJ2lkM2EgOj4+ICcsIGlkM2EpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkM2EgOj4+ICcsIHR5cGVvZiBpZDNhKTtcclxuY29uc29sZS5sb2coJ2lkM2IgOj4+ICcsIGlkM2EpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkM2IgOj4+ICcsIHR5cGVvZiBpZDNhKTtcclxuY29uc3QgZnQgPSBmblRhYihbJ2EnLCAnYicsICdjJ10pO1xyXG5jb25zb2xlLmxvZygnZnQgOj4+ICcsIGZ0KTtcclxuY29uc3QgZnQyID0gZm5UYWIyKFsyNiwgMSwgJ0MnLCA0Ml0pO1xyXG5jb25zb2xlLmxvZygnZnQyIDo+PiAnLCBmdDIpO1xyXG5jb25zdCBteUxlbmd0aCA9IGdldExlbmd0aCgnQm9uam91cicpO1xyXG4vLyBjb25zdCBteUxlbmd0aDIgPSBnZXRMZW5ndGgoNik7IC8vIE5lIGZvbmN0aW9ubmUgcGFzIGNhciB1biBudW1iZXIgbmUgcG9zc8OoZGUgcGFzIGxhIHByb3ByacOpdMOpIGxlbmd0aFxyXG5jb25zdCBteUxlbmd0aDMgPSBnZXRMZW5ndGgoWydhJywgMSwgdHJ1ZV0pO1xyXG5jb25zb2xlLmxvZygnbXlMZW5ndGggOj4+ICcsIG15TGVuZ3RoKTtcclxuY29uc29sZS5sb2coJ215TGVuZ3RoMyA6Pj4gJywgbXlMZW5ndGgzKTtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL21vZGVscy9Vc2Vycy5tb2RlbFwiO1xyXG5sZXQgbXlVc2VyID0gbmV3IFVzZXJzKCk7XHJcbm15VXNlciA9IHsgbGFzdE5hbWU6IFwiR2VlcnRzXCIsIGZpcnN0TmFtZTogXCJRdWVudGluXCIsIGlkOiA0IH07XHJcbmNvbnN0IGd1MSA9IGdldFVzZXJzKG15VXNlcik7XHJcbmNvbnN0IGd1MiA9IGdldFVzZXJzKG15VXNlcik7XHJcbmNvbnNvbGUubG9nKCdndTEgOj4+ICcsIGd1MSk7XHJcbmNvbnNvbGUubG9nKCdndTIgOj4+ICcsIGd1Mik7XHJcbi8vIEF2ZWMgY2xhc3NlIGfDqW7DqXJpcXVlXHJcbmltcG9ydCB7IEdlbmVyaWNOdW1iZXIgfSBmcm9tIFwiLi9kb2NzL2dlbmVyaWNzXCI7XHJcbmxldCBuYiA9IG5ldyBHZW5lcmljTnVtYmVyKCk7XHJcbm5iLnplcm9WYWx1ZSA9IDA7XHJcbm5iLmFkZCA9ICh4LCB5KSA9PiB4ICsgeTtcclxuLy8gVXRpbGlzYXRpb24gZCd1bmUgY2xlZiBxdWkgZmFpdCBwYXJ0aWUgZCd1biBvYmpldFxyXG5sZXQgeCA9IHsgYTogMSwgYjogMiwgYzogMywgZDogNCB9O1xyXG5nZXRQcm9wZXJ0eSh4LCAnYScpO1xyXG4vLyBnZXRQcm9wZXJ0eSh4LCAneicpOyAvLyBOZSBmb25jdGlvbm5lIHBhcyBjYXIgeCBuJ2EgcGFzIGRlIHByb3ByacOpdMOpIHpcclxuLyoqXHJcbiAqIFBhcnRpZSA1IC0gQ2xhc3Nlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiQ2xhc3Nlc1wiKTtcclxuaW1wb3J0IHsgVXVzZXIgfSBmcm9tIFwiLi9kb2NzL2NsYXNzZXNcIjtcclxubGV0IHV1c2VyID0gbmV3IFV1c2VyKCk7XHJcbmNvbnNvbGUubG9nKCd1dXNlciA6Pj4gJywgdXVzZXIpO1xyXG4vLyBEdWNrIFR5cGluZ1xyXG5pbXBvcnQgeyBQb2ludCwgR2VvbWV0cnksIGdldFgsIGdldFksIENhcnJlIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmNvbnNvbGUubG9nKCdnZXRYKG5ldyBQb2ludCkgOj4+ICcsIGdldFgobmV3IFBvaW50KSk7XHJcbmNvbnNvbGUubG9nKCdnZXRYKG5ldyBHZW9tZXRyeSkgOj4+ICcsIGdldFgobmV3IEdlb21ldHJ5KSk7XHJcbmNvbnNvbGUubG9nKCdnZXRZKG5ldyBQb2ludCkgOj4+ICcsIGdldFkobmV3IFBvaW50KSk7XHJcbmNvbnNvbGUubG9nKCdnZXRZKG5ldyBHZW9tZXRyeSkgOj4+ICcsIGdldFkobmV3IEdlb21ldHJ5KSk7XHJcbmNvbnNvbGUubG9nKCduZXcgQ2FycmUgOj4+ICcsIG5ldyBDYXJyZSk7XHJcbi8vIE1vdC1jbGVmIDogc3RhdGljXHJcbmltcG9ydCB7IEFHZW9tZXRyeVMsIERhdGVDb252ZXJ0ZXIgfSBmcm9tIFwiLi9kb2NzL2NsYXNzZXNcIjtcclxuY29uc3QgYWdzID0gQUdlb21ldHJ5Uy5vcmlnaW47IC8vIE9uIHBldXQgYWNjw6lkZXIgw6AgdW5lIHByb3ByacOpdMOpIHNhbnMgYXZvaXIgw6AgaW5zdGFuY2llciBsYSBjbGFzcyAoY29tbWUgZWxsZSBlc3QgYWJzdHJhaXQsIGplIG5lIHBldXggZMOpasOgIHBhcyBsJ2luc3RhbmNpZXIg8J+YiSlcclxuY29uc29sZS5sb2coJ2FncyA6Pj4gJywgYWdzKTtcclxuY29uc29sZS5sb2coRGF0ZUNvbnZlcnRlci5jb252ZXJ0VGltZVN0YW1wVG9EYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpKTtcclxuLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBBbGxlbWFuZGUgfSBmcm9tIFwiLi9kb2NzL2NsYXNzZXNcIjtcclxubGV0IG1lcmNlZGVzID0gbmV3IEFsbGVtYW5kZSgpO1xyXG5sZXQgYXVkaSA9IG5ldyBBbGxlbWFuZGUoKTtcclxuYXVkaS5uYW1lID0gJ1ZpdmUgbGVzIGF1ZGlzICEnO1xyXG5jb25zb2xlLmxvZygnbWVyY2VkZXMgOj4+ICcsIG1lcmNlZGVzKTtcclxuY29uc29sZS5sb2coJ2F1ZGkgOj4+ICcsIGF1ZGkpO1xyXG4vKipcclxuICogUGFydGllIHggLSBEZWNvcmF0b3JzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oJ1BhcnRpZSA2IC0gRGVjb3JhdG9ycycpO1xyXG5pbXBvcnQgeyBVc2Vyc3MgfSBmcm9tICcuL2RvY3MvZGVjb3JhdG9ycyc7XHJcbmxldCB1ID0gbmV3IFVzZXJzcygpO1xyXG51LmFnZSA9IDI7XHJcbmNvbnNvbGUubG9nKCd1IDo+PiAnLCB1KTtcclxuY29uc29sZS5sb2coJ3UgOj4+ICcsIHUuYWdlKTtcclxuaW1wb3J0IHsgRXhlbXBsZURlY29yYXRldXJNZXRob2QgfSBmcm9tIFwiLi9kb2NzL2RlY29yYXRvcnNcIjtcclxuY29uc3QgZWQgPSBuZXcgRXhlbXBsZURlY29yYXRldXJNZXRob2QoKTtcclxuZWQubWV0aG9kKCk7XHJcbmltcG9ydCB7IE1hdGhDbGFzcyB9IGZyb20gXCIuL2RvY3MvZGVjb3JhdG9yc1wiO1xyXG5jb25zdCBtYyA9IG5ldyBNYXRoQ2xhc3MoKTtcclxubWMuZGlzcGxheUZpdmUoKTtcclxubWMuZGlzcGxheUZpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygxMCk7XHJcbn07XHJcbm1jLmRpc3BsYXlGaXZlKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogUGFydGllIDEgLSDinI/vuI8gRXhlcmNpY2UgMDFcclxuICovXHJcbi8qKlxyXG4gKiBDcsOpZXIgdW4gY29kZSBwZXJtZXR0YW50IGRlIGNyw6llciB1biBjb21wdGV1ciBjbGFzc2lxdWUsIGF2ZWMgKyAxLCAtMSBldCA9Li4uLCBpbCBmYXVkcmEgdHlwZSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4gKi9cclxuLy8gY29uc3QgYnRuUGx1czogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdGV1clBcIik7XHJcbi8vIGNvbnN0IGJ0bk1vaW5zOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB0ZXVyTVwiKTtcclxuLy8gY29uc3QgdG90YWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsXCIpO1xyXG4vLyBsZXQgYWN0dWFsOiBudW1iZXI7XHJcbi8vIGlmICh0b3RhbClcclxuLy8gICAgIGFjdHVhbCA9IHBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbi8vIGNvbnN0IGluY3JlbWVudDogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhY3R1YWwgPSBhY3R1YWwgKyAxO1xyXG4vLyAgICAgaWYgKHRvdGFsKSB7XHJcbi8vICAgICAgICAgLy90b3RhbCAvL2RvJ2ZmaWNlIHVuIGVsZW1lbnRcclxuLy8gICAgICAgICB0b3RhbC5pbm5lclRleHQgPSBhY3R1YWwudG9TdHJpbmcoKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gY29uc3QgZGVjcmVtZW50OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGFjdHVhbCA9IGFjdHVhbCAtIDE7XHJcbi8vICAgICBpZiAodG90YWwpXHJcbi8vICAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gYWN0dWFsLnRvU3RyaW5nKCk7XHJcbi8vIH07XHJcbi8vIGlmIChidG5QbHVzKVxyXG4vLyAgICAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5jcmVtZW50KTtcclxuLy8gaWYgKGJ0bk1vaW5zKVxyXG4vLyAgICAgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlY3JlbWVudCk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNCAtIOKcj++4jyBFeGVyY2ljZSAwMlxyXG4gKi9cclxuLyoqXHJcbiAqIFJlcHJlbmRyZSBsZSBjb2RlIGRlIGwnZXhvcyAxIGV0IHRyYW5mb3JtZXIgbGUgdG91dCBhdmVjIGRlcyBuYXJyb3dpbmcgZXQgZGVzIGdlbmVyaWNzXHJcbiAqL1xyXG4vLyBjb25zdCBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY29tcHRldXJQXCIpO1xyXG4vLyBjb25zdCBidG5Nb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2NvbXB0ZXVyTVwiKTtcclxuLy8gY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIjdG90YWxcIikhO1xyXG4vLyBsZXQgYWN0dWFsID0gPG51bWJlcj5wYXJzZUludCh0b3RhbC5pbm5lclRleHQpO1xyXG4vLyBjb25zdCBpbmNyZW1lbnQ6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgYWN0dWFsID0gYWN0dWFsICsgMTtcclxuLy8gICAgIHRvdGFsLmlubmVyVGV4dCA9IGFjdHVhbC50b1N0cmluZygpO1xyXG4vLyB9O1xyXG4vLyBmdW5jdGlvbiBzZXRBY3R1YWw8QXJnVHlwZT4gKG5iOiBBcmdUeXBlKTogbnVtYmVyIHtcclxuLy8gICAgIGxldCBhID0gbmIgYXMgdW5rbm93biBhcyBudW1iZXI7XHJcbi8vICAgICBhID0gYSAtIDE7XHJcbi8vICAgICByZXR1cm4gYTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBkZWNyZW1lbnQgKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGFjdHVhbCA9IHNldEFjdHVhbDxudW1iZXI+KGFjdHVhbCk7XHJcbi8vICAgICB0b3RhbC5pbm5lclRleHQgPSBhY3R1YWwudG9TdHJpbmcoKTtcclxuLy8gfVxyXG4vLyBidG5QbHVzPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5jcmVtZW50KTtcclxuLy8gYnRuTW9pbnM/LmFkZEV2ZW50TGlzdGVuZXI8a2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oXCJjbGlja1wiLCBkZWNyZW1lbnQpO1xyXG4vKipcclxuICogUGFydGllIDUgLSDinI/vuI8gRXhlcmNpY2UgMDNcclxuICovXHJcbi8qKlxyXG4gKiBQcsOpcGFyZXIgdW4gbWljcm8gamV1IGRlIHR5cGUgaGVyb2VzIHZzIG1vbnN0ZXIsIHZvdXMgYXVyZXogMiBncmFuZGVzIGNsYXNzZXMsIGhlcm9lcyBldCBtb25zdGVyLFxyXG4gKiBsZSBidXQsIMOpdGFudCBkZSBwb3V2b2lyIGluc3RhbmNpZXIgdW4gbm91dmVhdSBoZXJvIGV0IHVuIG1vbnN0cmUgYXZlYyBkZXMgY2FyYWN0w6hyaXN0aXF1ZXMgZGlmZsOpcmVudGVzLFxyXG4gKiBpbHMgZGV2cm9udCDDqnRyZSBzdG9ja2VyIGRhbnMgdW4gb2JqZXQgdGFibGVhdSBncmFjZSBhIHVuZSBmb25jdGlvbixcclxuICogaWwgZGV2cm9udCBwb3V2b2lyIHMnYWZmcm9udGVyIGdyYcOnZSBhIGRlcyBwb2ludHMgZGUgdmllLCBkJ2F0dGFxdWUgZXQgZGUgZMOpZmVuc2UsXHJcbiAqIHNpIHZvdXMgYXZleiB0ZXJtaW5lciBkYW5zIGxlcyB0ZW1wcyBpbXBhcnRpcywgdm91cyBwb3V2ZXogYW3DqWxpb3JlciwgdXRpbGlzZXogdm90cmUgaW1hZ2luYXRpb25cclxuICogcmVxdWlzOiB1biBnZW5lcmljLCB1biBuYXJyb3dpbmcsIGRlcyBjbGFzc2VzLCB1biBzdGF0aWMsIHVuZSBhYnN0cmFjdCwgbGUgdG91dCBlbnRpw6hyZW1lbnQgdHlww6kgIVxyXG4gKiBuJ2jDqXNpdGV6IHBhciDDoCB1dGlsaXNlciBsJ2h0bWwgcG91ciDDp2EgZXQgbGUgcmVuZHJlIGVuY29yZSBwbHVzIGNob3VldHRlXHJcbiAqLyBcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9