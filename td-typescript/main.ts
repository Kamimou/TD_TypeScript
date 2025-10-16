// Petit script de démonstration des fonctionnalités

import { Point } from './Point.js';
import { Stagiaire } from './Stagiaire.js';
import { Formation } from './Formation.js';

// Ex1
const A = new Point(0, 0);
const B = new Point(3, 4);
const C = new Point(6, 8);

console.log('AB =', A.calculerDistance(B));         // 5
console.log('mid(A,B) =', A.calculerMilieu(B).toString());
console.log('static distance =', Point.distance(0,0,3,4)); // 5

// Démo centrée sur Point uniquement pour l'exo 1

// Ex2
const s1 = new Stagiaire('Imène', [12, 16, 14]);
const s2 = new Stagiaire('Alexis', [9, 10, 11]);
const s3 = new Stagiaire('Crinu', [18, 17, 19]);
const form = new Formation('TS orientée objet', 5, [s1, s2, s3]);

console.log('Moyenne formation =', form.calculerMoyenneFormation().toFixed(2));
console.log('Top index =', form.getIndexMax());
console.log('Top nom =', form.afficherNomMax());
console.log('Top min =', form.afficherMinMax());
console.log('Moyenne Imène =', form.trouverMoyenneParNom('Imène'));
