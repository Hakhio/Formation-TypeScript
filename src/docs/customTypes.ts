/**
 * Partie 3 - Types custom
 * On peut créer ses propres types
 */

// Avantage des custom types, pas besoin de classe avec constructeur et instanciation

type Admin = { lastName: string, firstName: string, roleId: number; };

type Id = string | number
type DateString = string

// let admin = new Admin() // 🪧 Pas besoin de faire ceci

export { Admin, Id, DateString };
