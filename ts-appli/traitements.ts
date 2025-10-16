import { Adresse } from './Adresse';
import { Personne } from './Personne';
import { Enseignant } from './Enseignant';


const adresses: Adresse[] = [
  new Adresse('1 rue des Fleurs', 'Paris', '75001'),
  new Adresse('10 avenue de Lyon', 'Lyon', '69002'),
  new Adresse('5 bd de la Mer', 'Marseille', '13001'),
  new Adresse('2 impasse des Pins', 'Paris', '75012'),
];

const personnes: Personne[] = [
  new Personne('Alice', 'Durand', 22, adresses[0]),
  new Personne('Bob', 'Martin', 17, adresses[1]),
  new Personne('Chloé', 'Bernard', 30, adresses[2]),
  new Personne('David', 'Petit', 22, adresses[3]),
];

console.log('--- Personnes (affichage) ---');
personnes.forEach(p => console.log(`${p.prenom} ${p.nom} - ${p.age} - ${p.adresse.ville}`));

console.log('--- Majeurs ---');
const majeurs = personnes.filter(p => p.age >= 18);
console.log(majeurs.map(p => p.prenom));

console.log('--- Tri par âge puis nom ---');
const tries = [...personnes].sort((a, b) => (a.age - b.age) || a.nom.localeCompare(b.nom));
console.log(tries.map(p => `${p.nom}:${p.age}`));

console.log('--- Anniversaire pour Parisiens ---');
personnes.filter(p => p.adresse.ville === 'Paris').forEach(p => p.age++);
console.log(personnes.map(p => `${p.prenom}:${p.age}`));

console.log('--- Groupes par ville ---');
const parVille = personnes.reduce<Record<string, Personne[]>>((acc, p) => {
  acc[p.adresse.ville] = acc[p.adresse.ville] || [];
  acc[p.adresse.ville].push(p);
  return acc;
}, {});
for (const ville in parVille) {
  if (Object.prototype.hasOwnProperty.call(parVille, ville)) {
    const groupe = parVille[ville];
    console.log(ville, groupe.map(p => p.prenom));
  }
}

// Petit test Enseignant
const enseignants: Enseignant[] = [
  new Enseignant('Marie', 'Lemoine', 40, new Adresse('12 rue A', 'Paris', '75003'), 'Maths', 2800),
  new Enseignant('Jean', 'Dupont', 35, new Adresse('5 rue B', 'Lyon', '69001'), 'Physique', 2600),
];
enseignants[0].changerMatiere('Informatique');
enseignants.forEach(e => e.augmenterSalaire(5));
console.log('--- Enseignants ---');
console.log(enseignants.map(e => `${e.prenom} ${e.nom} - ${e.matiere} - ${e.salaireMensuel}`));
