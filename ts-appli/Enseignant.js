"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enseignant = void 0;
var Personne_1 = require("./Personne");
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(prenom, nom, age, adresse, matiere, salaireMensuel) {
        var _this = _super.call(this, prenom, nom, age, adresse) || this;
        if (salaireMensuel < 0) {
            throw new Error('Salaire invalide');
        }
        _this.matiere = matiere;
        _this.salaireMensuel = salaireMensuel;
        return _this;
    }
    Enseignant.prototype.changerMatiere = function (nouvelleMatiere) {
        this.matiere = nouvelleMatiere;
    };
    Enseignant.prototype.augmenterSalaire = function (pourcentage) {
        if (pourcentage <= 0) {
            return;
        }
        this.salaireMensuel = Math.round((this.salaireMensuel * (1 + pourcentage / 100)) * 100) / 100;
    };
    return Enseignant;
}(Personne_1.Personne));
exports.Enseignant = Enseignant;
