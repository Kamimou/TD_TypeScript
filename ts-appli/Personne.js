"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(prenom, nom, age, adresse) {
        if (age < 0) {
            throw new Error('Age invalide');
        }
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.adresse = adresse;
    }
    return Personne;
}());
exports.Personne = Personne;
