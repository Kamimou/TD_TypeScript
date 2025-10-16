"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Adresse_1 = require("./Adresse");
var Personne_1 = require("./Personne");
var Enseignant_1 = require("./Enseignant");
var adresses = [
    new Adresse_1.Adresse('1 rue des Fleurs', 'Paris', '75001'),
    new Adresse_1.Adresse('10 avenue de Lyon', 'Lyon', '69002'),
    new Adresse_1.Adresse('5 bd de la Mer', 'Marseille', '13001'),
    new Adresse_1.Adresse('2 impasse des Pins', 'Paris', '75012'),
];
var personnes = [
    new Personne_1.Personne('Alice', 'Durand', 22, adresses[0]),
    new Personne_1.Personne('Bob', 'Martin', 17, adresses[1]),
    new Personne_1.Personne('Chloé', 'Bernard', 30, adresses[2]),
    new Personne_1.Personne('David', 'Petit', 22, adresses[3]),
];
console.log('--- Personnes (affichage) ---');
personnes.forEach(function (p) { return console.log("".concat(p.prenom, " ").concat(p.nom, " - ").concat(p.age, " - ").concat(p.adresse.ville)); });
console.log('--- Majeurs ---');
var majeurs = personnes.filter(function (p) { return p.age >= 18; });
console.log(majeurs.map(function (p) { return p.prenom; }));
console.log('--- Tri par âge puis nom ---');
var tries = __spreadArray([], personnes, true).sort(function (a, b) { return (a.age - b.age) || a.nom.localeCompare(b.nom); });
console.log(tries.map(function (p) { return "".concat(p.nom, ":").concat(p.age); }));
console.log('--- Anniversaire pour Parisiens ---');
personnes.filter(function (p) { return p.adresse.ville === 'Paris'; }).forEach(function (p) { return p.age++; });
console.log(personnes.map(function (p) { return "".concat(p.prenom, ":").concat(p.age); }));
console.log('--- Groupes par ville ---');
var parVille = personnes.reduce(function (acc, p) {
    acc[p.adresse.ville] = acc[p.adresse.ville] || [];
    acc[p.adresse.ville].push(p);
    return acc;
}, {});
for (var ville in parVille) {
    if (Object.prototype.hasOwnProperty.call(parVille, ville)) {
        var groupe = parVille[ville];
        console.log(ville, groupe.map(function (p) { return p.prenom; }));
    }
}
// Petit test Enseignant
var enseignants = [
    new Enseignant_1.Enseignant('Marie', 'Lemoine', 40, new Adresse_1.Adresse('12 rue A', 'Paris', '75003'), 'Maths', 2800),
    new Enseignant_1.Enseignant('Jean', 'Dupont', 35, new Adresse_1.Adresse('5 rue B', 'Lyon', '69001'), 'Physique', 2600),
];
enseignants[0].changerMatiere('Informatique');
enseignants.forEach(function (e) { return e.augmenterSalaire(5); });
console.log('--- Enseignants ---');
console.log(enseignants.map(function (e) { return "".concat(e.prenom, " ").concat(e.nom, " - ").concat(e.matiere, " - ").concat(e.salaireMensuel); }));
