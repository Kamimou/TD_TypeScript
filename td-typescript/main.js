"use strict";
// Petit script de démonstration des fonctionnalités
Object.defineProperty(exports, "__esModule", { value: true });
const Point_js_1 = require("./Point.js");
const Stagiaire_js_1 = require("./Stagiaire.js");
const Formation_js_1 = require("./Formation.js");
// Ex1
const A = new Point_js_1.Point(0, 0);
const B = new Point_js_1.Point(3, 4);
const C = new Point_js_1.Point(6, 8);
console.log('AB =', A.calculerDistance(B)); // 5
console.log('mid(A,B) =', A.calculerMilieu(B).toString());
console.log('static distance =', Point_js_1.Point.distance(0, 0, 3, 4)); // 5
// Démo centrée sur Point uniquement pour l'exo 1
// Ex2
const s1 = new Stagiaire_js_1.Stagiaire('Imène', [12, 16, 14]);
const s2 = new Stagiaire_js_1.Stagiaire('Alexis', [9, 10, 11]);
const s3 = new Stagiaire_js_1.Stagiaire('Crinu', [18, 17, 19]);
const form = new Formation_js_1.Formation('TS orientée objet', 5, [s1, s2, s3]);
console.log('Moyenne formation =', form.calculerMoyenneFormation().toFixed(2));
console.log('Top index =', form.getIndexMax());
console.log('Top nom =', form.afficherNomMax());
console.log('Top min =', form.afficherMinMax());
console.log('Moyenne Imène =', form.trouverMoyenneParNom('Imène'));
