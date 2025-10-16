import { Personne } from './Personne';
import { Adresse } from './Adresse';

export class Enseignant extends Personne {
  private _matiere: string;
  private _salaireMensuel: number;

  constructor(prenom: string, nom: string, age: number, adresse: Adresse, matiere: string, salaireMensuel: number) {
    super(prenom, nom, age, adresse);
    if (salaireMensuel < 0) {
      throw new Error('Salaire invalide');
    }
    this._matiere = matiere;
    this._salaireMensuel = salaireMensuel;
  }

  changerMatiere(nouvelleMatiere: string): void {
    this._matiere = nouvelleMatiere;
  }

  augmenterSalaire(pourcentage: number): void {
    if (pourcentage <= 0) {
      return;
    }
    this._salaireMensuel = Math.round((this._salaireMensuel * (1 + pourcentage / 100)) * 100) / 100;
  }

  get matiere(): string { return this._matiere; }
  set matiere(value: string) { this._matiere = value; }

  get salaireMensuel(): number { return this._salaireMensuel; }
  set salaireMensuel(value: number) {
    if (value < 0) {
      throw new Error('Salaire invalide');
    }
    this._salaireMensuel = value;
  }
}

